const express = require ('express');
const router = express.Router();
const mainController = require('../controllers/mainController');

router.get ('/', mainController.indice);
router.get ('/acceso', mainController.acceso);
router.get ('/registro', mainController.registro);
;

module.exports = router;