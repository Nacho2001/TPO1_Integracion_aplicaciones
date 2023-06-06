// Invoca a mysql2 para registrar los datos para logueo
const mysql = require('mysql2');
// Datos de ingreso a la base de datos
const login = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"",
    database:"escuela"
})

// exporta el modulo para ser utilizado en otro archivo
module.exports = login.promise()