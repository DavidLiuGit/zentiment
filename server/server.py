from flask import Flask
from flask_pymongo import PyMongo
from flask_cors import CORS

import api

# app config
app = Flask(__name__)
CORS(app)

# MongoDB config (using PyMongo)
app.config["MONGO_URI"] = "mongodb://localhost:27017/wot"
mongo = PyMongo(app)

app.run()