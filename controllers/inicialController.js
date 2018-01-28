'use strict'

var menuController =() =>{}

menuController.index = (req, res) => {
    res.render('index');
};

menuController.galeria = (req, res) => {
    res.render('galeria');
};

menuController.comedores = (req, res) => {
    res.render('comedores');
};


menuController.estadisticas = (req, res) => {
    res.render('estadisticas');
};


menuController.contactanos = (req, res) => {
    res.render('contactanos');
};




// AeropuertoController.getAll = (req,res,next) => {
// 	AeropuertoModel.getAll((docs) => {
// 		let locals = {
// 			title : "Lista de Aeropuertos",
// 			data 	: docs
// 		}
// 		res.render('index',locals)
// 	})
// }


module.exports = menuController