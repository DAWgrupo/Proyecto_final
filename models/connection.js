'use strict'
var mongoose =require('mongoose'),
	conf = require('./db_conf'),
	Schema = mongoose.Schema,
	/*  Persona Administrados/cliente */
	UsuarioSchema = new Schema({
			id_persona 	: {type: Number,required: true},
			nombre 		: {type: String,required: true},
			apellido 	: {type: String,required: true},
			edad 		: {type: Number},
			correo 		: {type: String,index: { unique: true }},
			fecha_nac	: {type: Date},
			Usuarios	: {type: String,required: true, index: { unique: true }},
			clave  		: {type: String,required: true, index: { unique: true }},		
			estado 		: {type: Number,default: 1 },
			tipo_user	: {type: Number,default: 1 }
		},
		{
			collection :"tb_persona"
		}
	),
	PersonaAdmModel = mongoose.model("tb_persona",UsuarioSchema),
	/*  precio platos */
	PrecioSchema = new Schema({
			id_precio 	: {type: Number,required: true},
			precio_plat : {type: String,required: true},
			user_cre	: {type: String, default: "Grupo_Comedores"},
			fecha_crea	: {type: Date, default: Date.now }
		},
		{
			collection :"tb_precio"
		}
	),
	PrecioModel = mongoose.model("tb_precio",PrecioSchema),
	/*  Tipo platos */
	TipoSchema = new Schema({
			id_tipo 	: {type: Number,required: true},
			nombre_tipo : {type: String,required: true},
			user_cre	: {type: String, default: "Grupo_Comedores"},
			fecha_crea	: {type: Date, default: Date.now }
		},
		{
			collection :"tb_tipo"
		}),
	TipoModel = mongoose.model("tb_tipo",TipoSchema),
	/*  collection facultad */
	facultadSchema = new Schema({
			idfacultad 		: {type: Number,required: true},
			nombre_facultad : {type: String,required: true},
			Abreviatura		: {type: String,required: true},
			user_cre		: {type: String, default: "Grupo_Comedores"},
			fecha_crea		: {type: Date, default: Date.now }
		},
		{
			collection :"tb_facultad"
		}),
	facultadModel = mongoose.model("tb_facultad",facultadSchema),
	/* Platos */
	platosSchema = new Schema({
			idplato 	: {type: Number,required: true},
			nombre_plat : {type: String,required: true},
			estado 		: {type: Number,default: 1 },
			user_cre	: {type: String, default: "Grupo_Comedores"},
			fecha_crea	: {type: Date, default: Date.now },
			precio 		: {type: Schema.Types.ObjectId, ref : 'tb_precio' },
			tipo 		: {type: Schema.Types.ObjectId, ref : 'tb_tipo' }
		},
		{
			collection :"tb_platos"
		}),
	platosModel = mongoose.model("tb_platos",platosSchema),
	/* Calificacion */
	calificacionSchema = new Schema({
			idcalificacion 	: {type: Number,required: true},
			calificacion 	: {type: Number,required: true},
			user_cre		: {type: String, default: "Grupo_Comedores"},
			fecha_crea		: {type: Date, default: Date.now },
			cliente 		: {type: Schema.Types.ObjectId, ref : 'tb_persona' },
			platos 			: {type: Schema.Types.ObjectId, ref : 'tb_platos' }
		},
		{
			collection :"tb_calificacion"
		}),
	calificacionModel = mongoose.model("tb_calificacion",calificacionSchema),
	/*Correo*/
	correoSchema = new Schema({
			idcorreo 	: {type: Number,required: true},
			descrip 	: {type: String},
			estado 		: {type: Number},
			emisor  	: {type: String},
			fecha_envio	: {type: Date, default: Date.now },
			cliente 	: {type: Schema.Types.ObjectId, ref : 'tb_persona' }
		},
		{
			collection :"tb_correo"
		}),
	correoModel = mongoose.model("tb_correo",correoSchema),
	/*comedor*/
	comedorSchema = new Schema({
			idcomedor 		: {type: Number,required: true},
			nombre_comedor 	: {type: String},
			estado 			: {type: Number},
			latitud  		: {type: Number},
			longitud 		: {type: Number},
			fecha_creac		: {type: Date, default: Date.now },
			administrador	: {type: Schema.Types.ObjectId, ref : 'tb_persona' },
			facultad 		: {type: Schema.Types.ObjectId, ref : 'tb_facultad' },
			plato 			: {type: Schema.Types.ObjectId, ref : 'tb_platos' }
		},
		{
			collection :"tb_comedor"
		}),
	comedorModel = mongoose.model("tb_comedor",comedorSchema),
	/*Dias */
	diasSchema = new Schema({
			id 		: {type: Number,required: true},
			dia 	: {type: String},
			user_cre	: {type: String, default: "Grupo_Comedores"},
			fecha_crea	: {type: Date, default: Date.now }
		},
		{
			collection :"tb_dias"
		}),
	diasModel = mongoose.model("tb_dias",diasSchema),
	/*Menu semanda*/
	menuSchema = new Schema({
			idmenu 		: {type: Number,required: true},
			user_cre	: {type: String, default: "Grupo_Comedores"},
			fecha_crea	: {type: Date, default: Date.now },
			dia 		: {type: Schema.Types.ObjectId, ref : 'tb_dias' },
			plato 		: {type: Schema.Types.ObjectId, ref : 'tb_platos' },
		},	
		{
			collection :"tb_menuSemanal"
		}),
	menuModel = mongoose.model("tb_menuSemanal",menuSchema);


mongoose.connect(`mongodb:\/\/${conf.mongo.host}:${conf.mongo.port}/${conf.mongo.db}`)

module.exports = PersonaAdmModel
module.exports = PrecioModel
module.exports = TipoModel
module.exports = facultadModel
module.exports = platosModel
module.exports = calificacionModel
module.exports = correoModel
module.exports = comedorModel
module.exports = diasModel
module.exports = menuModel