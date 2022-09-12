const fs = require ("fs")
const path = require('path');
const db = require('../database/models');
const productsListPath = path.join(__dirname,"../structure.sql");
const productsList = fs.readFileSync(productsListPath);



const mainControllers = {
    homePage: (req, res) => {
        res.render('home-page');
    }
}

module.exports = mainControllers;