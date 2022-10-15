const express = require("express");
const router = express.Router();

const productsApiControllers = require("../../controllers/api/productsAPIControllers");
const upload = require('../../middlewares/productsMulter');

// lista de productos
router.get('/', productsApiControllers.productList)
/* // Detalle de prodcuto por ID
router.get("/details/:id", productsApiControllers.productDetail);
// crear producto
router.post("/create", upload.single('image'), productsApiControllers.saveProduct);
// ultimo producto creado
router.get('/last', productsApiControllers.lastCreated);
// eliminar producto
router.delete("/delete/:id", productsApiControllers.deleteProduct);
// buscar producto
router.post('/search', productsApiControllers.searchProduct);
 */
module.exports = router;