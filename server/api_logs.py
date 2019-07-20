from flask import Blueprint, jsonify, request, g
from pprint import pprint
from datetime import datetime

from database import MongoInterface



# declare blueprint instance
app_logs = Blueprint ( 'app_logs', __name__ )

# consts
METADATA_KEY		= "_metadata"


###############################################################################
##### API
###############################################################################

# save new log
@app_logs.route('<user>/new', methods=['POST'])
def new_log (user):
	# parse the entry and get a Mongo-friendly dict to save
	log = create_log(user, request.json)

	# establish connection w/ database
	posts = MongoInterface.connect().test[f"{user}_logs"]
	post_id = posts.insert_one(log).inserted_id

	# response
	resp = { "post_id": str(post_id) }
	return jsonify(resp), 200



# get logs by date
@app_logs.route('<user>/get_by_date/<date>', methods=['GET'])
def get_logs_by_date (user, date):
	"""
	Respond w/ list of all logs authored on the date specified. `date` is expected
	to be a string in the same format that `str(datetime.now().date())` yields.
	"""
	# connect to database
	user_logs = MongoInterface.connect().test[f"{user}_logs"]

	# look for entries matching: entry._metadata.date == date
	query = { f"{METADATA_KEY}.date": date }
	matches = user_logs.find(query)

	# response
	return jsonify(str_objectid(list(matches)))




###############################################################################
##### HELPERS
###############################################################################

def create_log (user, payload):
	"""
	Create a dictionary containing a log and metadata for the log. Metadata 
	includes the current datetime, author, list of #tags in the log, etc.
	"""
	body = payload['entry']
	dt = datetime.now()
	entry = {
		"user": user,
		METADATA_KEY: {
			"date": str(dt.date()),
			"time": str(dt.time()),
			"weekday": str(dt.isoweekday()),
			"count": {
				"char": len(body),
				"word": len(body.split()),
			}
		},
		"log": body,
	}

	return entry



def str_objectid (input, keys=['_id']):
	"""
	Given a list of keys, for each that exists in the input, convert to string.
	"""
	# if the input is a list, apply to each object in list
	if isinstance(input, list):
		for obj in input:
			for key in keys: obj[key] = str(obj[key])	# convert value to string
		return input

	else:
		for key in keys: obj[key] = str(obj[key]) 		# convert value to string




print("Blueprint: api_logs warmed up!")