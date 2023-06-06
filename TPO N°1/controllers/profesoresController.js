// Invoca a los modulos del model
const profesoresModel = require('../models/profesoresModel.js')

// Obtiene el listado de profesores
exports.getProfessors = async (req,res) => {
    try { // Ejecuta el metodo del model para obtener la lista, si no tuvo errores la muestra en pantalla
        const courses = await profesoresModel.getProfessors()
        res.status(200).json({
            sucess:true,
            data: courses
        })
    } catch (error) { // En cambio, si algo ocurrió devolverá un mensaje y el error ocurrido
        res.status(500).json({
            sucess:false,
            message:`Error al obtener lista de profesores:
            ${{error}}`
        })
    }
}

// Obtener un unico profesor por nro de ID
exports.getProfessorByID = async (req,res) => {
    try { // Ejecuta el metodo para buscar al profesor que coincida con el id
        id = req.params.id
        const course = await profesoresModel.getProfessorByID(id)
         // Si no obtuvo respuesta de la consulta realizada, se considera que no encontró una coincidencia
        if (course==""){
            res.status(404).json({ // Si es así, devuelve un código de error y un mensaje 
                sucess:false,
                message:"Error: No se encontró al profesor solicitado"
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
            message:`No se pudo obtener el profesor:
            ${{error}}`
        })
    }
}

// Añadir profesor
exports.addProfessor = async (req,res) => {
    // Obtiene los datos del estudiante en el body del request
    const Professor = req.body
    try { // Se intenta realizar la inserción del profesor a la base mediante la consulta del model
        const professor = await profesoresModel.addProfessor(Professor)
        if (professor.lenght<1) { // Antes de dar respuesta, se evalua que no se inserte datos nulos
            res.status(407).json({
                success:false,
                message:"Error: No se han encontrado datos para agregar"
            })
        } else { // Si todo salió bien, devolverá un mensaje de operación exitosa
            res.status(201).json({
                sucess:true,
                message:"Profesor añadido exitosamente"
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

//Borrar profesor
exports.removeProfessor = async (req,res) => {
    //Primero obtiene el ID
    const id = req.params.id
    // Luego, realiza la consulta a la base desde el model
    try {
        const borrado = await profesoresModel.removeProfessor(id)
        if (borrado == ""){ // Si no encuentra con el id del profesor a eliminar, le informa al usuario que no lo encontró
            res.status(404).json({
                success:false,
                message:`Error: No se encontró el profesor especificado`
            })
        } else { // Si no hubo problemas, devuelve el mensaje de exito al usuario
            res.status(200).json({
                success:true,
                message:`Profesor eliminado exitosamente!`,
            })
        }
    } catch (error) { // Si no pudo realizar el procedimiento anterior, también muestra un error
        res.status(500).json({
            sucess:false,
            message:`Ocurrió un error al borrar profesor: 
            ${{error}}`
        })
    }
}

// Actualizar profesor
exports.updateProfessor = async (req,res) => {
    const id = req.params.id
    const professorData = req.body
    // Obtiene el id y los datos del profesor desde el request para formar el objeto el arreglo professor
    const professor = {
        id,
        ...professorData
    }
    try { // Ejecuta el metodo con la consulta para actualizar
        const profesorActualizado = await profesoresModel.updateProfessor(professor)
        if (profesorActualizado.lenght<1){ // Si no obtiene respuesta, significa que no pudo actualizar los datos
            res.status(500).json({
                sucess:false,
                message:"Los datos del profesor no han podido actualizarse"
            })
        } else { // Si salió bien, retorna el mensaje de operación exitosa
            res.status(200).json({
                sucess:true,
                message:`Profesor actualizado con exito`
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