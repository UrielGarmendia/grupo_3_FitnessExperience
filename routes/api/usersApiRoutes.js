const express = require('express');
const router = express.Router();
const usersApiControllers = require('../../controllers/api/usersAPIControllers')
const multer = require('../../middlewares/userMulter');

/* // listar todos usuarios
router.get('/', usersApiControllers.userList)
// registrar usuario
router.post("/register", multer.single('userAvatar'), usersApiControllers.processRegister);
// buscar usuario
router.get('/seach', usersApiControllers.seach);
// ultimo usuario creado
router.get('/last', usersApiControllers.lastCreated);
 */
module.exports = router;