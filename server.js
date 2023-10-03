const express = require('express')
const helmet = require("helmet")
const bodyParser = require('body-parser')
const http = require('http')

const app = express()
const server = http.createServer(app)
const PORT = 3000

const tasksRoutes = require('./routes/tasks')
const usersRoutes = require('./routes/users')

app.use(helmet())
app.use(bodyParser.json())
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,Authorization')
    res.setHeader('Access-Control-Allow-Credentials', true)
    next();
})

app.use('/tasks', tasksRoutes)
app.use('/users', usersRoutes)

server.listen(PORT, () => console.log(`Server running on port : ${PORT}`))

