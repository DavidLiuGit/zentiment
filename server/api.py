from flask import Blueprint
from flask_pymongo import PyMongo


###############################################################################
##### GENERIC HANDLERS
###############################################################################

# @app.errorhandler(404)
def not_found(error):
	"""Invoke by calling `abort(404)` in code"""
	return make_response(jsonify({'error': 'Not found'}), 404)


