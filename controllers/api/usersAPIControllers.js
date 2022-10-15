const path = require("path");
const bcryptjs = require("bcryptjs");
const db = require("../../database/models");
const UserModel = require("../../models/usersModel");
const sequelize = db.sequelize;
const { op } = require("sequelize");
const { validationResult } = require("express-validator");

const User = require("../../models/User");
const { format } = require("path");


const usersAPIcontrollers = {

};

module.exports = usersAPIcontrollers;