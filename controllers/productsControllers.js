// const { v4: uuidv4 } = require ("uuid")
const fs = require ("fs")
const path = require('path');
const db = require('../database/models');
const sequelize = db.sequelize;
const {op} = require ("sequelize");

const { validationResult } = require('express-validator');
const { decodeBase64 } = require("bcryptjs");

const upload = require('../middlewares/productsMulter')

const productsList = require('../database/config/config')

const productsControllers = {
/*     index: (req,res) =>{ // listar todos Agus
    db.Productos.findAll({
        order : [
            ["id","desc"]
        ]
    })
    .then (productos => {
        res.render("home-shop",{productos})
    }
)}, */
    index: async (req,res) => { // listar todos uri
        //enviara la lista de todos los productos
        // console.log('estamos en index');
        let productsList = [];
        try {
        productsList = await db.Productos.findAll();
        //  console.log(productsList, 'Estoy en productsControllers en el metodo index');
        res.render('home-shop', { productos: productsList, user: req.session.userLogged });
        } catch (error) {
            // console.error(error);
            res.render('home-shop',
            { productos: productsList, user: req.session.userLogged, error });
        }
    }, // Listar pproductos

    detail : (req,res) => { // detalle producto Agus
        db.Productos.findByPk(req.params.id)
        .then(producto =>{
            res.render("detalle-producto",{producto})
        })
    },
    detail: (req, res) => { // detalle producto Uri
        //enviara la informacion de un producto segun su ID
        db.Productos.findByPk(req.params.id)
        .then ((data) => {
        //  console.log('Estoy en productsControllers en el metodo productsId', data);
        res.render('detalle-producto', { producto: data, user: req.session.userLogged });
        })
        // let id = req.params.id;
        // let producto = productsList.find(producto => producto.id == id);
        // console.log('------Si aparece: Cannot read properties of undefined. Ignorar el error--------');

    },

// metodos para trabajar con el CRUD
//_____________________________________
//crear producto
add : function (req , res){ // muestra form para carga de producto
    res.render("products/formulario-de-carga", { user: req.session.userLogged });
},
create : (req,res) => { // proceso de form add. para nuevo producto
    const resultValidation = validationResult(req);
        console.log(file);

        if (resultValidation.errors.length > 0) {
            res.render("products/formulario-de-carga", {
                errors: resultValidation.mapped(),
                oldData: req.body,
                user: req.session.userLogged
            });
        } else {
    db.Productos.create({
        name: req.body.name,
        image: req.upload.file.filename,
        price: req.body.price,
        description: req.body.description,
        discount: req.body.discount,
    })
    .then(function(producto){
        res.redirect("/products");
    })
    .catch (function(error){
        console.log("Sin conexion", error);
    })
}},
//_______________________________________
//editar producto

edit: (req,res) => { //muestra formulario para edicion de producto
    // envio del formulario para modificar el producto

    db.Productos.findByPk(req.params.id)
        .then((producto) => {
            res.render("products/formulario-de-edicion", { producto, user: req.session.userLogged});
        })

//    let producto = productsList.find(producto => producto.id == id);
},
updateProducts: (req,res) => { //procesa form edit y actualiza producto
    //recepcion y procesado de las modificaciones del producto en el "modifyProducts"
    db.Productos.update({
        name: req.body.name,
        image: req.body.image,
        price: req.body.price,
        description: req.body.description,
        discount: req.body.discount,
    },{
        where: {
            id:req.params.id
        }
    })
    .then (function(producto){
        res.redirect("/products");
    })



    // let id = req.params.id;
    // let newProduct = req.body;
    // let image = req.file.filename;

    // newProduct.id = id;

    // for (let index = 0; index < productsList.length; index++) {
    //     const element = productsList[index];
    //     if (element.id == id) {
    //         productsList[index] = newProduct;
    //         newProduct.image = image;
    //     }
    // }

    // fs.writeFileSync(productsListPath, JSON.stringify(productsList, null, 2));

},

//________________________________________
// Eliminar producto
delete : function(req,res){ // envia form para eliminar producto
    db.Productos.findByPk(req.params.id)
    .then ((producto) => {
        res.render("productsDelete",{producto})
    })
},
deleteProducts: (req, res) => { //procesa destroy del metodo delete.
    // proceso de eliminacion de productos
    db.Productos.destroy({
        where: {
            id: req.params.id
        }
    })
    .then (() =>{
        res.redirect('/products/uploadedProducts')
    })


    // let id = req.params.id;
    // for (let index = 0; index < productsList.length; index++) {
    //     const element = productsList[index];
    //     if (element.id == id) {
    //         productsList.splice(index, 1);
    //     }
    // }

    // fs.writeFileSync(productsListPath, JSON.stringify(productsList, null, 2));

    // ;
},




    carrito: (req, res) => {
        res.render('carrito', { productos: productsList, user: req.session.userLogged });
    },

    createProducts: (req, res) => {
        //enviara el formulario para crear el producto
        res.render("products/formulario-de-carga", { user: req.session.userLogged });
    }, // envia form para crear producto.
    newProducts: (req,res) => {
        //recepcion de informacion cargada en el form  de "createProducts"
        const resultValidation = validationResult(req);
        // console.log(req.file);

        if (resultValidation.errors.length > 0) {
            res.render("products/formulario-de-carga", {
                errors: resultValidation.mapped(),
                oldData: req.body,
                user: req.session.userLogged
            });
        } else {
            let newProduct = db.Productos.create(req.body, req.file, {
                name: req.body.name,
                // id_user:req.body.id_user || 1,
                image: req.upload.file.filename,
                price: req.body.price,
                description: req.body.description,
                discount: req.body.discount,
            });

            // newProduct
            //     .then((resultado) => {
            //         console.log(resultado);
            //         res.redirect('/products');
            //     })
            //     .catch((error) => {
            //         console.error(error);
            //     })
        };
        // let product = req.body;
        // let image = req.file.filename;

        // product.id = uuidv4();
        // product.image = image;

        // if (resultValidation.errors.length == 0) {
        //     productsList.push(product);

        //     fs.writeFileSync(productsListPath, JSON.stringify(productsList, null, 2))
        //     res.redirect('/products');
        // }
    }, // procesa form. createProducts para crear producto






    productsUser: (req, res) => {
        // envio de la vista de los productos subidos por el usuario
        res.render('mis-productos', { productos: productsList, user: req.session.userLogged});
    },
}


module.exports = productsControllers