const express = require('express')
const router = express.Router()
const tasksController = require('../controllers/tasks')
const auth = require('../middleware/auth')

router.get('/', auth, tasksController.getAllTasks)
router.post('/', auth, tasksController.createTask)
router.put('/', auth, tasksController.updateTask)
router.delete('/', auth, tasksController.deleteTask)

module.exports = router