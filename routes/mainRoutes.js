const express = require('express');
const router = express.Router();

const mainController = require('../controllers/mainControllers')


router.get('/', mainController.index);

router.get('/register', mainController.register);

router.get('/login', mainController.login);

router.get('/carrito', mainController.carrito);

router.get('/detalle-producto', mainController.detalle);

module.exports = router;


// app.get('/register', (req, res) => {
//     router.get(path.join(__dirname, './views/register.html'));
// });

// app.get('/login', (req, res) => {
//     router.get(path.join(__dirname, './views/login.html'));
// });

// app.get('/carrito', (req, res) => {
//     router.get(path.join(__dirname, './views/carrito.html'));
// });

// app.get('/detalle-producto', (req, res) => {
//     router.get(path.join(__dirname, './views/detalle-producto.html'));
// });