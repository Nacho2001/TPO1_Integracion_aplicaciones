const bcrypt = require("bcryptjs");

function encriptacion(value){
    value = bcrypt.hashSync(value,6)
    return value;
}

module.exports = {encriptacion}