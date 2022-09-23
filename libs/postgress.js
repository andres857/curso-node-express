const { Client } = require('pg')

async function connectdb(){
    const client = new Client({
        host:'localhost',
        port: 5432,
        user: 'admin',
        password: 'admin2020',
        database: 'my_store'
    })
    await client.connect()
    return client
}

module.exports = connectdb
