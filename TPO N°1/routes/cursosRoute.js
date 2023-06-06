//Invoca al express y al router
const express = require('express');
const router = express.Router();
// Invocación del controller
const cursosController = require('../controllers/cursosController');

//Rutas:
// Obtener todos los cursos
router.get('/',cursosController.getCourses)
//Obtener un unico curso
router.get('/:id',cursosController.getCoursesByID)
// Añadir curso
router.post('/',cursosController.addCourse)
// actualizar curso
router.put('/:id',cursosController.updateCourse)
// Borrar curso
router.delete('/:id',cursosController.removeCourse)
// Obtener todos los estudiantes de un curso
router.get('/:id/estudiantes',cursosController.getStudentsCourse)
// Añadir estudiante a un curso
router.post('/:id/estudiantes/:estudianteId',cursosController.addStudentToCourse)
// Borrar estudiante de un curso
router.delete('/:id/estudiantes/:estudianteId',cursosController.removeStudentCourse)
module.exports = router;