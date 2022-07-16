const { v4: uuidv4 } = require ("uuid")
const fs = require ("fs")
const path = require('path');

const productsListPath = path.join(__dirname,"../data/products.json");
const productsList = JSON.parse(fs.readFileSync(productsListPath,"utf-8"));

const productsControllers = {
    index: (req,res) => {
        //enviara la lista de todos los productos
    },


    createProducts: (req, res) => {
        //enviara el formulario para crear el producto
        res.render("formulario-de-carga");
    },

    productsId: (req, res) => {
        //enviara la informacion de un producto segun su ID
        const id = req.params.id;
        const producto = productsList.find(producto => producto.id == id);
        // console.log('------Si aparece: Cannot read properties of undefined. Ignorar el error--------');
        res.render("detalle-producto", { producto, productos: productsList });
    },

    newProducts: (req,res) => {
        //recepcion de informacion cargada en el form  de "createProducts"
    },
    modifyProducts: (req,res) =>{
        // envio del formulario para modificar el producto
    },

    updateProducts: (req,res) => {
        //recepcion y procesado de las modificaciones del producto en el "modifyProducts"
    },

    deleteProducts: (req,res) => {
        //accion de borrado producto
    }
}


module.exports = productsControllers