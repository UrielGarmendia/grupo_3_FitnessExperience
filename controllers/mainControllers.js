const fs = require ("fs")
const path = require('path');

const productsListPath = path.join(__dirname,"../data/products.json");
const productsList = JSON.parse(fs.readFileSync(productsListPath,"utf-8"));



const mainController = {
    index: (req, res) => {
        res.render("home-shop", {productos: productsList});
    },
}

module.exports = mainController;