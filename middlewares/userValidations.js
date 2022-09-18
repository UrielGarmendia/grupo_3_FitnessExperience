const express = require("express");
const path = require("path");
const { body } = require("express-validator");

const userValidations = [
body("firstName")
    .notEmpty()
    .withMessage("*Tienes que escribir un nombre"),
body("email")
    .notEmpty()
    .withMessage("*Escribe un correo electrónico")
    .bail()
    .isEmail()
    .withMessage("*Mail invalido"),
body("password")
    .notEmpty()
    .withMessage("*Escribe una contraseña")
    .isLength({min:8,max:16})
    .withMessage("Igrese una clave entre 8 y 16 caracteres"),
body("passwordConfirmed")
    .notEmpty()
    .withMessage("*Confirma tu contraseña"),
];

module.exports = userValidations;
