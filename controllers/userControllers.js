const { v4: uuidv4 } = require ("uuid")
const fs = require ("fs")
const path = require('path');
const bcryptjs = require('bcryptjs')

const { validationResult } = require('express-validator');

const User = require('../models/User');
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

        if (user.password == user.passwordConfirmed) {
            user.password = bcryptjs.hashSync(user.password, 10);
            if(bcryptjs.compareSync(user.passwordConfirmed, user.password)) {
                user.passwordConfirmed = user.password;
            }
        } else {
            res.render('register', { 
                errors: {
                    passwordConfirmed: {
                        msg: 'La contraseña no coincide'
                    }
                },
                oldData: req.body
            });
        }

        let userInDB = User.findByField('email', req.body.email);

		if (userInDB) {
			return res.render('register', {
				errors: {
					email: {
						msg: 'Este email ya está registrado'
					}
				},
				oldData: req.body
			});
		}

        user.id = uuidv4()

        if (resultValidation.errors.length == 0 && user.password == user.passwordConfirmed) {
            usersList.push(user);

            fs.writeFileSync(usersListPath, JSON.stringify(usersList, null, 2))

            res.redirect('/users/login');
        }
    },
    login: (req, res) => {
        res.render("login", { users: usersList });
    },
    loginProcess: (req, res) => {
        let userToLogin = User.findByField('email', req.body.email);
        
        if(userToLogin) {
            let passwordOk = bcryptjs.compareSync(req.body.password, userToLogin.password)
            if (passwordOk) {
                return res.redirect('/products');
            }
            return res.render('login', {
                errors: {
                    email: {
                        msg: 'Las credenciales son invalidas'
                    }
                }
            })
        }
        return res.render('login', {
            errors: {
                email: {
                    msg: 'El usuario que ingresó no está registrado'
                }
            }
        })
    }
}

module.exports = usersControllers