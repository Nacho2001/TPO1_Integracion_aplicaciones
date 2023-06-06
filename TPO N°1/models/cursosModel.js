// Invoca al archivo db con los datos de logueo
const db = require('../config/db');

// Archivo con consultas a realizar en "cursos"

// Obtener todos los cursos
exports.getCourses = async () => {
    const [rows,fields] = await db.execute("select * from cursos");
    return rows;
}

// Obtener curso por id
exports.getCourseByID = async (id) => {
    const [rows, fields] = await db.execute("select * from cursos where id = ?", [id]);
    return rows;
}

// Añadir curso
exports.addCourse = async (course) => {
    const [rows,fields] = await db.execute(`insert into cursos(nombre, descripcion) values ("${course.nombre}","${course.descripcion}")`)
    return rows;
}

// Eliminar curso específico
exports.removeCourse = async (id) => {
    const [rows,fields] = await db.execute("delete from cursos where id = ?", [id]);
    return rows;
}

// Editar curso
exports.updateCourse = async(course) => {
    const [rows, fields] = await db.execute("update cursos set nombre = ?, descripcion = ? where id = ?", [course.nombre,course.descripcion,course.id]);
    return rows;
}

// Obtener los estudiantes de un curso
exports.getStudentsCourse = async(id) => {
    const [rows, fields] = await db.execute("select estudiantes.nombre from estudiantes_cursos where id_curso = ? inner join estudiantes on estudiantes_cursos.estudiantes_id = estudiantes.id",[id])
    // La query solamente devolverá los nombres de los estudiantes del curso, utilizando un inner join en la tabla estudiantes_cursos
    return rows;
}

// Añadir estudiante a un curso
exports.addStudentToCourse = async(id_curso,id_estudiante) => {
    const [rows, fields] = await db.execute("insert into estudiantes_cursos(curso_id,estudiante_id) values (?,?)", [id_curso,id_estudiante])
    return rows;
}

// Eliminar estudiante de un curso
exports.removeStudentCourse = async(id_curso,id_estudiante) => {
    const [rows, fields] = await db.execute("delete from estudiantes_cursos where estudiante_id = ? && curso_id = ?",[id_estudiante,id_curso])    
    // Con la query elimina el registro que asocia al estudiante con el curso, quedando descartado del mismo
    return rows;
}