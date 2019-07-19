# Zentiment database helper functions
from flask import g
from flask_pymongo import PyMongo, MongoClient
from pprint import pprint



class DatabaseInterface:
	"""
	Generic database interface abstract class
	"""
	db_uri = ''
	db = None


	def __init__ (self):
		pass

	def test_db_connection (self):
		pass



MONGO_URI = "mongodb://localhost:27017"

class MongoInterface(DatabaseInterface):
	"""
	MongoDB interface class definition. Contains helper
	"""

	def __init__ (self, db_uri):
		self.db_uri = db_uri
		self.db = MongoClient(db_uri)

	@staticmethod
	def connect (uri=MONGO_URI):
		return MongoClient(uri)
