// Invoca al archivo db con los datos de logueo
const db = require('../config/db');

// En este archivo, se encuentran las consultas que se realizaran a "estudiantes"

// Obtener todos los estudiantes de la tabla
exports.getStudents = async () => {
    const [rows,fields] = await db.execute("select * from estudiantes");
    return rows;
}

// Obtener un estudiante por id
exports.getStudentsByID = async (id) => {
    const [rows, fields] = await db.execute("select * from estudiantes where id = ?", [id]);
    return rows;
}

// Añadir estudiante
exports.addStudent = async (student) => {
    const [rows,fields] = await db.execute(`insert into estudiantes(nombre, edad, grado) values ("${student.nombre}",${student.edad},"${student.grado}")`)
    return rows;
}

// Eliminar estudiante que coincida con el id enviado desde el controller
exports.removeStudent = async (id) => {
    const [rows,fields] = await db.execute("delete from estudiantes where id = ?", [id]);
    return rows;
}

// Editar estudiante
exports.updateStudent = async(student) => {
    const [rows, fields] = await db.execute("update estudiantes set nombre = ?, edad = ?, grado = ? where id = ?", [student.nombre,student.edad,student.grado,student.id]);
    return rows;
}

// Obtener cursos de un estudiante
exports.getCoursesOfStudent = async(id) => {
    const [rows, fields] = await db.execute("select cursos.id,cursos.nombre from estudiantes_cursos inner join cursos on cursos.id = estudiantes_cursos.curso_id where estudiante_id = ?", [id])
    return rows;
}

