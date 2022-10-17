const fs = require("fs");
const path = require("path");
const db = require("../../database/models");
const sequelize = db.sequelize;
const { op } = require("sequelize");

const { validationResult } = require("express-validator");
const { decodeBase64 } = require("bcryptjs");

const productsAPIcontrolers = {

productList: async (req, res) => {
    await db.Productos.findAll({
    order: [["id", "desc"]],
    })
    .then((productos) => {
        res.json(productos);
    })
    .catch((error) => {
        console.error(error);
    });
},
productDetail: async (req, res) => {
    await db.Productos.findByPk(req.params.id)
    .then((producto) => {
        res.status(200).json({
                data: producto,
                status: 200
            }
        );
      })
      .catch((error)=>{
        console.error(error);
      });
}

};

module.exports = productsAPIcontrolers;
