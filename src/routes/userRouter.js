const express = require ('express');
const router = express.Router();
const userController = require('../controllers/userController');
const path = require('path');
const multer = require('multer');

const validacionRegistro = require('../../middlewares/validacionRegistro')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/img/img_users');
    },
    filename: (req, file, cb) => {
        let filename = `${Date.now()}_img${path.extname(file.originalname)}`;
        cb(null, filename); 
    },
     
 });
 const upload = multer({ storage: storage });

const usuarioMiddleware = require('../../middlewares/usuarioMiddleware');
const autenticacionMiddleware = require('../../middlewares/autenticacionMiddleware');

//Formulario de login
router.get ('/acceso', usuarioMiddleware,userController.acceso);


//proceso de login
router.post('/acceso', userController.procesoAcceso);
 

//Formulario de registro:
router.get ('/registro', usuarioMiddleware, userController.registro);


//Procesar el registro
router.post ('/registro', upload.single('fotoPerfil') ,validacionRegistro, userController.procesoRegistro);

//Perfil de Usuario:
router.get('/perfil/', autenticacionMiddleware, userController.perfil);

router.post('/perfil', userController.cerrrarSesion);

module.exports = router;