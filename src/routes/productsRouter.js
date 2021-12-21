const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');


//RUTAS USUARIO ECOMMERCE:

router.get('/cart', productsController.carrito); // vista de carrito de producto
router.get('/list', productsController.productos); // vista listado productos ecommerce
router.get('/:id', productsController.detalle); // vista detalle prod


module.exports = router;