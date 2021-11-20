const express = require ('express');
const router = express.Router();
const userController = require('../controllers/userController');
/*const clienteMiddleware = require('../middlewares/clienteMiddleware');
const autenticacionMiddleware = require('../middlewares/autenticacionMiddleware');*/

//Formulario de login
//router.get ('/acceso', clienteMiddleware,userController.acceso);
router.get ('/acceso', userController.acceso);

//Formulario de registro:
//router.get ('/registro', clienteMiddleware, userController.registro);
router.get ('/registro', userController.registro);

//Perfil de Usuario:
//router.get('/perfil/', autenticacionMiddleware, userController.perfil);
router.get('/perfil', userController.perfil);

module.exports = router;