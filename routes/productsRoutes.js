const { Router } = require("express");
const express = require ("express");
const router = express.Router();

const productsControllers = require ("../controllers/productsControllers");


// requerir todos los productos

router.get("/", productsControllers.index);
// crear productos
router.get('/create', productsControllers.createProducts);
router.post("/",productsControllers.newProducts);


router.get('/:id', productsControllers.productsId);
//modificar productos
router.get("/edit/:id",productsControllers.modifyProducts);
router.put("/:id", productsControllers.updateProducts);

//eliminar productos
router.delete("/:id", productsControllers.deleteProducts);

//requerir producto por id

module.exports = router;
