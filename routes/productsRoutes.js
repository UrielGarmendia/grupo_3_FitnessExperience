const { Router } = require("express");
const express = require ("express");
const router = express.Router();

const upload = require ("../middlewares/productsMulter");

const productsControllers = require ("../controllers/productsControllers");

const productValidations = require('../middlewares/productValidator');

// requerir todos los productos
router.get("/", productsControllers.index);

// carrito de compras
router.get('/carrito', productsControllers.carrito);

// crear productos
router.get('/create', productsControllers.createProducts);
router.post("/", upload.single('image'),productValidations , productsControllers.newProducts);

// productos del usuario
router.get("/uploadedProducts", productsControllers.productsUser);

//eliminar productos
router.delete("/:id", productsControllers.deleteProducts);

//requerir producto por id
router.get('/:id', productsControllers.productsId);
//modificar productos
router.get("/edit/:id",productsControllers.modifyProducts);
router.put("/:id", upload.single('image') ,productsControllers.updateProducts);


module.exports = router;
