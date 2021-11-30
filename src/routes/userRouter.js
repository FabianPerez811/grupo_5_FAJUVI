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
router.get ('/sign-in', usuarioMiddleware,userController.acceso);

//proceso de login
router.post('/sign-in', userController.procesoAcceso); 

//Formulario de registro:
router.get ('/sign-up', usuarioMiddleware, userController.registro);

//Procesar el registro
router.post ('/sign-up', upload.single('fotoPerfil') ,validacionRegistro, userController.procesoRegistro);

//Perfil de Usuario:
router.get('/profile', autenticacionMiddleware, userController.perfil);

router.post('/profile', userController.cerrrarSesion);

module.exports = router;