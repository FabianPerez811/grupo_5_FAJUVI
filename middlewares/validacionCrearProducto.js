const {body} = require('express-validator')

const validacionesCrearProducto = [
    body('nombre')
        .notEmpty().withMessage('Debes escribir el nombre del producto')
        .isLength({min:5}).withMessage('El nombre del producto debe tener al menos 5 caracteres'),
    body('descripcion')
        .notEmpty().withMessage('Debes escribir la descripción del producto').bail()
        .isLength({min:20}).withMessage('La descripción del producto debe tener al menos 20 caracteres'),
    body('precio')
        .notEmpty().withMessage('Debes escribir el precio del producto').bail()
        .isNumeric(),    
    body('foto')//agregar que deberá ser un archivo válido(JPG,JPEG,PNG,GIF)
        .custom((value, {req}) =>{
            let file = req.file;
            if(!file){
                throw new Error(('Debes subir una imagen del producto'))
            }
            return true
        }),
    body('categoria')
        .notEmpty().withMessage('Debes seleccionar una categoria')
]

module.exports=validacionesCrearProducto;