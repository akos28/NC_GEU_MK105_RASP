import random
import argparse

from .utils.es_wrapper import *
from .utils.ps_wrapper import *

from apyori import apriori

from graphviz import Digraph
import pdf2image

if __name__ == '__main__':
    ap = argparse.ArgumentParser()
    ap.add_argument("-k", "--key", required=True,
        help="path to postgreSQL key file")
    ap.add_argument("-d", "--knowledge-db", required=True,
        help="path to trained knowledge db")
    args = vars(ap.parse_args())

    locale = ['Almora', 'Bageshwar', 'Chamoli', 'Champawat', 'Dehradun', 'Haridwar', 'Nainital', 'Pauri Garhwal', 'Pithoragarh', 'Rudraprayag', 'Tehri Garhwal', 'Udham Singh Nagar', 'Uttarkashi']

    elastic = ElasticCursor(host='localhost', job=['indeed', 'monster'], news=['twitter', 'pdf'])
    post = PostgresUpdate(host='localhost', keyfile=args['key'])

    year = [x for x in range(2020, 2031)]

    knowledgeBD = pd.read_csv(args['knowledge-db'], header=0)

    full_job_hits = {}
    full_news_hits = {}
    for loc in locale:
        full_job_hits[loc] = elastic.search(['jobs'], loc, {'jobs': 'location'})
        full_news_hits[loc] = elastic.search(['news'], loc, {'news': 'location'})

    req_parent = {}

    for idx in range(df.shape[0]):
        req = []
        w = [0.8, 0.6, 0.4, 0.2, 0.11]
        r = df.iloc[idx][-1].split(',')
        s = len(r) if len(r) < 5 else 5
        for ss in range(s):
            val = r[ss].strip()
            if len(str(val)) > 0:
                dta = random.random()%0.1
                sng = 1 if random.randint(0, 1) == 1 else -1
                req.append((str(val), round(w[ss] + (sng*dta), 2)))
        req_parent[idx] = req

    fin_list = list(req_parent.keys())

    g = Digraph('G', filename='hello.gv', engine='sfdp')

    names = list(other.iloc[:,0])

    types = list(other.iloc[:,1].unique())

    records = []
    for i in range(0, 10):
        records.append([str(store_data.values[i,j]) for j in range(0, 20)])

    association_rules = apriori(records, min_support=0.0045, min_confidence=0.2, min_lift=3, min_length=2)
    association_results = list(association_rules)

    for item in association_results:
        # first index of the inner list
        # Contains base item and add item
        pair = item[0]
        items = [x for x in pair]
        print("Rule: " + items[0] + " -> " + items[1])

        g.edge(items[0], items[1])

        #second index of the inner list
        print("Support: " + str(item[1]))

        #third index of the list located at 0th
        #of the third index of the inner list

        print("Confidence: " + str(item[2][0][2]))
        print("Lift: " + str(item[2][0][3]))
        print("=====================================")

    g.view()

    r = {}
    for local_ in local:
        r[local_] = {}
        for year_ in year:
            if year_ > 2020:
                r[local_][year_] = []
            times = random.randint(1, 3)
            for i in range(times):
                h = fin_list[random.randint(0, len(fin_list)-1)]
                sng = 1 if random.randint(0, 1) == 1 else -1
                # print(df.iloc[h][0], local_, df.iloc[h][1], req_parent[h], round(df.iloc[h][2] + (df.iloc[h][2]/10)*(sng*random.random())), year_, random.randint(1, 12))
                if year_ <= 2020:
                    # print(df.iloc[h][0], local_, df.iloc[h][1], req_parent[h], round(df.iloc[h][2] + (df.iloc[h][2]/10)*(sng*random.random())), year_, random.randint(1, 12))
                    print(post.update(df.iloc[h][0], local_, df.iloc[h][1], req_parent[h], int(df.iloc[h][2]), year_, random.randint(1, 12)))
                else:
                    r[local_][year_].append(h)
                    # print(df.iloc[h][0], local_, df.iloc[h][1], req_parent[h], round(df.iloc[h][2] + (df.iloc[h][2]/10)*(sng*random.random())), year_, random.randint(1, 12))
                    print(post.update(df.iloc[h][0], local_, df.iloc[h][1], req_parent[h], round(df.iloc[h][2] + (df.iloc[h][2]/10)*(sng*random.random())), year_, random.randint(1, 12)))


    year2 = [x for x in range(2021, 2031)]

    for local_ in local:
        for year_ in year2:
            times = random.randint(1, 3)
            for i in range(times):
                h = fin_list[random.randint(0, len(fin_list)-1)]
                while h in r[local_][year_]:
                    h = fin_list[random.randint(0, len(fin_list)-1)]
                sng = 1 if random.randint(0, 1) == 1 else -1
                # print(df.iloc[h][0], local_, df.iloc[h][1], req_parent[h], round(df.iloc[h][2] + (df.iloc[h][2]/10)*(sng*random.random())), year_, random.randint(1, 12))
                print(post.update(df.iloc[h][0], local_, df.iloc[h][1], req_parent[h], round(df.iloc[h][2] + (df.iloc[h][2]/10)*(sng*random.random())), year_, random.randint(1, 12)))


    print(post.view())
