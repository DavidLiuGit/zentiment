# Zentiment database helper functions
from flask import g
from flask_pymongo import PyMongo
from pprint import pprint



class DatabaseInterface:
	"""
	Generic database interface abstract class
	"""
	db_uri = ''
	db = None


	def __init__ (self):
		pass

	# def register_to_g (self):
	# 	g.db_int = self
	# 	print ("Database interface instance registered to g")

	def test_db_connection (self):
		pass

	# Get database connection instance
	# def get_db (self):
	# 	pass





class MongoInterface(DatabaseInterface):

	def __init__ (self, db_uri):
		self.db_uri = db_uri
		self.db = PyMongo(uri=db_uri)
		# g.db_int = self

	# def test_db_connection (self):
	# 	osama = mongo.db.people.find_one({'age':"911"})
	# 	pprint(osama)

	# def get_db (self):
	# 	"""
	# 	Get current database connection instance if it exists.
	# 	"""
	# 	return g.db