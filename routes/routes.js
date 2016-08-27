var mongoose = require('mongoose');
var db = require('../db')
var Record = mongoose.model('record');

exports.fetch = function(req, res){
	var recordList = [];

	Record.find({}, function(err, records) {
		if(records) {
			records.forEach(function(recordDoc) {
				recordList.push({
					id  : recordDoc.id,
				    foo	: recordDoc.foo,
				    bar	: recordDoc.bar
				    
				});
			});
			res.status(200);
		} else {
			res.status(500);
		}
		res.send({records: recordList});
	});
};

exports.change = function(req, res){
	Record.findOneAndUpdate({'' : req.body.id}, req.body, {upsert:true}, function(err, records) {
		if(records) {
			data = {data: "success"};
			res.status(200);
		} else {
			data = {data: "error"};
			res.status(500);
		}
		res.send(data);
	});
};

exports.create = function(req, res){
	var data = {};

	var doc = new Record({
		id  : recordDoc.id,
	    foo	: recordDoc.foo,
	    bar	: recordDoc.bar
	});

	doc.save({}, function(err, records) {
		if(records) {
			data = {data: "success"};
			res.status(200);
		} else {
			data = {data: "error"};
			res.status(500);
		}
		res.send(data);
	});
};

exports.remove = function(req, res){
	var data = {};

	Record.find({'name' : req.body.id}).remove(function(err, records) {
		if(records) {
			data = {data: "success"};
			res.status(200);
		} else {
			data = {data: "error"};
			res.status(500);
		}
		res.send(data);
	});
};