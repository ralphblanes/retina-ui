"use strict"

var mongoose = require('mongoose');
var config = require('../config/config');
var db = mongoose.createConnection(config.db('big_data'));
var userSchema = require('./models/users.js').userSchema;
var users =  db.model('users', userSchema);

exports.getUserInfo = getUserInfo;
exports.updateCategories = updateCategories;
exports.recordView = recordView;
exports.removeCategory = removeCategory;
exports.removeCategory = removeCategory;
exports.removeKeyword = removeKeyword;

////////////////////////////////


function getUserInfo(req, res) {
    users.getUserInfo(req.cookies.retinaID, function(err, docs) {
        res.json(docs);
    });
}

function updateCategories(req, res) {
    users.updateCategories(req.cookies.retinaID, req.param('category'),
        function(err, docs) {
            res.send(200);
        });
}

function updateKeywords(req, res) {
    users.updateKeywords(req.cookies.retinaID, req.param('keyword'),
        function(err, docs) {
            res.send(200);
        });
}

function recordView(req, res) {
    users.recordView(req.cookies.retinaID, req.param('article'), 
        function(err, docs) {
            res.json(docs);
        });
}

function removeCategory(req, res) {
    users.removeCategory(req.cookies.retinaID, req.param('category'),
        function(err, docs) {
            res.send(200);
        });
}

function removeKeyword(req, res) {
    users.removeKeyword(req.cookies.retinaID, req.param('keyword'),
        function(err, docs) {
            res.send(200);
        });
}

