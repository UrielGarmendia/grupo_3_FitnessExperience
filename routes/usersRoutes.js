const express = require('express');
const router = express.Router();
const upload = require ("../middlewares/userMulter");
const usersControllers = require('../controllers/userControllers');

const userValidations = require ('../middlewares/userValidations.js');

// Mostrar el registro de usuario
router.get('/register', usersControllers.createUser)

// proceso del registro
router.post('/', upload.single('image'), userValidations,  usersControllers.newUser);

//ingresar
router.get('/login', usersControllers.login);

//proceso del login
router.post('/login', usersControllers.loginProcess);

//buscar usuario por id


module.exports = router