
const sequelize = require("sequelize")


const connection = new sequelize('employeesystem','root','root',{
        host: 'localhost',
        dialect: 'mysql',
        timezone: '-03:00'

});


module.exports = connection ;