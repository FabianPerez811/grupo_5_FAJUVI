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

//RUTAS CRUD ADMINISTRADOR:

router.get('/products', productsController.abmListar)// vista listar todos los productos
router.get('/products/create', productsController.abmCrear); // vista de crear productos
router.get('/products/searchProducts',productsController.searchProducts);//vista de resultado de búsqueda de producto
router.get('/products/:id', productsController.abmDetalle) // vista detalle prodoctos
router.post('/products', upload.single('foto'), productsController.abmCreado) // metodo de agregar productos
router.get('/products/:id/edit', productsController.abmEditar) // vista de edicion de producto
router.put('/products/:id', upload.single('foto'), productsController.abmEditado) // metodo de editar producto
router.delete('/products/:id', productsController.abmEliminar) // metodo de borrado de producto

module.exports = router;