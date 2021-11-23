const {body} = require('express-validator')

const validaciones = [
    body('nombre').notEmpty().withMessage('Debes ingresar un nombre'),
    body('apellido').notEmpty().withMessage('Debes ingresar un apellido'),
    body('email').notEmpty().withMessage('Debes ingresar un mail'),
    body('password').notEmpty().withMessage('Debes ingresar una contraseña'),
    body('password2').notEmpty().withMessage('Debes repetir la contraseña'),
    body('catUsuario').notEmpty().withMessage('Debes elegir una categoria'),
    body('fotoPerfil').notEmpty().withMessage('Debes subir una imagen'),
]

module.exports=validaciones;