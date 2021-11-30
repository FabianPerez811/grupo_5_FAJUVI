const {body} = require('express-validator')

const validaciones = [
    body('nombre').notEmpty().withMessage('Debes ingresar un nombre'),
    body('apellido').notEmpty().withMessage('Debes ingresar un apellido'),
    body('email').notEmpty().withMessage('Debes ingresar un mail').bail(),
    body('password').notEmpty().withMessage('Debes ingresar una contraseña'),
    body('password2').notEmpty().withMessage('Debes repetir la contraseña'),
    body('catUsuario').notEmpty().withMessage('Debes elegir una categoria'),
    body('fotoPerfil').custom((value, {req}) =>{
        let file = req.file;
        if(!file){
            throw new Error(('Debes subir una imagen'))
        }
        return true
    })
]

module.exports=validaciones;