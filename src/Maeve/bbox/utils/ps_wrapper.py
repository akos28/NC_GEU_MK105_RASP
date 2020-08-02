import psycopg2

###############################################################################
# Postgresql Configurations.
###############################################################################


class PostgresUpdate():
    """Initiate Connection with Postgresql. Use for updating structured job
    data consistently across multiple tables

    Methods
    -------
        update(description, requirements=None, salary=None, year=None, month=None)
            Perform INSERT consistently over all associated tables.
        view()
            View entries of all tables.
    """

    def __init__(self, host='localhost', user='postgres', keyfile='pgres.key'):
        """Postgresql connection configurations.

        Parameters
        ----------
            host : str
                Postgresql Hostname (default localhost)
            user : str
                Username (default postgres)
            keyfile : str
                Path to password file (default pgres.key)
        """
        super().__init__()

        key = []
        with open(keyfile, 'r') as f:
            key.append(f.readline())

        # Connect to an existing database
        self.conn = psycopg2.connect(host=host, user=user, password=key[0])
        self.conn.set_session(autocommit=True)

        # Open a cursor to perform database operations
        self.cur = self.conn.cursor()

    def __location__(self, location):
        """Get the lid for given location.

        Parameters
        ----------
            location : str
                Location

        Returns
        -------
            lid : int
                ID of location
        """
        self.cur.execute('SELECT * FROM location WHERE name = %s', (location,))
        res = self.cur.fetchall()
        if len(res) == 0:
            self.cur.execute(
                'INSERT INTO location (name) VALUES (%s) RETURNING id', (location,))
            res = self.cur.fetchone()[0]
        else:
            res = res[0][0]
        return res

    def __sector__(self, sector):
        """Get the lid for given sector.

        Parameters
        ----------
            sector : str
                Sector

        Returns
        -------
            sid : int
                ID of sector
        """
        self.cur.execute('SELECT * FROM sector WHERE name = %s', (sector,))
        res = self.cur.fetchall()
        if len(res) == 0:
            self.cur.execute(
                'INSERT INTO sector (name) VALUES (%s) RETURNING id', (sector,))
            res = self.cur.fetchone()[0]
        else:
            res = res[0][0]
        return res

    def __job_desc__(self, description, requirements=None, salary=None):
        """Perform INSERT into job description table.

        Parameters
        ----------
            description : str
                Description of the Job offering
            requirements : list of tuples
                Requirements of the Job offering and weights (default None)
            salary : int
                Salary guess-timate (default None)

        Returns
        -------
            res : int
                Resulting id of value inserted into job description table
        """

        # Construct req filler data based on number of requirements
        if requirements is not None:
            num_req = len(requirements)
        else:
            num_req = 0
            requirements = []

        for idx in range(num_req, 5):
            requirements.append((None, None))

        self.cur.execute(
            'SELECT * FROM job_desc WHERE sal = %s AND description = %s AND req1 = %s AND req1_w = %s AND req2 = %s AND req2_w = %s AND req3 = %s AND req3_w = %s AND req4 = %s AND req4_w = %s AND req5 = %s AND req5_w = %s',
            (salary,
             description,
             requirements[0][0],
             requirements[0][1],
             requirements[1][0],
             requirements[1][1],
             requirements[2][0],
             requirements[2][1],
             requirements[3][0],
             requirements[3][1],
             requirements[4][0],
             requirements[4][1]
             ))
        res = self.cur.fetchall()
        if len(res) > 1:
            return res[0][0]
        else:
            self.cur.execute(
                'INSERT INTO job_desc (sal, description, req1, req1_w, req2, req2_w, req3, req3_w, req4, req4_w, req5, req5_w) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s) RETURNING id',
                (salary,
                 description,
                 requirements[0][0],
                 requirements[0][1],
                 requirements[1][0],
                 requirements[1][1],
                 requirements[2][0],
                 requirements[2][1],
                 requirements[3][0],
                 requirements[3][1],
                 requirements[4][0],
                 requirements[4][1]
                 ))
            res = self.cur.fetchone()[0]
            return res

    def __job__(self, job_desc_id, location, sector, year=None, month=None):
        """Perform INSERT into job table.

        Parameters
        ----------
            job_desc_id : int
                Resulting id of job in job description table
            location : str
                location
            sector : str
                sector
            year : int
                Year (default None)
            month : int
                Month (default None)

        Returns
        -------
            res : tuple
                Value stored in DB
        """
        lid = self.__location__(location)
        sid = self.__sector__(sector)

        self.cur.execute(
            'SELECT * FROM job WHERE jd_id = %s AND lid = %s AND sid = %s AND year = %s AND month = %s',
            (job_desc_id,
             lid,
             sid,
             year,
             month))
        res = self.cur.fetchall()
        if len(res) > 1:
            return res[0]
        else:
            self.cur.execute(
                'INSERT INTO job (jd_id, lid, sid, year, month, new) VALUES (%s, %s, %s, %s, %s, %s) RETURNING jd_id, lid, sid, year, month, new',
                (job_desc_id,
                 lid,
                 sid,
                 year,
                 month,
                 1))
            res = self.cur.fetchone()
            return res

    def update(self,
               description,
               location,
               sector,
               requirements=None,
               salary=None,
               year=None,
               month=None
               ):
        """Perform INSERT consistently over all associated tables.

        Parameters
        ----------
            description : str
                Description of the Job offering
            location : str
                location of Job offering
            sector : str
                Sector of Job offering
            requirements : list of tuples
                Requirements of the Job offering and weights (default None)
            salary : int
                Salary guess-timate (default None)
            year : str
                Year of Job offering in YYYY format (default None)
            month : str, optional
                Month of Job offering in MM format (default None)

        Returns
        -------
            res : tuple
                Response from DB
        """
        assert isinstance(description, str) and len(
            description) > 5, 'description should be type string and len > 5!'

        assert isinstance(location, str) and len(
            location) > 5, 'location should be type string and len > 5!'

        assert isinstance(sector, str) and len(
            sector) > 5, 'sector should be type string and len > 5!'

        if requirements is not None:
            assert isinstance(requirements, list) and len(requirements) > 0 and len(
                requirements) <= 5, 'requirements should be type list and 5 >= len > 0!'

            for val in requirements:
                assert isinstance(val, tuple) and len(
                    val) == 2, 'each requirement should be type tuple and len = 2!'

                assert isinstance(val[0], str) and len(
                    val[0]) > 0, 'each requirement name should be type str and len > 0!, got {}'.format(requirements)

                assert isinstance(val[1], float) and (val[1] > 0.0 and \
                    val[1] <= 1.0), 'each requirement weight should be type float and 1 >= {} > 0!'.format(val[1])

        if salary is not None:
            assert isinstance(
                salary, int) and salary > 0, 'salary should be type int and salary > 0!'

        if year is not None:
            assert isinstance(
                year, int), 'year should be type int!'

        if month is not None:
            assert isinstance(
                month, int) and month > 0 and month < 13, 'month should be type int and 0 < month < 13!'

        # Update all prev job listings as old
        self.cur.execute('UPDATE job SET new = 0;')

        jd_id = self.__job_desc__(description, requirements, salary)
        res = self.__job__(jd_id, location, sector, year, month)

        return res

    def view(self):
        """View entries of all tables.
        """
        print('\nLOCATION TABLE')
        self.cur.execute('SELECT * FROM location')
        for val in self.cur.fetchall():
            print(val)

        print('\nSECTOR TABLE')
        self.cur.execute('SELECT * FROM sector')
        for val in self.cur.fetchall():
            print(val)

        print('\nJOB TABLE')
        self.cur.execute('SELECT * FROM job')
        for val in self.cur.fetchall():
            print(val)

        print('\nJOB DESCRIPTION TABLE')
        self.cur.execute('SELECT * FROM job_desc')
        for val in self.cur.fetchall():
            print(val)
