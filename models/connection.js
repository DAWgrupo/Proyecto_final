'use strict'
var mongoose =require('mongoose'),
	conf = require('./db_conf'),
	Schema = mongoose.Schema,
	AeropuertosSchema = new Schema({
		airportID : {type: Number},
		name 	: {type: String},
		city 	: {type: String},
		country : {type: String},
		iata 	: {type: String},
		icao	: {type: String},
		lat 	: {type: Number},
		lon 	: {type: Number},
		alt 	: {type: Number},
		timezone: {type: Number},
		dst 	: {type: String},
		tz_db 	: {type: String},
		type 	: {type: String},
		source 	: {type: String}
	},
	{
		collection :"airports"
	}),
	AeropuertoModel = mongoose.model("airports",AeropuertosSchema)

mongoose.connect(`mongodb:\/\/${conf.mongo.host}:${conf.mongo.port}/${conf.mongo.db}`)

module.exports = AeropuertoModel
