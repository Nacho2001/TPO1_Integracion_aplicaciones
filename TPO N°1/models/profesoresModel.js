// Invoca al archivo db con los datos de logueo
const db = require('../config/db');

// En este archivo, se encuentran las consultas que se realizaran a la tabla profesores

// Obtener todos los profesores registrados
exports.getProfessors = async () => {
    const [rows,fields] = await db.execute("select * from profesores");
    return rows;
}

// Obtener un profesor por id
exports.getProfessorByID = async (id) => {
    const [rows, fields] = await db.execute("select * from profesores where id = ?", [id]);
    return rows;
}

// Añadir profesor
exports.addProfessor = async (professor) => {
    const [rows,fields] = await db.execute(`insert into profesores(nombre, especialidad, email) values ("${professor.nombre}","${professor.especialidad}","${professor.email}")`)
    return rows;
}

// Eliminar profesor con id determinado
exports.removeProfessor = async (id) => {
    const [rows,fields] = await db.execute("delete from profesores where id = ?", [id]);
    return rows;
}

// Editar profesor
exports.updateProfessor = async(professor) => {
    const [rows, fields] = await db.execute("update profesores set nombre = ?, especialidad = ?, email = ? where id = ?", [professor.nombre,professor.especialidad,professor.email,professor.id]);
    return rows;
}