const express = require('express');
const router = express.Router();
const apiProductsController = require('../controllers/apiProductsController');

router.get('/products', apiProductsController.list);
router.get('/products/:id', apiProductsController.details);

module.exports = router;