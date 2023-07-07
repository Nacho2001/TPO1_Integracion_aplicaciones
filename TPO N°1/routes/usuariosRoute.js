// Invoca librerias y controller
const express = require("express");
const router = express.Router()
const usuariosController = require("../controllers/usuariosController")

// Obtener usuarios
router.get('/',usuariosController.getUsers)

// Obtener usuario unico
router.get('/:id',usuariosController.getUserById)

//Añadir usuario
router.post('/',usuariosController.addUser)

// Eliminar usuario
router.delete('/:id',usuariosController.deleteUser)

// Actualizar usuario
router.put('/:id',usuariosController.updateUser)

module.exports = router;