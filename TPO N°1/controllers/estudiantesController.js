// Invoca a los modulos del model
const estudiantesModel = require('../models/estudiantesModel.js')

// Obtiene el listado de estudiantes
exports.getStudents = async (req,res) => {
    try {
        // Ejecuta el metodo del model para obtener la lista, si no tuvo errores la muestra en pantalla
        const students = await estudiantesModel.getStudents()
        res.status(200).json({
            sucess:true,
            data: students
        })
    } catch (error) { // En cambio, si algo ocurrió devolverá un mensaje y el error ocurrido
        res.status(500).json({
            sucess:false,
            message:`Error al obtener los estudiantes:
            ${{error}}`
        })
    }
}

// Obtener un unico estudiante por nro de ID
exports.getStudentByID = async (req,res) => {
    try { // Ejecuta el metodo para buscar al estudiante que coincida con el id escrito
        id = req.params.id
        const student = await estudiantesModel.getStudentsByID(id)
        // Si no obtuvo respuesta de la consulta realizada, se considera que no encontró una coincidencia
        if (student==""){  
            res.status(404).json({ // Si es así, devuelve un código de error y un mensaje 
                sucess:false,
                message:"Error: No se encontró al estudiante solicitado"
            })
        } else {
            res.status(200).json({ // Si hubo coincidencia de ID, la muestra
                sucess:true,
                data: student
            })
        }
    } catch (error) { // Si ocurrió otro error, se lo muestra en lugar de la respuesta esperada
        console.log(error)
        res.status(500).json({
            sucess:false,
            message:`Error al obtener datos del estudiante:
            ${{error}}`
        })
    }
}

// Añadir estudiante
exports.addStudent = async (req,res) => {
    // Obtiene los datos del estudiante en el body del request
    const Student = req.body
    try { // Se intenta realizar la inserción del estudiante a la base mediante la consulta del model
        const student = await estudiantesModel.addStudent(Student)
        if (student.lenght<1) { // Antes de dar respuesta, se evalua que no se inserte datos nulos
            res.status(407).json({
                success:false,
                message:"Error: No se han encontrado datos para agregar"
            })
        } else { // Si todo salió bien, devolverá un mensaje de operación exitosa
            res.status(201).json({
                sucess:true,
                message:"Estudiante añadido exitosamente"
            })    
        }

    } catch (error) {
        console.log(error)
        res.status(500).json({ // Si no fue así, se podrá ver el error en pantalla
            sucess:false,
            message:`Ocurrió un error al insertar datos:
            ${{error}}`
        })
    }
}

//Borrar estudiante
exports.removeStudent = async (req,res) => {
    //Primero obtiene el ID
    const id = req.params.id
    try { 
        // Luego, realiza la consulta a la base desde el model
        const borrado = await estudiantesModel.removeStudent(id)
        if (borrado == ""){ // Si no encuentra con el id del estudiante a eliminar, le informa al usuario que no lo encontró
            res.status(404).json({
                success:false,
                message:`Error: No se encontró al estudiante especificado`
            })
        } else {
            res.status(200).json({ // Si no hubo problemas, devuelve el mensaje de exito al usuario
                success:true,
                message:`Estudiante eliminado exitosamente!`,
            })
        }
    } catch (error) { // Si no pudo realizar el procedimiento anterior, también muestra un error
        console.log(error)
        res.status(500).json({
            sucess:false,
            message:`Ocurrió un error al borrar estudiante: 
            ${{error}}`
        })
    }
}

// Actualizar estudiante
exports.updateStudent = async (req,res) => {
    const id = req.params.id
    const studentData = req.body
    // Obtiene el id y los datos del estudiante desde el request para formar el objeto el arreglo student
    const student = {
        id,
        ...studentData
    }
    try { // Ejecuta el metodo con la consulta para actualizar
        const estudianteActualizado = await estudiantesModel.updateStudent(student)
        if (estudianteActualizado.lenght<1){ // Si no obtiene respuesta, significa que no pudo actualizar los datos
            res.status(404).json({
                sucess:false,
                message:"El estudiante no ha podido actualizarse"
            })
        } else { // Si salió bien, retorna el mensaje de operación exitosa
            res.status(200).json({
                sucess:true,
                message:`Estudiante actualizado con exito`
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

// Obtener los cursos de un estudiante
exports.getCoursesOfStudent = async (req,res) => {
    id = req.params.id // Obtiene el id
    try { // Realiza la consulta de los cursos desde el metodo
        const courses = await estudiantesModel.getCoursesOfStudent(id)
        if (courses == ""){ // Si no obtiene respuesta, el estudiante no se encuentra asociado a ningún curso existente
            res.status(404).json({
                sucess:false,
                message:"El alumno no se encuentra asociado a ningún curso"
            })
        } else { // Si consigue respuesta de la query, la muestra en JSON
            res.status(200).json({
                sucess:true,
                data:courses
            })
        }
    } catch (error) { // Si no logra conexión o tiene problema con el método, envia un error 500 y la descripción de lo que falló
        console.log(error)
        res.status(500).json({
            sucess:false,
            message:`Error al obtener los cursos del estudiante:
            ${{error}}`
        })
    }
}