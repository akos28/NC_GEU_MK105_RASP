# Maeve - Flask API

<!-- TABLE OF CONTENTS -->
## Table of Contents

* [About Flask API](#about-flask-api)
* [Usage](#usage)

<!-- ABOUT THE PROJECT -->
## About Flask API

The Flask server that acts as our API endpoint to stream thousands of data points every second to people around the world.

## Usage

To run:
```python
$ python handler.py
```

NOTE: Remember to set the postgreSQL host address and the database key before executing.

Here are the API endpoints that are supported by the Flask API:
* `/v1.0/request` method = `POST`
  * Request for Job data at location/locations, of a sector/sectors. For testing, use the below curl command:
  ```
  curl -H "Content-Type: application/json" -X POST -d '{"location":["a"]}' 'http://localhost:5000/v1.0/request'
  ```
    Replace `["a"]` with names of locations whose information you require.

  * Returns:
    ```
    {'data':

    ...

    "2029": {
      "Media and Entertainment": {
        "new": {}, 
        "old": {
          "Anchoring": {
            "month": 12, 
            "pay": 329484, 
            "requirements": {
              "Advertising": 0.46, 
              "Anchoring": 0.83, 
              "Entertainment": 0.13, 
              "Media": 0.18, 
              "PR": 0.56
            }
          }
        }
      },

      ...

    "invalid_location": [],
    "jobs_found": 60
    }
    ```

* `/v1.0/analytics` method = `POST`
  * Request for analytics data and visualizations. For testing, use the below curl command:
    ```
      curl -H "Content-Type: application/json" -X POST -d '{"profession": "a"}' 'http://localhost:5000/v1.0/analytics'
    ```
    Replace `["a"]` with the type of visitor.
