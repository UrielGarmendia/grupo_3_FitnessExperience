const { v4: uuidv4 } = require ("uuid")
const fs = require ("fs")
const path = require('path');

const productsListPath = path.join(__dirname,"../data/products.json");
const productsList = JSON.parse(fs.readFileSync(productsListPath,"utf-8"));

const productsControllers = {
    index: (req,res) => {
        //enviara la lista de todos los productos
        res.render('index', { productos: productsList });
    },


    createProducts: (req, res) => {
        //enviara el formulario para crear el producto
        res.render("products/formulario-de-carga");
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
        let product = req.body;

        product.id = uuid();

        productsList.push(product);

        fs.writeFileSync(productsListPath, JSON.stringify(productsList,null, 2));

        res.redirect('/products')
    },
    modifyProducts: (req,res) =>{
        // envio del formulario para modificar el producto
        res.send('edit products');
    },

    updateProducts: (req,res) => {
        //recepcion y procesado de las modificaciones del producto en el "modifyProducts"
    },

    deleteProducts: (req,res) => {
        //accion de borrado producto
    }
}


module.exports = productsControllers