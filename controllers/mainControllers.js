const fs = require ("fs")
const path = require('path');
const db = require('../database/models');



const mainControllers = {
    homePage: (req, res) => {
        res.render('home-page');
    }
}

module.exports = mainControllers;