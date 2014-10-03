from pymongo import MongoClient
from bson.objectid import ObjectId
import pymongo
from json import JSONEncoder
from pprint import pprint

client = MongoClient('mongodb://localhost:27017/')
db = client['BigData']

def getRecentArticles(number):
    cursor = db.articles.find().sort("date", pymongo.DESCENDING).limit(number)
    if cursor.count() <= 0:
        return {
            "error": "Error: No articles found."
        }
    articles = []
    for article in cursor:
        articles.append(article)
    return articles

def getArticlesByKeyword(keyword):
    cursor = db.articles.find({title: {text: {"$search": keyword, "$language": 'en'}}}).sort("date", pymongo.DESCENDING)
    if cursor.count() <= 0:
        return {
            "error": "Error: No articles found."
        }
    articles = []
    for article in cursor:
        articles.append(article)
    return articles

def getArticlesInDateRange(start, end):
    cursor = db.articles.find({date: {"$gte": start, "$lte": end}}).sort("date", pymongo.DESCENDING)
    if cursor.count() <= 0:
        return {
            "error": "Error: No articles found."
        }
    articles = []
    for article in cursor:
        articles.append(article)
    return articles
def generateJSON(categorieDict):
    JSONEncoder encoder = json.JSONEncoder()
    categoryList = {}
    for category in categorieDict:
        categoryList[category] = categorieDict[category][0]
    return categoryList

def generateCategories(categoryList):
    categorieDict = {}
    for category in categoryList:
        categorieDict[category] = (len(getArticlesByKeyword(category)), getArticlesByKeyword(category))
    return categorieDict
articles = getRecentArticles(8);

print(articles)
