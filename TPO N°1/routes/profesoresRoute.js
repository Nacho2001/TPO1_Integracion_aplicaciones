//Invoca al express y al router
const express = require('express');
const router = express.Router();
// Invocación del controller
const profesoresController = require('../controllers/profesoresController');

// Rutas:

// Ver todos los profesores de la base
router.get('/',profesoresController.getProfessors)
// solicitar un unico profesor (por ID)
router.get('/:id',profesoresController.getProfessorByID)
// Añadir profesor
router.post('/',profesoresController.addProfessor)
// Actualizar datos de un profesor
router.put('/:id',profesoresController.updateProfessor)
// Eliminar profesor
router.delete('/:id',profesoresController.removeProfessor)
module.exports = router;