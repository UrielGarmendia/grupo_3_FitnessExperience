const express = require('express');
const path = require('path');
const { body } = require('express-validator');

const userValidations = [
    body('firstName').notEmpty().withMessage('*Tienes que escribir un nombre'),
    body('email').notEmpty().withMessage('*Escribe un correo electrónico').bail()
    .isEmail().withMessage('*Mail invalido'),
    body('password').notEmpty().withMessage('*Escribe una contraseña'),
    body('passwordConfirmed').notEmpty().withMessage('*Confirma tu escribir contraseña'),
    body('image').custom((value, { req }) => {
		let file = req.file;
		let acceptedExtensions = ['.jpg', '.png'];
		
		if (!file) {
			throw new Error('*Tienes que subir una imagen');
		} else {
			let fileExtension = path.extname(file.originalname);
			if (!acceptedExtensions.includes(fileExtension)) {
				throw new Error(`*Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`);
			}
		}
		return true;
	})
]

module.exports = userValidations;