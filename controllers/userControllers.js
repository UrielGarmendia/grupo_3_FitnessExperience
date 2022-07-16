const { v4: uuidv4 } = require ("uuid")
const fs = require ("fs")
const path = require('path');

const productsListPath = path.join(__dirname,"../data/users.json");
const productsList = JSON.parse(fs.readFileSync(productsListPath,"utf-8"));

const usersControllers = {
    register: (req, res) => {
        res.render("register");
    },
    login: (req, res) => {
        res.render("login");
    }
}

module.exports = usersControllers