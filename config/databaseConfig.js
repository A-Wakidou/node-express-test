const Sequelize = require('sequelize');

module.exports = new Sequelize('tests-gtpconseil', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306,
    logging: false,
    // dialectOptions: {
    //     // useUTC: false, //for reading from database
    //     dateStrings: true,
    //     typeCast: function (field, next) { // for reading from database
    //         if (field.type === 'DATETIME') {
    //             return field.string()
    //         }
    //         return next()
    //     }
    // },
    timezone: "+02:00"
})