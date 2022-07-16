const { v4: uuidv4 } = require ("uuid")
const fs = require ("fs")
const path = require('path');

const usersListPath = path.join(__dirname,"../data/users.json");
const usersList = JSON.parse(fs.readFileSync(usersListPath,"utf-8"));

const usersControllers = {
    register: (req, res) => {
        res.render("register");
    },
    login: (req, res) => {
        res.render("login", { users: usersList });
    }
}

module.exports = usersControllers