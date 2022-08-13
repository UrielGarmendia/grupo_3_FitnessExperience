const express = require('express');
const router = express.Router();
const upload = require ("../middlewares/userMulter");
const usersControllers = require('../controllers/userControllers');

const userValidations = require ('../middlewares/userValidations.js');
const guestMiddleware = require ('../middlewares/guestMiddleware');

// Mostrar el registro de usuario
router.get('/register', guestMiddleware, usersControllers.createUser);

// proceso del registro
router.post('/', upload.single('image'), userValidations,  usersControllers.newUser);

//ingresar
router.get('/login', guestMiddleware, usersControllers.login);

//proceso del login
router.post('/login', usersControllers.loginProcess);

//Logout
router.get('/logout', usersControllers.logout);

//buscar usuario por id


module.exports = router