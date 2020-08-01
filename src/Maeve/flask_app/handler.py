import os
import random

from flask import Flask, request, abort, jsonify
from flask_cors import CORS

import psycopg2

###############################################################################
# Flask App Configurations.
###############################################################################
Rasp = Flask(__name__)
CORS(Rasp)

###############################################################################
# Request for Job location data
# NOTE: For testing, use the below curl command:
# curl -H "Content-Type: application/json" -X GET
# 'http://localhost:5000/v1.0/data'
###############################################################################
@Rasp.route('/v1.0/data', methods=['GET'])
def all_():
    response = {}
    # Check if locations exists
    cur.execute('SELECT * FROM location')
    res = cur.fetchall()
    lid_ = {}
    if res is not None:
        for val in res:
            lid_[val[0]] = val[1]

    jobs_result = []
    for lidx, location in lid_.items():
        cur.execute(
            'SELECT * FROM job WHERE lid = %s', (lidx,))
        res = cur.fetchall()
        if res is not None:
            for job in res:
                jobs_result.append(location)

    # No Jobs found
    if len(jobs_result) == 0:
        response['jobs_found'] = 0
        response['data'] = {}
        return (jsonify(response), 200)
    else:
        response['jobs_found'] = len(jobs_result)

    # Query Job description
    response['data'] = {}
    for idx, location_ in enumerate(jobs_result):
        # Add to response
        response['data'][str(idx)] = {
            'location': location_,
        }

    return (jsonify(response), 200)


###############################################################################
# Request for Job data at location/locations, of a sector/sectors
# NOTE: For testing, use the below curl command:
# curl -H "Content-Type: application/json" -X POST
# -d '{"location":["a"], "sector": ["b"]}'
# 'http://localhost:5000/v1.0/request'
# Replace '["a"]' and '["b"]' with names of locations and sectors
# whose information you require.
###############################################################################
@Rasp.route('/v1.0/request', methods=['POST'])
def request_():
    if len(request.data) == 0:
        abort(400)

    if request.headers['Content-Type'] != 'application/json':
        abort(400)

    lid = request.json.get('location')

    response = {}
    if lid is None:
        abort(400)  # missing arguments

    if len(lid) == 0:
        abort(401)  # missing values

    # Check if locations exists
    lid_ = {}
    response['invalid_location'] = []
    for _, val in enumerate(lid):
        cur.execute('SELECT * FROM location WHERE name = %s', (val,))
        res = cur.fetchone()
        if res is None:
            response['invalid_location'].append(val)
        else:
            lid_[val] = res[0]

    # Query for Jobs
    jobs_result = []
    for lidx, location in lid_.items():
        cur.execute(
            'SELECT job.year, job.month, job.new, job_desc.description, job_desc.sal, job_desc.req1, job_desc.req1_w, job_desc.req2, job_desc.req2_w, job_desc.req3, job_desc.req3_w, job_desc.req4, job_desc.req4_w, job_desc.req5, job_desc.req5_w, (SELECT name FROM sector where id = job.sid) FROM job INNER JOIN job_desc ON job.jd_id = job_desc.id WHERE lid = %s', (location,))
        res = cur.fetchall()
        if res is not None:
            for job in res:
                jobs_result.append(job + (lidx,))

    # No Jobs found
    if len(jobs_result) == 0:
        response['jobs_found'] = 0
        response['data'] = {}
        return (jsonify(response), 200)
    else:
        response['jobs_found'] = len(jobs_result)

    # Query Job description
    response['data'] = {}
    for idx, val in enumerate(jobs_result):
        year = int(val[0])
        month = int(val[1])
        type_ = 'new' if int(val[2]) == 1 else 'old'
        name = str(val[3])
        sal = int(val[4])
        req = val[5:15]
        sector_ = str(val[15])
        location_ = str(val[16])

        # Build job year struct
        if year not in response['data']:
            if type(response['data']) is not dict:
                response['data'] = {}
            response['data'][year] = {}

        # Build job type struct
        if sector_ not in response['data'][year]:
            response['data'][year][sector_] = {}
            response['data'][year][sector_]['new'] = {}
            response['data'][year][sector_]['old'] = {}

        j_req = {}
        # Build requirements struct
        for idx in range(0, len(req), 2):
            if req[idx] != None:
                j_req[req[idx]] = req[idx + 1]

        # Build job name struct
        if name not in response['data'][year][str(sector_)][type_]:
            response['data'][year][str(sector_)][type_][name] = {
                'pay': sal,
                'month': month,
                'requirements': j_req
        }

    return (jsonify(response), 200)


if __name__ == '__main__':
    ###########################################################################
    # Postgresql Configurations.
    ###########################################################################
    key = []
    with open('pgres.key', 'r') as f:
        key.append(f.readline())

    # Connect to an existing database
    conn = psycopg2.connect(host='localhost', user="postgres", password=key[0])

    # Open a cursor to perform database operations
    cur = conn.cursor()

    # Check if DB exists, else make a new one
    Rasp.run('0.0.0.0', debug=True)

    cur.close()
    conn.close()