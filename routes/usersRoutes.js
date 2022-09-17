const express = require('express');
const router = express.Router();
const upload = require ("../middlewares/userMulter");
const usersControllers = require('../controllers/userControllers');

const userValidations = require ('../middlewares/userValidations.js');
const guestMiddleware = require ('../middlewares/guestMiddleware');

// registro de usuario
router.get('/register', guestMiddleware, usersControllers.createUser);
router.post('/register', upload.single('image'), userValidations,  usersControllers.newUser);

//Login
router.get('/login', guestMiddleware, usersControllers.login);
router.post('/login', usersControllers.loginProcess);

//Logout
router.get('/logout', usersControllers.logout);

//Perfil
//router.get("/profile",userController.profile)


module.exports = router