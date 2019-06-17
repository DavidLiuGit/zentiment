from flask import Flask
from flask_pymongo import PyMongo
from flask_cors import CORS

import api
# import api_logs
from api_logs import app_logs
from helper import *

# app config
app = Flask(__name__)
CORS(app)

# MongoDB config (using PyMongo)
app.config["MONGO_URI"] = "mongodb://localhost:27017/test"
mongo = PyMongo(app)
test_mongo_connection(mongo)		# test connection; raise exception if failed



##### Register blueprints to app

# logs api handler
LOGS_PATH_PREFIX = "/logs"		# should match with path in LogsHttpService (frontend) 
app.register_blueprint(app_logs, url_prefix=LOGS_PATH_PREFIX)


# Run app
app.run()