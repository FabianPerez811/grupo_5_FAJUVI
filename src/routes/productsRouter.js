const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');
const multer = require('multer')


// ************ Configuracion MULTER ************
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/img')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + file.originalname)
    },
})

const upload = multer({ storage })

//RUTAS USUARIO ECOMMERCE:

router.get('/cart', productsController.carrito); // vista de carrito de producto
router.get('/list', productsController.productos); // vista listado productos ecommerce
router.get('/:id', productsController.detalle); // vista detalle prod


module.exports = router;