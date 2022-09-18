const fs = require('fs');
const db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");

const User = {
	fileName: './data/users.json',

	getData: async function () {
		let allUsers = await db.Usuarios.findAll();
		return allUsers
	},

	findAll: function () {
		return this.getData();
	},

	findByField: function (field, text) {
		let allUsers = this.findAll();
		let userFound = allUsers.findOne({where : {field : text}});
		return userFound;
	}
}

module.exports = User;