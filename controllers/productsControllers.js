const { v4: uuidv4 } = require ("uuid")
const fs = require ("fs")
const path = require('path');
const db = require('../database/models');
const productsListPath = path.join(__dirname,"../structure.sql");
const productsList = fs.readFileSync(productsListPath);

const { validationResult } = require('express-validator');
const { decodeBase64 } = require("bcryptjs");

const productsControllers = {
    index: (req,res) => {
        //enviara la lista de todos los productos
        res.render('home-shop', { productos: productsList, user: req.session.userLogged });
    },

    carrito: (req, res) => {
        res.render('carrito', { productos: productsList, user: req.session.userLogged });
    },

    createProducts: (req, res) => {
        //enviara el formulario para crear el producto
        res.render("products/formulario-de-carga", { user: req.session.userLogged });
    },

    productsId: (req, res) => {
        //enviara la informacion de un producto segun su ID
        db.Producto.findByPk(req.params.id)
            .then((producto) => {
                res.render("detalle-producto", { producto, productos: productsList, user: req.session.userLogged});
            })
        // let id = req.params.id;
        // let producto = productsList.find(producto => producto.id == id);
        // console.log('------Si aparece: Cannot read properties of undefined. Ignorar el error--------');
        
    },

    newProducts: (req,res) => {
        //recepcion de informacion cargada en el form  de "createProducts"
        const resultValidation = validationResult(req);

        if (resultValidation.errors.length > 0) {
            res.render("products/formulario-de-carga", { 
                errors: resultValidation.mapped(),
                oldData: req.body,
                user: req.session.userLogged
            });
        } else {
            db.Producto.create({
                name: req.body.name,
                image: req.body.image,
                price: req.body.price,
                description: req.body.description,
                discount: req.body.discount,
            });
            res.redirect('/products');
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
        
    },
    modifyProducts: (req,res) => {
        // envio del formulario para modificar el producto

        db.Producto.findByPk(req.params.id)
            .then((producto) => {
                res.render("products/formulario-de-edicion", { producto, user: req.session.userLogged});
            })

    //    let producto = productsList.find(producto => producto.id == id);    
    },

    productsUser: (req, res) => {
        // envio de la vista de los productos subidos por el usuario
        res.render('mis-productos', { productos: productsList, user: req.session.userLogged});
    },

    updateProducts: (req,res) => {
        //recepcion y procesado de las modificaciones del producto en el "modifyProducts"
        db.Producto.update({
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
        
        res.redirect('/products/'+ req.params.id);



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

    deleteProducts: (req, res) => {
        // proceso de eliminacion de productos
        db.Producto.destroy({
            where: {
                id: req.params.id
            }
        })
        
        res.redirect('/products/uploadedProducts')


        // let id = req.params.id;
        // for (let index = 0; index < productsList.length; index++) {
        //     const element = productsList[index];
        //     if (element.id == id) {
        //         productsList.splice(index, 1);
        //     }
        // }

        // fs.writeFileSync(productsListPath, JSON.stringify(productsList, null, 2));

        // ;
    }
}


module.exports = productsControllers