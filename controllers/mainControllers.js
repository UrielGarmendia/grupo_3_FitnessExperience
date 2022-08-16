const fs = require ("fs")
const path = require('path');

const productsListPath = path.join(__dirname,"../data/products.json");
const productsList = JSON.parse(fs.readFileSync(productsListPath,"utf-8"));



const mainControllers = {
    homePage: (req, res) => {
        res.render('home-page');
    }
}

module.exports = mainControllers;