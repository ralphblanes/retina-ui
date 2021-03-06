"use strict"
var mongoose = require('mongoose');
var config = require('../config/config');
var db = mongoose.createConnection(config.db('big_data'));
var articleSchema = require('./models/articles.js').articleSchema;
var articles = db.model('articles', articleSchema);

exports.getLatestArticles = getLatestArticles;
exports.getArticlesByCategory = getArticleByCategory;
exports.getArticlesByKeyword = getArticlesByKeyword;
exports.getArticlesBySource = getArticlesBySource;
exports.getArticleById = getArticleById;
exports.recentCategories = recentCategories;
exports.recentKeywords = recentKeywords;
exports.getSources = getSources;
exports.categoryCount = categoryCount;
exports.keywordCount = keywordCount;

//////////////////////////////////////


function getLatestArticles(req, res) {
    var page = parseInt(req.params.page);
    articles.latest(page, function(err, docs) {
        res.json(docs);
    });
}

function getArticleByCategory(req, res) {
    var category = req.params.category;
    articles.getByCategory(category, function(err, docs) {
        res.json(docs);
    });
}

function getArticlesByKeyword(req, res) {
    var keyword = req.params.keyword;
    articles.getByKeyword(keyword, function(err, docs) {
        res.json(docs);
    });
}

function getArticlesBySource(req, res) {
    var source = req.params.source;
    articles.getBySource(source, function(err, docs) {
        res.json(docs);
    });
}


function getArticleById(req, res) {
    var id = req.params.id;
    articles.getById(id, function(err, docs) {
        res.json(docs);
    });
}

function recentCategories(req, res) {
    articles.recentCategories(function(err, docs) {
        res.json(docs);
    });
}


function recentKeywords(req, res) {
    articles.recentKeywords(function(err, docs) {
        res.json(docs);
    });
}


function getSources(req, res) {
    articles.sources(function(err, docs) {
        res.json(docs);
    });
}

function keywordCount(req, res) {
    articles.keywordCount(function(err, docs) {
        res.send(docs);
    });
}

function categoryCount(req, res) {
    articles.categoryCount(function(err, docs) {
        res.send(docs);
    });
}