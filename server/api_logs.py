from flask import Blueprint, jsonify, request, g
from pprint import pprint


# declare blueprint instance
app_logs = Blueprint ( 'app_logs', __name__ )

# consts


# save new log
@app_logs.route('new', methods=['POST'])
def new_log ():
	pprint(request.json)
	print(g.db_int.db_uri)
	
	# echo back
	resp = jsonify(request.json)
	resp.status_code = 200
	return resp




print("Blueprint: api_logs warmed up!")