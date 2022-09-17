const path = require("path");
const bcryptjs = require("bcryptjs");
const db = require("../database/models");
const UserModel = require("../models/usersModel");
const sequelize = db.sequelize;
const { op } = require("sequelize");
const { validationResult } = require("express-validator");

const User = require("../models/User");
const { format } = require("path");

const usersControllers = {
createUser: (req, res) => {
    res.render("register");
},
newUser: async (req, res) => {
    try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        res.render("register", {
        errors: errors.mapped(),
        oldData: req.body,
        });
    }

    let newUser = req.body

/*         name: req.body.firstName,
        email: req.body.email,
        password: req.body.password, */
    ;
      console.log("esto llega por el form --------> " + newUser); //console log para ver que llega en el form
    let user = await UserModel.create(newUser);
     if (user.error) {
        return res.render("register", {
        errors: user.error,
        body: req.body,
        });
    }
    res.redirect("/users/login");
    } catch (error) {
    res.render("register", {
        error: "error al crear el usuario",
    });
    }

    // user.id = uuidv4()

    // if (resultValidation.errors.length == 0 && user.password == user.passwordConfirmed) {
    //     usersList.push(user);

    //     fs.writeFileSync(usersListPath, JSON.stringify(usersList, null, 2))

    //     res.redirect('/users/login');
    // }
},
login: (req, res) => {
    res.render("login");
},

loginProcess: (req, res) => {
    let userToLogin = User.findByField("email", req.body.email);

    if (userToLogin) {
      let passwordOk = bcryptjs.compareSync(
        req.body.password,
        userToLogin.password
      );
      if (passwordOk) {
        delete userToLogin.password;
        delete userToLogin.passwordConfirmed;
        req.session.userLogged = userToLogin;
        // req.session.userIdLogged = userToLogin;
        if (req.body.remember_user) {
          res.cookie("userEmail", req.body.email, { maxAge: 1000 * 60 * 60 });
        }
        return res.redirect("/products");
      }
      return res.render("login", {
        errors: {
          email: {
            msg: "Las credenciales son invalidas",
          },
        },
      });
    }
    return res.render("login", {
      errors: {
        email: {
          msg: "El usuario que ingresó no está registrado",
        },
      },
    });
},

logout: (req, res) => {
    res.clearCookie("userEmail");
    req.session.destroy();
    return res.redirect("/products");
},
};
module.exports = usersControllers;
