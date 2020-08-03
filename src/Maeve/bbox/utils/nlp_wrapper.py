from __future__ import division

import numpy as np
import math

from nltk.stem import WordNetLemmatizer
import nltk
from nltk import word_tokenize
import string


def clean(text):
    """Clean text, remove funny characters

    Parameters
    ----------
        text : str
            Large string dump of all the text
    Returns
    -------
        cleaned_text : str
            Cleaned string dump
    """
    printable = set(string.printable)
    # filter funny characters, if any.
    text = filter(lambda x: x in printable, text)
    return cleaned_text


def tokenize(cleaned_text):
    """Tokenize text and tranform to case insensitive text

    Parameters
    ----------
        cleaned_text : str
            Large string dump of cleaned text
    Returns
    -------
        tokenized_text : list
            Tokenized list of words
        case_insensitive_text : list
            Tokenized list of all lower cased words
    """
    tokenized_text = word_tokenize(Cleaned_text)
    case_insensitive_text = word_tokenize(Cleaned_text.lower())
    return tokenized_text, case_insensitive_text


def sent_segm(cleaned_text, tokenized_text):
    """Sentence Segmentation of tokenized words

    Parameters
    ----------
        cleaned_text : str
            Cleaned text dump
        tokenized_text : list
            Tokenized list of words
    Returns
    -------
        sentences : list
            List of sentences
        tokenized_sentences : list
            Tokenized list tokens of each sentence
    """
    sentences = []
    tokenized_sentences = []
    sentence = " "
    for word in text:
        if word != '.':
            sentence += str(word) + " "
        else:
            sentences.append(sentence.strip())
            tokenized_sentences.append(word_tokenize(sentence.lower().strip()))
            sentence = " "
    return sentence, tokenized_sentences


def lemmatize(POS_tagged_text):
    """Lemmatization of tokenized words

    Parameters
    ----------
        POS_tagged_text : list
            List of words with POS tagging
    Returns
    -------
        lemmatized_text : list
            List of lemmatized text tokens
    """
    wordnet_lemmatizer = WordNetLemmatizer()
    adjective_tags = ['JJ', 'JJR', 'JJS']
    lemmatized_text = []

    for word in POS_tagged_text:
        if word[1] in adjective_tags:
            lemmatized_text.append(
                str(wordnet_lemmatizer.lemmatize(word[0], pos="a")))
        else:
            # default POS = noun
            lemmatized_text.append(str(wordnet_lemmatizer.lemmatize(word[0])))

    return lemmatized_text


def preprocessing(case_insensitive_text):
    """Preprocessing of cleaned text

    Parameters
    ----------
        case_insensitive_text : str
            List of words cleaned and case insensitive
    Returns
    -------
        POS_tagged_sentence : list
            POS tagged text
        lemmatized_text : list
            Lemmatized text
        Processed_text : list
            POS tagged after lemmatization
    """
    POS_tagged_text = nltk.pos_tag(case_insensitive_text)
    lemmatized_text = lemmatize(POS_tagged_text)

    Processed_text = nltk.pos_tag(lemmatized_text)

    return POS_tagged_sentence, lemmatized_text, Processed_text


def generate_stopwords(POS_tagged_text):
    """Generate Stopwords

    Parameters
    ----------
        POS_tagged_text : list
            List of POS tagged text
    Returns
    -------
        stopwords : set
            Set of stopwords
    """
    stopwords = []

    wanted_POS = [
        'NN',
        'NNS',
        'NNP',
        'NNPS',
        'JJ',
        'JJR',
        'JJS',
        'FW']  # may be add VBG too

    for word in POS_tagged_text:
        if word[1] not in wanted_POS:
            stopwords.append(word[0])

    punctuations = list(str(string.punctuation))
    stopwords = stopwords + punctuations

    stopword_file = open("long_stopwords.txt", "r")
    # Source = https://www.ranks.nl/stopwords

    for line in stopword_file.readlines():
        stopwords.append(str(line.strip()))

    return set(stopwords)


