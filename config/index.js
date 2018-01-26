'use strict'

var InicalController = require('../controllers/inicialController'),
	express = require('express'),
	router = express.Router()

router.get('/', InicalController.inicialController);


module.exports= router
