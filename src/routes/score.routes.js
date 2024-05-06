const { Router } = require('express')

const Score = require('../schema/score');
const router = Router()

/**
 * Ruta para obtener todas las puntuaciones.
 * @name GET /
 * @function
 * @memberof module:scoreRoutes
 * @inner
 * @param {Object} req - Objeto de solicitud de Express.
 * @param {Object} res - Objeto de respuesta de Express.
 */
router.get('/', async (req, res) => {
    try {
        const scores = await Score.find();
        res.status(200).json(scores);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener las puntuaciones.' });
    }
});

/**
 * Ruta para obtener puntuaciones que cumplen una condición específica.
 * @name GET /query?field={campo}&value={campo}
 * @function
 * @memberof module:scoreRoutes
 * @inner
 * @param {Object} req - Objeto de solicitud de Express.
 * @param {Object} res - Objeto de respuesta de Express.
 * @param {string} req.query.field - Campo sobre el cual aplicar la condición de búsqueda.
 * @param {string} req.query.value - Valor que debe cumplir la condición de búsqueda.
 */
router.get('/query', async (req, res) => {
    try {
        const { field, value } = req.query;
        const scores = await Score.find({ [field]: value });
        res.status(200).json(scores);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al realizar la consulta.' });
    }
});

/**
 * Ruta para modificar una puntuación existente o crear una nueva si no existe.
 * @name PUT /:id
 * @function
 * @memberof module:scoreRoutes
 * @inner
 * @param {Object} req - Objeto de solicitud de Express.
 * @param {Object} res - Objeto de respuesta de Express.
 * @param {string} req.params.id - ID de la puntuación a modificar.
 * @param {Object} req.body - Datos a modificar o crear en la puntuación.
 * @param {string} req.body.field - Campo a modificar o crear en la puntuación.
 * @param {any} req.body.value - Valor del campo a modificar o crear en la puntuación.
 */
router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { field, value } = req.body;
        const score = await Score.findById(id);
        if (!score) {
            const newScore = new Score({ [field]: value });
            await newScore.save();
            res.status(201).json(newScore);
        } else {
            score[field] = value;
            await score.save();
            res.status(200).json(score);
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al modificar el estudiante.' });
    }
});

/**
 * Ruta para eliminar una puntuación existente.
 * @name DELETE /:id
 * @function
 * @memberof module:scoreRoutes
 * @inner
 * @param {Object} req - Objeto de solicitud de Express.
 * @param {Object} res - Objeto de respuesta de Express.
 * @param {string} req.params.id - ID de la puntuación a eliminar.
 */
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const score = await Score.findByIdAndDelete(id);
        if (!score) {
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