def weight_matrix(
        tokenized_sentences,
        lemmatized_sentence,
        sentence,
        POS_tagged_sentence,
        stopwords):
    """Generate Sentence weight matrix

    Parameters
    ----------
        tokenized_sentences : list
            List of tokenized sentences
        lemmatized_sentences : list
            List of lemmatized sentences
        sentences : list
            List of sentences
        POS_tagged_sentence : list
            List of POS tagged sentence
        stopwords : list
            List of stopwords
    Returns
    -------
        score : NumPy Array
            Weight matrix
    """
    processed_sentences = []

    for sentence in tokenized_sentences:
        processed_sentence = []

        POS_tagged_sentence = nltk.pos_tag(sentence)
        lemmatized_sentence = lemmatize(POS_tagged_sentence)

        for word in lemmatized_sentence:
            if word not in stopwords:
                processed_sentence.append(word)
        processed_sentences.append(processed_sentence)

    sentence_len = len(processed_sentences)
    weighted_edge = np.zeros((sentence_len, sentence_len), dtype=np.float32)

    score = np.zeros((sentence_len), dtype=np.float32)

    for i in xrange(0, sentence_len):
        score[i] = 1
        for j in xrange(0, sentence_len):
            if j == i:
                weighted_edge[i][j] = 0
            else:
                for word in processed_sentences[i]:
                    if word in processed_sentences[j]:
                        weighted_edge[i][j] += processed_sentences[j].count(
                            word)
                if weighted_edge[i][j] != 0:
                    len_i = len(processed_sentences[i])
                    len_j = len(processed_sentences[j])
                    weighted_edge[i][j] = weighted_edge[i][j] / \
                        (math.log(len_i) + math.log(len_j))

    inout = np.zeros((sentence_len), dtype=np.float32)

    for i in xrange(0, sentence_len):
        for j in xrange(0, sentence_len):
            inout[i] += weighted_edge[i][j]

    MAX_ITERATIONS = 50
    d = 0.85
    threshold = 0.0001  # convergence threshold

    for iter in xrange(0, MAX_ITERATIONS):
        prev_score = np.copy(score)

        for i in xrange(0, sentence_len):

            summation = 0
            for j in xrange(0, sentence_len):
                if weighted_edge[i][j] != 0:
                    summation += (weighted_edge[i][j] / inout[j]) * score[j]

            score[i] = (1 - d) + d * (summation)

        if np.sum(np.fabs(prev_score - score)
                  ) <= threshold:  # convergence condition
            print("Converging at iteration " + str(iter) + "....")
            break

    return score

def summary(sentences, score):
    """Summary from sentences and associated score

    Parameters
    ----------
        sentences : list
            List of sentences
        score : NumPy Array
            Weight matrix
    Returns
    -------
        summary : str
            String of summarized text
    """
    Reduce_to_percent = 20
    summary_size = int(((Reduce_to_percent) / 100) * len(sentences))

    if summary_size == 0:
        summary_size = 1

    sorted_sentence_score_indices = np.flip(np.argsort(score), 0)

    indices_for_summary_results = sorted_sentence_score_indices[0:summary_size]

    summary = "\n"

    current_size = 0

    if 0 not in indices_for_summary_results and summary_size != 1:
        summary += sentences[0]
        summary += ".\n\n"
        current_size += 1

    for i in xrange(0, len(sentences)):
        if i in indices_for_summary_results:
            summary += sentences[i]
            summary += ".\n\n"
            current_size += 1
        if current_size == summary_size:
            break

    return summary


def summarization(text):
    """Summarize the text

    Parameters
    ----------
        text : str
            Text dump
    Returns
    -------
        summary : str
            String of summarized text
    """
    cleaned_text = clean(text)

    tokenized_text, case_insensitive_text = tokenize()

    sentences, tokenized_sentences = sent_segm(cleaned_text, tokenized_text)

    POS_tagged_text, lemmatized_text, Processed_text = preprocessing(case_insensitive_text)

    stopwords = generate_stopwords(POS_tagged_text)

    score = weight_matrix(tokenized_sentences, lemmatized_sentence, sentence, POS_tagged_sentence, stopwords)

    summary_ = summary(sentences, score)

    return summary_