const { Pool } = require('pg')
const config = require('../config/config')

// const pool = new Pool({
//     host:'localhost',
//     port: 5432,
//     user: 'admin',
//     password: 'admin2020',
//     database: 'my_store'
// })

// const pool = new Pool({
//     host: config.dbHost,
//     port: config.dbPort,
//     user: config.dbUser,
//     password: config.dbPassword,
//     database: config.dbName
// })
const USER = encodeURIComponent(config.dbUser)
const PASSWORD = encodeURIComponent(config.dbPassword)
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

const pool = new Pool({ connectionString: URI})

module.exports = pool
