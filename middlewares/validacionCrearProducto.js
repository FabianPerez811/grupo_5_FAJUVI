const {body} = require('express-validator');
const path = require('path');

const validacionesCrearProducto = [
    body('nombre')
        .notEmpty().withMessage('Debes escribir el nombre del producto').bail()
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
            let acceptedExtensions = ['.jpg', '.jpeg', '.png', '.gif'];            

            if(!file){
                throw new Error('Debes subir una imagen del producto');
            } else {
                let fileExtension = path.extname(file.originalname);
                if (!acceptedExtensions.includes(fileExtension)) {
                    throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`);
                }            

            }
            return true
        }),
    body('categoria')
        .notEmpty().withMessage('Debes seleccionar una categoria')
]

module.exports=validacionesCrearProducto;