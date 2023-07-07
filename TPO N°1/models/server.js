// Dependencias
const express = require('express');
const cors = require('cors');

class Server { // Nuevo server
    constructor(){
        this.app = express();
        this.middlewares();
        this.routes();
    }
    routes(){// Rutas definidas
        // se dirige al router de estudiantes mediante /estudiantes
        this.app.use('/estudiantes', require('./../routes/estudiantesRoute'));
        // se dirige al router de profesores mediante /profesores
        this.app.use('/profesores', require('./../routes/profesoresRoute'));
        // se dirige al router de cursos mediante /cursos
        this.app.use('/cursos', require('./../routes/cursosRoute'));
        // Se dirige al router de usuarios por /usuarios
        this.app.use('/usuarios', require('./../routes/usuariosRoute'));
    }
    middlewares(){
        this.app.use(express.json());
        this.app.use(cors());
    }
    listen(){
        this.app.listen(9000, () => { // Al iniciar, el servidor va a utilizar el puerto 9000
            console.log("Servidor ejecutandose en puerto 9000");
        })
    }
}

module.exports = Server