from flask import Flask, g
from flask_pymongo import PyMongo
from flask_cors import CORS

import api
# import api_logs
from api_logs import app_logs
from database import MongoInterface



# app config
app = Flask(__name__)
CORS(app)

# MongoDB config (using PyMongo)
with app.app_context():
	MONGO_URI = "mongodb://localhost:27017/test"
	db_interface = MongoInterface(MONGO_URI)		# instantiate MongoDB interface
	app.config["MONGO_URI"] = MONGO_URI				# add base MongoDB URI to config
	db_interface.db.init_app(app)					# specific to MongoDB
	g.db_int = db_interface							# register to g
	print("Database initialized")



##### Register blueprints to app

# logs api handler
LOGS_PATH_PREFIX = "/logs"		# should match with path in LogsHttpService (frontend) 
app.register_blueprint(app_logs, url_prefix=LOGS_PATH_PREFIX)


# Run app
app.smh = 'kek'
app.run()