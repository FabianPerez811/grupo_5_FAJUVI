const express = require ('express');
const router = express.Router();
const productsController = require('../controllers/productsController');

router.get ('/productos', productsController.productos); // vista listado productos
router.get ('/agregar', productsController.crear); // vista de crear prod
router.get('/:id', productsController.detalle) // vista detalle prod
router.post('/agregar', productsController.agregado) // metodo de agregar product
router.get('/:id/bmproducto', productsController.bmproducto)// vista editar producto
router.put('/:id', productsController.editar) // metodo de edicion de producto
router.delete('/:id', productsController.eliminar) // metodo de borrado de producto
router.get ('/carritoProductos', productsController.carrito); // vista de carrito de product


module.exports = router;    