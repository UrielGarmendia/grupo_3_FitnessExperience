const express = require('express');
const router = express.Router();
const upload = require ("../middlewares/userMulter");
const usersControllers = require('../controllers/userControllers');

// Mostrar el registro de usuario
router.get('/register', usersControllers.createUser)
router.post('/', upload
.single('image'), usersControllers.newUser);

//ingresar
router.get('/login', usersControllers.login);

//buscar usuario por id


module.exports = router