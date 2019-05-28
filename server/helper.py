# Zentiment server helper functions
# from flask_pymongo import PyMongo
from pprint import pprint

def test_mongo_connection (mongo):
	osama = mongo.db.people.find_one({'age':"911"})
	pprint(osama)