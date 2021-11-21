const express = require ('express');
const router = express.Router();
const userController = require('../controllers/userController');
/*const clienteMiddleware = require('../middlewares/usuarioMiddleware');
const autenticacionMiddleware = require('../middlewares/autenticacionMiddleware');*/

//Formulario de login
//router.get ('/acceso', usuarioMiddleware,userController.acceso);
router.get ('/acceso', userController.acceso);

//proceso de login
//router.get ('/acceso', usuarioMiddleware,userController.acceso);
router.post ('/acceso', userController.procesoAcceso);

//Formulario de registro:
//router.get ('/registro', usuarioMiddleware, userController.registro);
router.get ('/registro', userController.registro);

//Procesar el registro
router.post ('/registro', userController.procesoRegistro);

//Perfil de Usuario:
//router.get('/perfil/', autenticacionMiddleware, userController.perfil);
router.get('/perfil', userController.perfil);

module.exports = router;