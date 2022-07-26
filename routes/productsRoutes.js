const { Router } = require("express");
const express = require ("express");
const router = express.Router();

const upload = require ("../middlewares/multer");

const productsControllers = require ("../controllers/productsControllers");

// requerir todos los productos

router.get("/", productsControllers.index);

// carrito de compras
router.get('/carrito', productsControllers.carrito);

// crear productos
router.get('/create', productsControllers.createProducts);
router.post("/", upload.single('image'), productsControllers.newProducts);


router.get('/:id', productsControllers.productsId);
//modificar productos
router.get("/edit/:id",productsControllers.modifyProducts);
router.put("/:id", upload.single('image') ,productsControllers.updateProducts);

//eliminar productos
router.delete("/:id", productsControllers.deleteProducts);

//requerir producto por id

module.exports = router;
