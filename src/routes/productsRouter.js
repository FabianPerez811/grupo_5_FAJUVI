const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');

//RUTAS USUARIO ECOMMERCE:

router.get('/productos', productsController.productos); // vista listado productos ecommerce
router.get('/productos/:id', productsController.detalle) // vista detalle prod
router.get('/carritoProductos', productsController.carrito); // vista de carrito de producto

//RUTAS CRUD ADMINISTRADOR:

router.get('/products', productsController.abmListar)// vista listar todos los productos
router.get('/products/create', productsController.abmCrear); // vista de crear productos
router.get('/products/:id', productsController.abmDetalle) // vista detalle prodoctos
router.post('/products', productsController.abmCreado) // metodo de agregar productos
router.get('/products/:id/edit', productsController.abmEditar) // vista de edicion de producto
router.put('/products/:id', productsController.abmEditado) // metodo de editar producto
router.delete('/products/:id', productsController.abmEliminar) // metodo de borrado de producto

module.exports = router;