const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const dog = require('./dog')
const temperament = require('./temperament')



const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/dogs', dog)
router.use('/temperament', temperament)


module.exports = router;
