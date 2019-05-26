# Zentiment

Smart journal

## Features

### Smart
* Uses NLP to analyze the contents of your journal
  * Uses NLP data to determine your mood. Assign a score for you day based on mood.
  * Extract keywords and entities and highlight them
* By The Numbers
  * Look back at your past graphically with charts

### Secure
* All data is kept encrypted
* 2-FA available

## Usage


## Dev installation

### Dependencies
Zentiment uses a typically client-server-database architecture. The client-facing frontend is built on the [Angular](https://angular.io) framework. The server is built on the Flask framework for Python. The database is MongoDB, which the server will interface with.

#### Server
Install Flask, Flask-PyMongo with pip:
```bash
pip install -U Flask Flask-PyMongo
```