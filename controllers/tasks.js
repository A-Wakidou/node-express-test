const Tasks = require('../models/tasks')

exports.getAllTasks = (req, res) => {
    if (req.query.id) {
        Tasks.findAll({
            include: ['usersIdFK'],
            where: { users_id: req.query.id }
        })
            .then(response => {
                console.log(response)
                res.status(200).json(response)
            })
            .catch(error => {
                console.log(error)
                res.status(500).json(error)
            })
    }
    else {
        Tasks.findAll({
            include: ['usersIdFK'],
        })
            .then(response => {
                res.status(200).json(response)
            })
            .catch(error => {
                console.log(error)
                res.status(500).json(error)
            })
    }
}

exports.createTask = (req, res) => {
    console.log(req.body)
    const newTasks = new Tasks({
        label: req.body.label,
        startTime: req.body.startTime,
        endTime: req.body.endTime
    })
    newTasks.save()
        .then(() => {
            res.status(200).json({ message: 'Tâche créée' })
        })
        .catch((err) => {
            console.log(err)
            res.status(500).json(err)
        })
}

exports.updateTask = (req, res) => {
    Tasks.update(
        { users_id: req.body.userId },
        { where: { id: req.body.taskId } }
    )
        .then(() => {
            res.status(200).json({ message: 'Tâche modifiée' })
        })
        .catch((err) => {
            console.log(err)
            res.status(500).json(err)
        })
}

exports.deleteTask = (req, res) => {
    Tasks.destroy({
        where: { id: req.body.id }
    })
        .then(() => {
            res.status(200).json({ id: req.body.id })
        })
        .catch((error) => {
            res.status(500).json(error)
        })
}