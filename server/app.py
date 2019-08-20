from flask import Flask, g, jsonify
from flask_pymongo import PyMongo
from flask_cors import CORS

import api
# import api_logs
from api_logs import app_logs
from database import MongoInterface



# app config
app = Flask(__name__)
app.debug = True
CORS(app)
MONGO_URI = "mongodb://localhost:27017/test"

# MongoDB config (using PyMongo)
with app.app_context():
	db_interface = MongoInterface(MONGO_URI)		# instantiate MongoDB interface
	app.config["MONGO_URI"] = MONGO_URI				# add base MongoDB URI to config



##### Register blueprints to app

# logs api handler
LOGS_PATH_PREFIX = "/api/logs"		# should match with path in LogsHttpService (frontend) 
app.register_blueprint(app_logs, url_prefix=LOGS_PATH_PREFIX)



# define a ping handler
@app.route('/api/ping')
def ping():
	return jsonify()


# Run app
if __name__ == '__main__':
	app.run(host='0.0.0.0')