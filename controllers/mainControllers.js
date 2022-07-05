const path = require('path');

const mainController = {
    index: (req, res) => {
        res.render("home-shop");
    },
    register: (req, res) => {
        res.render("register");
    },
    login: (req, res) => {
        res.render("login");
    },
    carrito: (req, res) => {
        res.render("carrito");
    },
    detalle: (req, res) => {
        res.render("detalle-producto");
    }


}

module.exports = mainController;