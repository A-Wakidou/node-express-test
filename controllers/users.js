const Users = require('../models/users')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

exports.signIn = (req, res) => {
    Users.findOne({ where: { email: req.body.email, password: req.body.password } })
        .then(response => {
            if (!response) {
                console.log('user not found')
                return res.status(400).send('User not found')
            }
            else {
                console.log('logged in!')
                res.status(200).json({
                    userId: response.dataValues.id,
                    userFirstname: response.dataValues.firstname,
                    userLastname: response.dataValues.lastname,
                    userEmail: response.dataValues.email,
                    userToken: jwt.sign(
                        { userId: response.dataValues.id },
                        'JWT-SECRET-STRING',
                        { expiresIn: '3h' }
                    )
                })
            }
        })
        .catch(error => {
            console.log(error)
        })
}

exports.getAllUsers = (req, res) => {
    Users.findAll({
        attributes: ['id', 'firstname', 'lastname']
    })
        .then((response) => {
            res.status(200).json(response)
        })
        .catch((err) => {
            console.log(err)
            res.status(500).json(err)
        })
}