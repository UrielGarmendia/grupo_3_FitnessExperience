const { Router } = require("express");
const express = require ("express");
const router = express.Router();

const productsControllers = require ("../controllers/productsControllers");



// requerir todos los productos

router.get("/", productsControllers.index)


router.get('/:id', productsControllers.productsId);

// crear productos

router.get('/create', productsControllers.createProducts);
router.post("/",productsControllers.newProducts)

//requerir producto por id


//modificar productos
router.get("/:id/edit",productsControllers.modifyProducts)
router.put("/:id", productsControllers.updateProducts)

//eliminar productos
router.delete("/:id", productsControllers.deleteProducts)


module.exports = router
