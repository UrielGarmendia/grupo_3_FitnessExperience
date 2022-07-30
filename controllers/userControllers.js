const { v4: uuidv4 } = require ("uuid")
const fs = require ("fs")
const path = require('path');
const { array } = require("../middlewares/productsMulter");

const usersListPath = path.join(__dirname,"../data/users.json");
const usersList = JSON.parse(fs.readFileSync(usersListPath,"utf-8"));

const usersControllers = {
    createUser: (req, res) => {
        res.render("register");
    },
    newUser: (req, res) => {


        let user = req.body;
        let image = req.file.filename;

        user.id = uuidv4();
        user.image = image;

        usersList.push(user);

        fs.writeFileSync(usersListPath, JSON.stringify(usersList, null, 2))

        res.redirect('/')
    },
    login: (req, res) => {
        res.render("login", { users: usersList });
    }
}

module.exports = usersControllers