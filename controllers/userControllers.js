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

loginProcess: async (req,res) => {
  await db.Usuarios.findOne({ where: { email: req.body.email } })
  .then((userToLogin) => {
    //console.log(userToLogin)
    if (!userToLogin || !bcryptjs.compareSync(req.body.password, userToLogin.password)) {
        res.render("login", {
            errors: "El usuario y/o la clave no coinciden",
        });
    } else {
        const user = { ...userToLogin,password: undefined };
        Reflect.deleteProperty(user, "password");
        req.session.userLogged = user;
        if (req.body.remember_me) {
            res.cookie("userEmail", userToLogin.email, { maxAge: 1000 * 60 * 60 * 24 * 7 });
        }
        res.redirect("/products");
    }
})
.catch((error)=>{
  console.error((error))
})
}, //procesa el form de login

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

newUser: async (req,res)=>{
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

/*  async (req, res) => {
  try {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
      return res.render("register", {
      errors: errors.mapped(),
      oldData: req.body,
      });
  }

  let newUser = req.body
  ;
    console.log("esto llega por el form --------> " + newUser); //console log para ver que llega en el form
  let user = await UserModel.create(newUser);
  if (user.error) {
      return res.render("register", {
      errors: user.error,
      body: req.body,
      });
  }
  return res.redirect("/users/login");
  } catch (error) {
  res.render("register", {
      error: "error al crear el usuario",
  })}; */


  // user.id = uuidv4()

  // if (resultValidation.errors.length == 0 && user.password == user.passwordConfirmed) {
  //     usersList.push(user);

  //     fs.writeFileSync(usersListPath, JSON.stringify(usersList, null, 2))

  //     res.redirect('/users/login');
  // }
}, //procesa form registro de usuario

logout: (req, res) => {
  res.clearCookie("userEmail");
  req.session.destroy();
  return res.redirect("/products");
},

edit : (req, res) => {
  const user = req.session.userLogged.dataValues;
  return res.render("usersEdit", { user: user});
}, // envia formulario para editar usuario

processEdit: async (res,req) =>{
  let user = req.session.userLogged.dataValues;
  await db.Usuarios.update({
    name: req.body.name,
    email: req.body.email,
    password:req.body.password,
  },{
    where : {id : user.id}
  })
  .then(()=>{
    res.redirect("/products")
  })
}

}

module.exports = usersControllers;
