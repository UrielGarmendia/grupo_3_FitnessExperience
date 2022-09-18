const express = require('express');
const router = express.Router();
const usersControllers = require('../controllers/userControllers');
const multer = require ("../middlewares/userMulter");
const guestMiddleware = require ('../middlewares/guestMiddleware');
const authMiddleware = require("../middlewares/authMiddleware")
const userValidations = require ('../middlewares/userValidations.js');


//Login
router.get('/login', guestMiddleware, usersControllers.login);
router.post('/login', usersControllers.loginProcess);
// registro de usuario
router.get('/register', guestMiddleware, usersControllers.createUser);
router.post('/register', multer.single('userImage'), userValidations,  usersControllers.newUser);
//Logout
router.get('/logout', usersControllers.logout);
/* router.get("/profile",authMiddleware,usersController.profile); */

// ruta para editar perfil
router.get("/edit", authMiddleware, usersControllers.edit);
router.put("/edit", authMiddleware, multer.single('userImage'), usersControllers.processEdit);

module.exports = router