// Invoca a los modulos del model
const cursosModel = require('../models/cursosModel.js')

// Obtiene el listado de cursos
exports.getCourses = async (req,res) => {
    try { // Ejecuta el metodo del model para obtener la lista, si no tuvo errores la muestra en pantalla
        const courses = await cursosModel.getCourses()
        res.status(200).json({
            sucess:true,
            data: courses
        })
    } catch (error) { // En cambio, si algo ocurrió devolverá un mensaje y el error ocurrido
        res.status(500).json({
            sucess:false,
            message:`Error al obtener los cursos:
            ${{error}}`
        })
    }
}

// Obtener un unico curso por nro de ID
exports.getCoursesByID = async (req,res) => {
    try { // Ejecuta el metodo para buscar el curso que coincida con el id
        id = req.params.id
        const course = await cursosModel.getCourseByID(id)
         // Si no obtuvo respuesta de la consulta realizada, se considera que no encontró una coincidencia
        if (course==""){
            res.status(404).json({ // Si es así, devuelve un código de error y un mensaje 
                sucess:false,
                message:"Error: No se encontró el curso solicitado"
            })
        } else {
            res.status(200).json({ // Si hubo coincidencia de ID, la muestra
                sucess:true,
                data: course
            })
        }
    } catch (error) {  // Si ocurrió otro error, se lo muestra en lugar de la respuesta esperada
        res.status(500).json({
            sucess:false,
            message:`No se pudo obtener el curso:
            ${{error}}`
        })
    }
}

// Añadir curso
exports.addCourse = async (req,res) => {
    // Obtiene los datos del estudiante en el body del request
    const Course = req.body
    try { // Se intenta realizar la inserción del curso a la base mediante la consulta del model
        const course = await cursosModel.addCourse(Course)
        if (course.lenght<1) { // Antes de dar respuesta, se evalua que no se inserte datos nulos
            res.status(407).json({
                success:false,
                message:"Error: No se han encontrado datos para agregar"
            })
        } else { // Si todo salió bien, devolverá un mensaje de operación exitosa
            res.status(201).json({
                sucess:true,
                message:"Curso añadido exitosamente"
            })    
        }

    } catch (error) {
        res.status(500).json({ // Si no fue así, se podrá ver el error en pantalla
            sucess:false,
            message:`Ocurrió un error al insertar datos:
            ${{error}}`
        })
    }
}

//Borrar curso
exports.removeCourse = async (req,res) => {
    //Primero obtiene el ID
    const id = req.params.id
    // Luego, realiza la consulta a la base desde el model
    try {
        const borrado = await cursosModel.removeCourse(id)
        if (borrado == ""){ // Si no encuentra con el id del curso a eliminar, le informa al usuario que no lo encontró
            res.status(404).json({
                success:false,
                message:`Error: No se encontró el curso especificado`
            })
        } else { // Si no hubo problemas, devuelve el mensaje de exito al usuario
            res.status(200).json({
                success:true,
                message:`Curso eliminado exitosamente!`,
            })
        }
    } catch (error) { // Si no pudo realizar el procedimiento anterior, también muestra un error
        res.status(500).json({
            sucess:false,
            message:`Ocurrió un error al borrar curso: 
            ${{error}}`
        })
    }
}

// Actualizar curso
exports.updateCourse = async (req,res) => {
    const id = req.params.id
    const courseData = req.body
    // Obtiene el id y los datos del curso desde el request para formar el objeto el arreglo course
    const course = {
        id,
        ...courseData
    }
    try { // Ejecuta el metodo con la consulta para actualizar
        const cursoActualizado = await cursosModel.updateCourse(course)
        if (cursoActualizado.lenght<1){ // Si no obtiene respuesta, significa que no pudo actualizar los datos
            res.status(500).json({
                sucess:false,
                message:"El curso no ha podido actualizarse"
            })
        } else { // Si salió bien, retorna el mensaje de operación exitosa
            res.status(200).json({
                sucess:true,
                message:`Curso actualizado con exito`
            })
        }
    } catch (error) { // Si no pudo realizar las operaciones, le informa el error al usuario
        res.status(500).json({
            success:false,
            message:`Ocurrió un error al actualizar los datos: 
            ${{error}}`
        })
    }
}

// Obtener estudiantes de un curso
exports.getStudentsCourse = async (req,res) => {
    const id = req.params.id
    try {
        // Obtiene la lista de estudiantes desde la consulta del model
        const students = await cursosModel.getStudentsCourse(id);
        if (students == "") { // Si no hay respuesta de la query, asume que el curso no tiene estudiantes
            res.status(404).json({
                sucess:false,
                message:"El curso ingresado no posee estudiantes"
            })
        } else { // Si obtiene respuesta valida, muestra los nombres de los estudiantes del curso
            res.status(200).json({
                sucess:true,
                data:students
            })
        }
    } catch (error) {
        res.status(500).json({
            sucess:false,
            message:`Error al realizar la consulta:
            ${{error}}`
        })
    }
}

// Añade estudiante a un curso
exports.addStudentToCourse = async (req,res) => { 
    // requiere del id del curso y del estudiante a insertar
    const id_curso = req.params.id
    const id_estudiante = req.params.id.id
    try {
        const envio = await cursosModel.addStudentToCourse(id_curso,id_estudiante)
        if (envio == ""){ 
            res.status(407).json({
                sucess:false,
                message:"Error al ingresar al estudiante al curso"
            })
        } else {
            res.status(200).json({
                sucess:true,
                message:"Alumno asignado exitosamente"
            })
        }
    } catch (error) {
        req.status(500).json({
            sucess:false,
            message:`Error al añadir estudiante:
            ${{error}}`
        })
    }
}

// Borrar estudiante de un curso
exports.removeStudentCourse = async (req,res) => { 
    // requiere del id del curso y del estudiante a eliminar
    const id_curso = req.params.id
    const id_estudiante = req.params.id.id
    try {
        const envio = await cursosModel.addStudentToCourse(id_curso,id_estudiante)
        if (envio == ""){
            res.status(407).json({
                sucess:false,
                message:"Error al ingresar al estudiante al curso"
            })
        } else {
            res.status(200).json({
                sucess:true,
                message:"Alumno asignado exitosamente"
            })
        }
    } catch (error) {
        req.status(500).json({
            sucess:false,
            message:`Error al añadir estudiante:
            ${{error}}`
        })
    }
}