# Philomath - Data Acquisition & Knowledge Gatherer

<!-- TABLE OF CONTENTS -->
## Table of Contents

* [About Philomath](#about-philomath)
  * [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Usage](#usage)

<!-- ABOUT THE PROJECT -->
## About Philomath

Philomath is the data acquisition and knowledge gatherer that collects data from various sources.

 Here's a quick rundown:
* The BeautifulSoup library that allows us to scrape data from various job sites like Indeed and Monster.
* The Twitter API to collect news headlines from Twitter in real-time.
* The feedparser that allows us to parse the RSS feed of popular news sites like The Economic Times and Times of India.

### Raw Data for Analytics

* CEIC - For Uttarakhand Employment Statistics - CSVs. Zip folder uploaded.
* MoSPI - For Indiawide Employment Statistics - Excels. Zip folder uploaded.
* Statista and IndiaStat - For filling up gaps in the Employment Statistics we collected thus far and cleaning all the data in a coherent manner.

<!-- GETTING STARTED -->
## Getting Started

Here are the instructions on how to set up our project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

A list softwares, libraries etc. that you will need:
* Python3.5 or newer and libraries - BeautifulSoup, Tweepy, feedparser

### Installation

1. Clone the repo
```sh
git clone https://github.com/akos28/NC_GEU_MK105_RASP.git
```
2. Install python packages
```sh
pip install -r requirements.txt
```