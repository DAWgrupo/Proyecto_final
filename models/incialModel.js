'use Strict'

var conn = require('./connection'),
	InicialModel =() => {}

InicialModel.getAll = (cb) => {
	// conn
	// 	.find().limit(10).sort({ prueba: 1 })
	// 	.exec((err,docs) =>{
	// 		if (err) throw err 
	// 		cb(docs)
	// 	})
	console.log("inicio index");
}

// AeropuertoModel.getOne = (id,cb) => {
// 	conn 
// 		.findOne({airportID : id})
// 		.exec((err, docs)=> {
// 			if (err) throw err 
// 			cb(docs)
// 		})
// }

// AeropuertoModel.save = (data_e,cb) => {
// 	conn
// 		.count({airportID : data_e.airportID})
// 		.exec((err,count)=> {
// 			if (err) throw err 
// 			console.log(`numero de registro: ${count}`);
// 			if (count == 0 ){
// 				conn.create(data_e, (err)=>{
// 						if (err) throw err 
// 						cb()
// 					})
// 			}else if (count == 1 ){
// 				conn.findOneAndUpdate(
// 						{airportID : data_e.airportID}, 
// 						{
// 							airportID : data_e.airportID,
// 							name 	: data_e.name,
// 							city 	: data_e.city,
// 							country : data_e.country,
// 							iata 	: data_e.iata,
// 							icao	: data_e.icao,
// 							lat 	: data_e.lat,
// 							lon 	: data_e.lon,
// 							alt 	: data_e.alt,
// 							timezone: data_e.timezone,
// 							dst 	: data_e.dst,
// 							tz_db 	: data_e.tz_db,
// 							type 	: data_e.type,
// 							source 	: data_e.source
							
// 						}, (err)=>{
// 							if (err) throw err 
// 							cb()
// 						}
// 					)
// 			}
// 		})
// }

// AeropuertoModel.delete = (id,cb) => {
// 	conn 
// 		.remove({airportID : id},(err,docs)=>{
// 			if (err) throw err 
// 				cb()
// 		})

// }

// module.exports = AeropuertoModel