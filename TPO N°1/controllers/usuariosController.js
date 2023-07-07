// Invocar el model de usuarios
const { encriptacion } = require("../middlewares/encriptar")
const usuariosModel = require("../models/usuariosModel")


// Obtener lista de usuarios
exports.getUsers = async (req,res) => {
    try {
        const users = await usuariosModel.getUsers()
        res.status(200).json({
            sucess:true,
            data: users
        })
    } catch (error) {
        res.status(500).json({
            sucess:false,
            msg:`Ocurrió un error al obtener los datos de usuarios:
            ${error}`
        })
    }
}

// Ver usuario por id
exports.getUserById = async (req,res) => {
    const id = req.params.id
    try {
        const user = await usuariosModel.getUserbyId(id)
        if (user==""){
            res.status(404).json({ 
                sucess:false,
                message:"Error: No se encontró el usuario solicitado"
            })
        } else {
            res.status(200).json({
                sucess:true,
                data: user
            })
        }
    } catch (error) {
        res.status(500).json({
            sucess:false,
            message:`No se pudo obtener el usuario:
            ${{error}}`
        })
    }
}

// Añadir usuario
exports.addUser = async (req,res) => {
    req.body.contraseña = encriptacion(req.body.contraseña)
    console.log(req.body.contraseña)
    const User = req.body
    try {
        const user = await usuariosModel.addUser(User)
        if (user.lenght<1) { // Evalua si se estan enviando datos nulos
            res.status(407).json({
                success:false,
                message:"Error: No se han encontrado datos para agregar"
            })
        } else {
            res.status(201).json({
                sucess:true,
                message:"Usuario añadido exitosamente"
            })    
        }
    } catch (error) {
        res.status(500).json({
            sucess:false,
            message:`Ocurrió un error al insertar datos:
            ${{error}}`
        })
    }
}

// Eliminar usuarios
exports.deleteUser = async (req,res) => {
    try {
        const id = req.params.id
        const borrado = await usuariosModel.deleteUser(id)
        if (borrado == ""){
            res.status(404).json({
                success:false,
                message:`Error: El usuario que desea eliminar no existe`
            })
        } else {
            res.status(200).json({
                success:true,
                message:`Usuario eliminado exitosamente!`
            })
        }
    } catch (error) {
        res.status(500).json({
            sucess:false,
            message:`Ocurrió un error al borrar usuario: 
            ${{error}}`
        })
    }
}

// Actualizar usuario
exports.updateUser = async (req,res) => {
    const id = req.params.id
    const datos = req.body
    const user = {
        id,
        ...datos
    }
    try {
        const usuarioActualizado = await usuariosModel.updateUser(user)
        if (usuarioActualizado.lenght<1){
            res.status(500).json({
                sucess:false,
                message:"El usuario no ha podido actualizarse"
            })
        } else {
            res.status(200).json({
                sucess:true,
                message:`Usuario actualizado con exito`
            })
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success:false,
            message:`Ocurrió un error al actualizar los datos: 
            ${{error}}`
        })
    }
}