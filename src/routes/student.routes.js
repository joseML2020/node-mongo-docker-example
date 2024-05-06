const { Router } = require('express')

const Student = require('../schema/student');
const router = Router()

/**
 * Ruta para obtener todos los estudiantes.
 * @name GET /
 * @function
 * @memberof module:studentRoutes
 * @inner
 * @param {Object} req - Objeto de solicitud de Express.
 * @param {Object} res - Objeto de respuesta de Express.
 */
router.get('/', async (req, res) => {
    try {
        const students = await Student.find();
        res.status(200).json(students);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener los estudiantes.' });
    }
});

/**
 * Ruta para obtener estudiantes que cumplen una condición específica.
 * @name GET /query?field={campo}&value={campo}
 * @function
 * @memberof module:studentRoutes
 * @inner
 * @param {Object} req - Objeto de solicitud de Express.
 * @param {Object} res - Objeto de respuesta de Express.
 * @param {string} req.query.field - Campo sobre el cual aplicar la condición de búsqueda.
 * @param {string} req.query.value - Valor que debe cumplir la condición de búsqueda.
 */
router.get('/query', async (req, res) => {
    try {
        const { field, value } = req.query;
        const students = await Student.find({ [field]: value });
        res.status(200).json(students);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al realizar la consulta.' });
    }
});

/**
 * Ruta para modificar un estudiante existente o crear uno nuevo si no existe.
 * @name PUT /:id
 * @function
 * @memberof module:studentRoutes
 * @inner
 * @param {Object} req - Objeto de solicitud de Express.
 * @param {Object} res - Objeto de respuesta de Express.
 * @param {string} req.params.id - ID del estudiante a modificar.
 * @param {Object} req.body - Datos a modificar o crear en el estudiante.
 * @param {string} req.body.field - Campo a modificar o crear en el estudiante.
 * @param {any} req.body.value - Valor del campo a modificar o crear en el estudiante.
 */
router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { field, value } = req.body;
        const student = await Student.findById(id);
        if (!student) {
            const newStudent = new Student({ [field]: value });
            await newStudent.save();
            res.status(201).json(newStudent);
        } else {
            student[field] = value;
            await student.save();
            res.status(200).json(student);
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al modificar el estudiante.' });
    }
});

/**
 * Ruta para eliminar un estudiante existente.
 * @name DELETE /:id
 * @function
 * @memberof module:studentRoutes
 * @inner
 * @param {Object} req - Objeto de solicitud de Express.
 * @param {Object} res - Objeto de respuesta de Express.
 * @param {string} req.params.id - ID del estudiante a eliminar.
 */
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const student = await Student.findByIdAndDelete(id);
        if (!student) {
            res.status(204).send();
        } else {
            res.status(200).json({ message: 'Estudiante eliminado correctamente.' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al eliminar el estudiante.' });
    }
});


module.exports = router;