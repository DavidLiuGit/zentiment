from flask import Blueprint, jsonify, request, g
from pprint import pprint
from datetime import datetime

from database import MongoInterface



# declare blueprint instance
app_logs = Blueprint ( 'app_logs', __name__ )

# consts


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
		"_metadata": {
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



print("Blueprint: api_logs warmed up!")