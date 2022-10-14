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
  login: (req, res) => {
    res.render("login");
  }, // envia formulario para loguearse

  loginProcess: async (req, res) => {
    await db.Usuarios.findOne({
      where: {
        email: req.body.email,
      },
    })

      .then((userToLogin) => {
        //console.log(userToLogin)
        if (
          userToLogin &&
          bcryptjs.compareSync(req.body.password, userToLogin.password)
        ) {
          console.log(req.body.password);
          console.log(userToLogin.password);
          res.render("login", {
            errors: "El usuario y/o la clave no coinciden",
          });
        } else {
          const user = { ...userToLogin, password: undefined };
          Reflect.deleteProperty(user, "password");
          req.session.userLogged = user;
          if (req.body.remember_me) {
            res.cookie("userEmail", userToLogin.email, {
              maxAge: 10000 * 600 * 600 * 240 * 70,
            });
          }
          res.redirect("/products");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, //procesa el form de login

  newLoginProcess: async (res, req) => {
    let usuarioActual = {
      email: req.body.name,
      password: req.body.password,
      remember_user: req.body.remember_user,
    };

    let userInDb = await db.Usuarios.findOne({
      where: {
        email: usuarioActual.email,
      },
    });
    try {
      if (!userInDb) {
        return res.send("Usuario no esta registrado");
      }

      const isValid = await bcryptjs.compare(
        userInDb.password,
        usuarioActual.password
      );

      if (!isValid) {
        return res.send("Contraseña incorrecta");
      }

      req.session.user = usuarioActual;
      if (usuarioActual.remember) {
        req.session.cookie.maxAge = 1000 * 60 * 60 * 24 * 7;
      }

      return res.redirect("/");
    } catch (error) {
      return Promise.reject(error);
    }
  },

  /*  async (req, res) => {
  await UserModel.findByField("email", req.body.email)

    .then ((userToLogin) => {

      if (!userToLogin || !bcryptjs.compareSync(
      req.body.password,userToLogin.password
    ))
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
  })
  .catch((error) => {

    res.render("login", {
        errors: {
          email: {
            msg: "El usuario que ingresó no está registrado",
          },
        },
      });
  });
}, */ //procesa del formulario de loggin

  createUser: (req, res) => {
    res.render("register");
  }, // envia form de registro

  newUser: async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.render("register", {
        errors: errors.mapped(),
        oldData: req.body,
      });
    }

    const [user, created] = await db.Usuarios.findOrCreate({
      where: { email: req.body.email },
      defaults: {
        name: req.body.firstName,
        email: req.body.email,
        password: bcryptjs.hashSync(req.body.password, 10),
      },
    });
    if (!created) {
      return res.render("register", {
        errors: { email: { msg: "Ya esta registrado este email" } },
      });
    } else {
      return res.render("login");
    }
  }, // procesa form de creacion de usuario

  logout: (req, res) => {
    res.clearCookie("userEmail");
    req.session.destroy();
    return res.redirect("/products");
  },

  edit: (req, res) => {
    const user = req.session.userLogged.dataValues;
    return res.render("usersEdit", { user: user });
  }, // envia formulario para editar usuario

  processEdit: async (res, req) => {
    let user = req.session.userLogged.dataValues;
    await db.Usuarios.update(
      {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      },
      {
        where: { id: user.id },
      }
    ).then(() => {
      res.redirect("/products");
    });
  }, // procesa form de edicion de formulario.
};

module.exports = usersControllers;
