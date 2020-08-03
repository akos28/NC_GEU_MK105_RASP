import uuid

from elasticsearch import Elasticsearch

###############################################################################
# Elasticsearch Configurations.
###############################################################################


class ElasticCursor():
    """Thin wrapper over elasticsearch library to simplify document search and
    extraction.

    Methods
    -------
        search(category, content, field)
            Search for <content> present in <field> in all indices of <type>
        create_doc(category, field)
            Create a document in <index> of type <doc_type> with body <content>
    """

    def __init__(self, host='localhost', port=9200, job=None, news=None):
        super().__init__()
        """ElasticSearch connection configurations.

        Parameters
        ----------
            host : str
                ElasticSearch host (default localhost)
            port : int
                ElasticSearch port (default 9200)
            job : list
                List of index names with job data (default None)
            news : list
                List of index names with news data (default None)
        """

        self._es = Elasticsearch(hosts=[{'host': host, 'port': port}])

        self.cat = {}
        if job is not None:
            assert isinstance(job, list), 'Job index names to be passed in list!'
            assert len(job) > 0, 'At least one Job index name required!'
            self.cat['jobs'] = job

        if news is not None:
            assert isinstance(news, list), 'News index names to be passed in list!'
            assert len(news) > 0, 'At least one news index name required!'
            self.cat['news'] = news

    def search(self, category, content, field):
        """Search for <content> present in <field> in all indices of <type>.

        Parameters
        ----------
            category : list
                Types of indices. Either 'jobs', 'news' or both
            content : str
                Content to search for
            field : dict
                Names of fields of whose contents are searched
                eg. {'jobs':['job-listing'], 'news':['heading']} to search in
                job-listing field of jobs indices and heading field of news
                indices
        Returns
        -------
            res : list
                List of document json objects
        """

        assert isinstance(category, list), 'category should be list!'
        assert isinstance(field, dict), 'field should be dict!'
        assert isinstance(content, str), 'content should be string!'

        assert len(category) > 0 and ['jobs', 'news'] >= category, \
             'category needs to have either \'jobs\', \'news\' or both!'
        assert len(field) > 0, 'field to have at least one entry!'

        res = []
        for _, val in enumerate(category):
            for _, idx in enumerate(self.cat[val]):
                for _, fname in enumerate(field[val]):
                    response = self._es.search(index=idx,
                                            doc_type='posting',
                                            body={"query": {"match": {fname: content}}}
                                            )
                    if response['hits']['total']['value'] > 0:
                        for doc in response['hits']['hits']:
                            res.append((doc['_id'], doc['_source']))

        return res

    def create_doc(self, index, doc_type, content):
        """Create a document in <index> of type <doc_type> with body <content>.

        Parameters
        ----------
            index : str
                Name of index
            doc_type : str
                Document type
            content : json, str
                Json dump or string data
        Returns
        -------
            res : str
                UUID of the newly created document
        """

        assert isinstance(index, str), 'index should be string!'
        assert isinstance(doc_type, str), 'doc_type should be string!'
        assert isinstance(content, str) or isinstance(content, dict), \
            'content should be string or json dump!'

        assert len(content) > 0, 'content cannot be left empty!'

        res = uuid.uuid4()
        self._es.create(index=index, id=res, doc_type=doc_type, refresh=True, body=content)

        return res
