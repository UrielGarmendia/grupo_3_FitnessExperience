const express = require('express');
const router = express.Router();
const mainControllers = require('../controllers/mainControllers');
const usersControllers = require('../controllers/userControllers');


router.get('/', mainControllers.homePage)
// router.get('/null', mainControllers.index);

// router.get('/detalle-producto/:id', mainController.detalle);
// router.get('/carrito', mainController.carrito);


// router.get('/crear-producto', mainController.crearProducto);


module.exports = router;