const { v4: uuidv4 } = require ("uuid")
const fs = require ("fs")
const path = require('path');
const bcryptjs = require('bcryptjs')

const { validationResult } = require('express-validator');

const usersListPath = path.join(__dirname,"../data/users.json");
const usersList = JSON.parse(fs.readFileSync(usersListPath,"utf-8"));

const usersControllers = {
    createUser: (req, res) => {
        res.render("register");
    },
    newUser: (req, res) => {

        const resultValidation = validationResult(req);

        if (resultValidation.errors.length > 0) {
            res.render('register', { 
                errors: resultValidation.mapped(),
                oldData: req.body
            });
        }

        let user = req.body;
        let image = req.file.filename;

        if (user.password == user.passwordConfirmed) {
            user.password = bcryptjs.hashSync(user.password, 10);
            if(bcryptjs.compareSync(user.passwordConfirmed, user.password)) {
                user.passwordConfirmed = user.password;
            }
        } else {
            throw new Error(`*Las credenciales son invalidas`);
        }

        user.id = uuidv4();
        user.image = image;

        if (resultValidation.errors.length == 0) {
            usersList.push(user);

            fs.writeFileSync(usersListPath, JSON.stringify(usersList, null, 2))

            res.redirect('/users/login');
        }
    },
    login: (req, res) => {
        res.render("login", { users: usersList });
    }
}

module.exports = usersControllers