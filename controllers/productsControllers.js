// const { v4: uuidv4 } = require ("uuid")
const fs = require("fs");
const path = require("path");
const db = require("../database/models");
const sequelize = db.sequelize;
const { op } = require("sequelize");

const { validationResult } = require("express-validator");
const { decodeBase64 } = require("bcryptjs");

const productsControllers = {
  index: async (req, res) => {
    // listar todos
    await db.Productos.findAll({
      order: [["id", "desc"]],
    })
      .then((productos) => {
        res.render("home-shop", { productos });
      })
      .catch((error) => {
        console.error(error);
      });
  }, // listado de productos

  /* index: async (req, res) => {
    // listar todos uri
    //enviara la lista de todos los productos
    // console.log('estamos en index');
    let productsList = [];
    try {
      productsList = await db.Productos.findAll();
      //  console.log(productsList, 'Estoy en productsControllers en el metodo index');
      res.render("home-shop", {
        productos: productsList,
        user: req.session.userLogged,
      });
    } catch (error) {
      // console.error(error);
      res.render("home-shop", {
        productos: productsList,
        user: req.session.userLogged,
        error,
      });
    }
  }, */ // Listar pproductos

  detail: async (req, res) => {
    // detalle producto Agus
    await db.Productos.findByPk(req.params.id).then((producto) => {
      res.render("detalle-producto", { producto : producto
      });
    })
    .catch((error)=>{
      console.error(error);
    });
  }, //detalle producto por ID

  /*   detail: (req, res) => {
    // detalle producto Uri
    //enviara la informacion de un producto segun su ID
    db.Productos.findByPk(req.params.id).then((data) => {
      //  console.log('Estoy en productsControllers en el metodo productsId', data);
      res.render("detalle-producto", {
        producto: data,
        user: req.session.userLogged,
      });
    });
    // let id = req.params.id;
    // let producto = productsList.find(producto => producto.id == id);
    // console.log('------Si aparece: Cannot read properties of undefined. Ignorar el error--------');
  }, */

  // metodos para trabajar con el CRUD
  //_____________________________________
  //crear producto
  add: function (req, res) {
    // muestra form para carga de producto
    res.render("products/formulario-de-carga", {
      user: req.session.userLogged,
    });
  },

  create: (req, res) => {
    // proceso de form add. para nuevo producto
    const resultValidation = validationResult(req);
    console.log(file);

    if (resultValidation.errors.length > 0) {
      res.render("products/formulario-de-carga", {
        errors: resultValidation.mapped(),
        oldData: req.body,
        user: req.session.userLogged,
      });
    } else {
      db.Productos.create({
        name: req.body.name,
        image: req.upload.file.filename,
        price: req.body.price,
        description: req.body.description,
        discount: req.body.discount,
      })
        .then(function (producto) {
          res.redirect("/products");
        })
        .catch(function (error) {
          console.log("Sin conexion", error);
        });
    }
  },

  //_______________________________________
  //editar producto

  edit : async (req, res) => {
    //muestra formulario para edicion de producto
    // envio del formulario para modificar el producto

    await db.Productos.findByPk(req.params.id)
    .then((producto) => {
      res.render("products/formulario-de-edicion", {
        producto,
        user: req.session.userLogged,
      });
    })
    .catch((error)=>{
      console.error(error);
    });

    //    let producto = productsList.find(producto => producto.id == id);
  }, // envia formulario para la edicion del producto

  updateProducts: async (req, res) => {
    //procesa form edit y actualiza producto
    //recepcion y procesado de las modificaciones del producto en el "modifyProducts"
    await db.Productos.update(
      {
        name: req.body.name,
        image: req.file ? req.file.filename : req.body.image,
        price: req.body.price,
        description: req.body.description,
      },
      {
        where: {
          id: req.params.id,
        }
      })
      .then(() => {
      res.redirect("/products");
    })
    .catch((error)=>{
      console.error(error);
    });

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
  }, // procesa el formulario para edicion del producto

  //________________________________________
  // Eliminar producto
  delete: function (req, res) {
    // envia form para eliminar producto
    db.Productos.findByPk(req.params.id).then((producto) => {
      res.render("./products/productsDelete", { producto: producto });
    });
  }, //envia pregunta si quiere eliminar

  deleteProducts: async (req, res) => {
    //procesa destroy del metodo delete.
    // proceso de eliminacion de productos
    await db.Productos.destroy({
      where: {
        id: req.params.id,
      },
    });
      res.redirect("/products");
  }, //procesa la eliminacion del producto.

  carrito: (req, res) => {
    res.render("carrito", {
      productos: productsList,
      user: req.session.userLogged,
    });
  },

  createProducts: (req, res) => {
    //enviara el formulario para crear el producto
    res.render("products/formulario-de-carga",/*  {
      user: req.session.userLogged,
    } */)
    .catch((error)=>{
      console.error(error);
    })
  }, // envia form para crear producto.

  newProducts: async (req, res) => {
      await db.Productos.create({
        name: req.body.name,
        id_user:req.body.id_user || 1,
        image: req.file.filename,
        price: req.body.price,
        description: req.body.description,
      })
      .then(()=>{
        res.redirect("/");
      })
      .catch((error)=>{
        console.error(error);
      });
}, //procesa el form para ls creacion del nuevo producto.
  productsUser: (req, res) => {
    // envio de la vista de los productos subidos por el usuario
    res.render("mis-productos", {
      productos: productsList,
      user: req.session.userLogged,
    });
  }
}

module.exports = productsControllers;
