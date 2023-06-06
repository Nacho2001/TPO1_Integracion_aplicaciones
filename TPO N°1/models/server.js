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
        // se dirige a el router de estudiantes mediante /estudiantes
        this.app.use('/estudiantes', require('./../routes/estudiantesRoute'));
        // se dirige a el router de profesores mediante /profesores
        this.app.use('/profesores', require('./../routes/profesoresRoute'));
        // se dirige a el router de cursos mediante /cursos
        this.app.use('/cursos', require('./../routes/cursosRoute'));
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