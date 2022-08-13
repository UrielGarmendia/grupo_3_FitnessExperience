const express = require('express');
const path = require('path');
const { body } = require('express-validator');

const productValidations = [
    body('name').notEmpty().withMessage('*Tienes que escribir un nombre al producto'),
    body('price').notEmpty().withMessage('*Escribe un precio'),
    body('description').notEmpty().withMessage('*Describe el producto a subir'),
    body('image').custom((value, { req }) => {
		let file = req.file;
		let acceptedExtensions = ['.jpg', '.png', '.webp'];
		
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

module.exports = productValidations;