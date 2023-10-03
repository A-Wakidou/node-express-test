const express = require('express')
const router = express.Router()
const usersController = require('../controllers/users')
const auth = require('../middleware/auth')

router.post('/signin', usersController.signIn)
router.get('/', auth, usersController.getAllUsers)

module.exports = router