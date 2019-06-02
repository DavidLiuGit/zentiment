from flask import Flask
from flask_pymongo import PyMongo
from flask_cors import CORS

import api
from helper import *

# app config
app = Flask(__name__)
CORS(app)

# MongoDB config (using PyMongo)
app.config["MONGO_URI"] = "mongodb://localhost:27017/test"
mongo = PyMongo(app)
test_mongo_connection(mongo)		# test connection; raise exception if failed


# Register blueprints to app
app.run()


