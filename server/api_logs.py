from flask import Blueprint, jsonify, request
from pprint import pprint


# declare blueprint instance
app_logs = Blueprint ( 'app_logs', __name__ )

# consts


# save new log
@app_logs.route('new')
def new_log ():
	pprint(request.headers)
	
	resp = jsonify({})
	resp.status_code = 200
	return resp




print("api_logs warmed up!")