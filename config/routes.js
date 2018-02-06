'use strict'

var InicalController = require('../controllers/inicialController'),
	express = require('express'),
	router = express.Router()

router.get('/', InicalController.index);
router.get('/galeria', InicalController.galeria);
router.get('/comedores', InicalController.comedores);
router.get('/estadisticas', InicalController.estadisticas);
router.get('/contactanos', InicalController.contactanos);
router.get('/login_inicial', InicalController.login_inicial);


module.exports= router

