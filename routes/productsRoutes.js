const { Router } = require("express");
const express = require ("express");
const router = express.Router();
const upload = require ("../middlewares/productsMulter");

const productsControllers = require ("../controllers/productsControllers");

const productValidations = require('../middlewares/productValidator');
const authMiddleware = require ('../middlewares/authMiddleware');

// requerir todos los productos
router.get("/", productsControllers.index);

// carrito de compras
router.get('/carrito', authMiddleware, productsControllers.carrito);

// crear productos
router.get('/create', authMiddleware, productsControllers.createProducts);
router.post("/", upload.single('image'), productValidations , productsControllers.newProducts);

// productos del usuario
router.get("/uploadedProducts", authMiddleware, productsControllers.productsUser);

//eliminar productos
router.delete("/:id", productsControllers.deleteProducts);

//requerir producto por id
router.get('/:id', productsControllers.productsId);
//modificar productos
router.get("/edit/:id", authMiddleware, productsControllers.modifyProducts);
router.put("/:id", upload.single('image') ,productsControllers.updateProducts);


module.exports = router;
