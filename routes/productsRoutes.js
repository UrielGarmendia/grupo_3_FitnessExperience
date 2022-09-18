const { Router } = require("express");
const express = require ("express");
const router = express.Router();
const upload = require ("../middlewares/productsMulter");
const productsControllers = require ("../controllers/productsControllers");
const productValidations = require('../middlewares/productValidator');
const authMiddleware = require ('../middlewares/authMiddleware');


// requerir todos los productos "LISTAR TODOS"
router.get("/", productsControllers.index);

// carrito de compras
router.get('/carrito', authMiddleware, productsControllers.carrito);

//requerir producto por id "DETALLE DE PRODUCTO"
router.get('/detail/:id', productsControllers.detail);

// crear productos
router.get('/add', /* authMiddleware, */ productsControllers.createProducts);
router.post("/create", upload.single('image'), productsControllers.newProducts);

// Editar  productos
router.get("/edit/:id", authMiddleware, productsControllers.edit );
router.put("/:id", upload.single('image') ,productsControllers.updateProducts);

// productos del usuario
router.get("/uploadedProducts", authMiddleware, productsControllers.productsUser);

//eliminar productos
router.get("/delete/:id",productsControllers.delete)
router.delete("/delete/:id", productsControllers.deleteProducts);






module.exports = router;