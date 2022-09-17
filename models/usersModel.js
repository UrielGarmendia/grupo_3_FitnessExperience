const fs = require("fs");
const path = require("path");
const uuid = require("uuid");
const bcrypt = require("bcryptjs");
const db = require("../database/models");

const User = {
  userListPath: path.resolve(__dirname, "../data/users.json"),
  getAll: function () {
    const userList = db.Usuarios.findAll({
      where: {
        deletedAt: null,
      },
    });

    return userList;
  }, //trae todos los usuarios
  findAll: function () {
    const userList = this.getAll();
    return userList;
  }, // muestra todos los usuarios
  find: function (pk) {
    // const userList = this.getAll();
    // const user = userList.find(user => user.id == id);
    const user = db.Usuarios.findByPk(pk);
    return user;
  }, //busca usuario por ID
  findByField: async function (field, value) {
    let user = null;
    try {
      user = await db.Usuarios.findOne({
        where: {
          [field]: value,
        },
      });
    } catch (error) {
      console.log(error);
    }

    return user ? user.toJSON() : null;
  }, // busca por alguna propiedadd especifica
  findAllByField: function (field, value) {
    // const userList = this.getAll();
    // const users = userList.filter(user => user[field] == value);
    const users = User.findAll({
      where: {
        [field]: value,
        deletedAt: null,
      },
    });

    return users;
  }, // lo usamos para validar usuario,que se encuentre en la db
  validateUser: async function (user) {
    try {
      const currentUser = await this.findByField("email", user.email);

      if (!currentUser) {
        return false;
      }

      const isValid = await bcrypt.compare(user.password, currentUser.password);

      if (!isValid) {
        return false;
      }

      return currentUser;
    } catch (error) {
      return Promise.reject(error);
    }
  }, //validacion de usuario
  create: async (user) => {
    try {
      let userExists = await User.findByField("email", user.email);

      if (userExists) {
        throw new Error("El usuario ya existe");
      }

      let newUser = await db.Usuarios.create({
        name: user.name,
        email: user.email,
        password: bcrypt.hashSync(user.password, 10),
      });

      return newUser;
    } catch (error) {
      return { error, message: "error al crear el usuario" };
    }
  }, // Crea el usuario en la db.
  update: function (id, data) {
    try {
      let currentUser = this.find(id);
      if (currentUser) {
        let userList = this.getAll();
        let userIndex = userList.findIndex((user) => user.id == id);
        userList[userIndex] = data;
        fs.writeFileSync(this.userListPath, JSON.stringify(userList, null, 2));
      } else {
        throw new Error("User not found");
      }
      return data;
    } catch (error) {
      return null;
    }
  },
  delete: function (id) {
    try {
      let currentUser = this.find(id);
      if (currentUser) {
        let userList = this.getAll();
        let userIndex = userList.findIndex((user) => user.id == id);
        userList.splice(userIndex, 1);
        fs.writeFileSync(this.userListPath, JSON.stringify(userList, null, 2));
      } else {
        throw new Error("User not found");
      }
      return true;
    } catch (error) {
      return false;
    }
  },
};

module.exports = User;
