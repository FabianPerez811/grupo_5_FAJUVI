const {body} = require('express-validator')

const validaciones = [
    body('fistName').notEmpty().withMessage('Debes ingresar un nombre'),
    body('lastName').notEmpty().withMessage('Debes ingresar un apellido'),
    body('email').notEmpty().withMessage('Debes ingresar un mail'),
    body('password').notEmpty().withMessage('Debes ingresar una contraseña'),
    body('category').notEmpty().withMessage('Debes elegir una categoria'),
    body('image').notEmpty().withMessage('Debes subir una imagen'),
]

module.exports=validaciones;