const {Sequelize} = require('sequelize')
const config = require('../config/config')
const setupModels = require('./../db/models/index')

const USER = encodeURIComponent(config.dbUser)
const PASSWORD = encodeURIComponent(config.dbPassword)
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

// declara la conexion a la base de datos
const sequelize = new Sequelize(URI,{
    dialect: 'postgress',
    logging: false //ORM nos permite usar como objetos las conexiones a la base datos, esto muestra la consulta en sql
})

setupModels(sequelize)

sequelize.sync()

module.exports = sequelize