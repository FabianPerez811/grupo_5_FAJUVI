const express = require('express');
const router = express.Router();
const apiProductsController = require('../controllers/apiProductsController');
const apiUsersController = require('../controllers/apiUsersController');

router.get('/products', apiProductsController.list);
router.get('/products/:id', apiProductsController.details);

router.get('/users', apiUsersController.list);
router.get('/users/:id', apiUsersController.details);

module.exports = router;