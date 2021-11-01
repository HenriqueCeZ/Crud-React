const sequelize = require('sequelize')
const connection = require('../database/database')

const Employees = connection.define('employees',{
    name:{
        type: sequelize.STRING,
        allowNull:false
    },age:{
        type:sequelize.INTEGER,
        allowNull: false
    },
    country:{
        type: sequelize.STRING,
        allowNull:false
    },
    position:{
        type:sequelize.STRING,
        allowNull: false
        
    },wage:{
        type:sequelize.INTEGER,
        allowNull: false
    }
})


module.exports = Employees;