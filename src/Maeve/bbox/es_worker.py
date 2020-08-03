import argparse
import os
import glob

import pandas as pd

from utils.es_wrapper import *
from utils.ocr_wrapper import *
from utils.nlp_wrapper import *

def get_files(path, ext='csv'):
    """Get all file names in path

    Parameters
    ----------
        path : str
            Path to directory
        ext : str
            File extension (Default csv)
    Returns
    -------
        files : list
            List of file names
    """
    ext = "".join(["[{}]".format(ch + ch.swapcase()) for ch in ext])
    files = glob(os.path.join(path, "*." + ext))
    return files

if __name__ == '__main__':
    ap = argparse.ArgumentParser()
    ap.add_argument("-m", "--monster", required=True,
        help="path to collected monster data")
    ap.add_argument("-i", "--indeed", required=True,
        help="path to collected indeed data")
    ap.add_argument("-t", "--twitter", required=True,
        help="path to collected twitter data")
    ap.add_argument("-p", "--pdf", required=True,
        help="path to collected pdf data")
    args = vars(ap.parse_args())

    ec = ElasticCursor(job=['moster', 'indeed'], news=['twitter', 'pdf'])

    monster_files = get_files(args['monster'])
    indeed_files = get_files(args['indeed'])

    twitter_files = get_files(args['twitter'])

    uids = {}

    uids['monster'] = []
    for file in monster_files:
        df = pd.read_csv(file, header=0)
        uids.append(ec.create_doc('monster', 'posting', df))

    uids['indeed'] = []
    for file in indeed_files:
        df = pd.read_csv(file, header=0)
        uids.append(ec.create_doc('indeed', 'posting', df))

    uids['twitter'] = []
    for file in twitter_files:
        df = pd.read_csv(file, header=0)
        uids.append(ec.create_doc('twitter', 'news', df))

    uids['pdf'] = []
    ocr = OCR(path=args['pdf'], preprocess='blur')
    text = ocr.pdf_processing()
    summary = summarization(text)
    uids.append(ec.create_doc('pdf', 'news', summary))
