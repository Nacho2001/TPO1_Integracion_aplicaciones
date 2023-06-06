//Invoca al express y al router
const express = require('express');
const router = express.Router();
// Invocación del controller
const estudiantesController = require('../controllers/estudiantesController');

// Rutas:

// Ver todos los estudiantes de la base
router.get('/',estudiantesController.getStudents)
// solicitar un unico estudiante (por ID)
router.get('/:id',estudiantesController.getStudentByID)
// Añadir estudiante
router.post('/',estudiantesController.addStudent)
// Actualizar datos de estudiante
router.put('/:id',estudiantesController.updateStudent)
// Eliminar un estudiante
router.delete('/:id',estudiantesController.removeStudent)
// Ver cursos de un estudiante
router.get('/:id/cursos',estudiantesController.getCoursesOfStudent)
module.exports = router;