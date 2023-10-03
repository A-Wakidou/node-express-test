const Sequelize = require('sequelize')
const db = require('../config/databaseConfig')
const UsersModel = require('./users')

const tasks = db.define('tasks',
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        users_id: {
            type: Sequelize.INTEGER,
            allowNull: true
        },
        label: {
            type: Sequelize.STRING,
            allowNull: false
        },
        startTime: {
            type: Sequelize.DATE,
            allowNull: false
        },
        endTime: {
            type: Sequelize.DATE,
            allowNull: false,
            unique: true
        },
    }, {
    freezeTableName: true,
    timestamps: true,
    underscored: true
})

tasks.belongsTo(UsersModel, {
    as: 'usersIdFK',
    foreignKey: 'users_id'
})

module.exports = tasks