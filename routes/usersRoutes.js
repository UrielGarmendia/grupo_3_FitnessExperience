const express = require('express');
const router = express.Router();

const mainController = require('../controllers/mainControllers');
const usersControllers = require('../controllers/userControllers');


// crear
router.get('/register', usersControllers.register);


//actualizar usuario


//eliminar usuario

//ingresar
router.get('/login', usersControllers.login);

//buscar usuario por id

//mostrar todos los usuarios registrados

module.exports = router