const {body} = require('express-validator')

const validaciones = [
    body('nombre')
        .notEmpty().withMessage('Debes ingresar un nombre.')
        .isLength({ min: 2 }).withMessage('Debes tener 2 caracteres minimo'),
    body('apellido')
        .notEmpty().withMessage('Debes ingresar un apellido.')
        .isLength({ min: 2 }).withMessage('Debes tener 2 caracteres minimo'),
    body('email')
        .notEmpty().withMessage('Debes ingresar un mail').bail(),
    body('password')
        .notEmpty().withMessage('Debes ingresar una contraseña con 8 caracteres minimo')
        .isLength({ min: 8 }).withMessage('Debes tener 8 caracteres minimo'),
    body('password2')
        .notEmpty().withMessage('Debes repetir la contraseña')
        .isLength({ min: 8 }).withMessage('Debes tener 8 caracteres minimo'),
    body('catUsuario')
        .notEmpty().withMessage('Debes elegir una categoria'),
    body('fotoPerfil')
        .custom((value, {req}) =>{
            let file = req.file;
            let acceptedExtensions = ['.jpg', '.jpeg', '.png', '.gif'];      
            if(!file){
                throw new Error(('Debes subir una imagen'))
            }else {
                let fileExtension = path.extname(file.originalname);
                if (!acceptedExtensions.includes(fileExtension)) {
                    throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`);
                }            

            }
            return true
    })
]

module.exports=validaciones;