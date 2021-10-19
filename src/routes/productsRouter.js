const express = require ('express');
const router = express.Router();
const productsController = require('../controllers/productsController');

router.get ('/carritoProductos', productsController.carrito);
router.get ('/detalle', productsController.detalle);
router.get ('/agregar', productsController.agregar);
router.get ('/bmproducto', productsController.bmproducto);

module.exports = router;