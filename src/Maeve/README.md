# Maeve - Backend Controller

<!-- TABLE OF CONTENTS -->
## Table of Contents

* [About Maeve](#about-maeve)
  * [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Usage](#usage)

<!-- ABOUT THE PROJECT -->
## About Maeve

Maeve is the backend controller that synchonizes in harmony, the various tasks that go on behind the scene.

 Here's a quick rundown:
* Handle creating and updating records in both the databases we are using - Elasticsearch and PostgreSQL
* The Flask server that acts as our API endpoint to stream thousands of data points every second to people around the world.
* And most importantly, the ML and data mining algorithms that discover the Job Web and make job predictions.

### Built With
Major frameworks that we used to build our project:
* [Flask](https://flask.palletsprojects.com/en/1.1.x/)

<!-- GETTING STARTED -->
## Getting Started

Here are the instructions on how to set up our project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

A list softwares, libraries etc. that you will need:
* Python3.5 or newer
* Elasticsearch
* PostgreSQL

### Installation

1. Clone the repo
```sh
git clone https://github.com/akos28/NC_GEU_MK105_RASP.git
```
2. Install python packages
```sh
pip install -r requirements.txt
```

## Usage

* `bbox` contains all files for the Database and Machine Learning functionality.
* `flask_app` contains all files for Flask server and API functionality
