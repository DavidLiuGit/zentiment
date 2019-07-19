from flask import Blueprint, jsonify, request, g
from pprint import pprint

from database import MongoInterface



# declare blueprint instance
app_logs = Blueprint ( 'app_logs', __name__ )

# consts



# save new log
@app_logs.route('new', methods=['POST'])
def new_log ():
	# save new log to collection
	posts = MongoInterface.connect().test.logs
	post_id = posts.insert_one(request.json).inserted_id

	# response
	resp = { "post_id": str(post_id) }
	return jsonify(resp), 200




print("Blueprint: api_logs warmed up!")