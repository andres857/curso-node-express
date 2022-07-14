const pool = require('../libs/postgress.pool')
const boom = require('@hapi/boom')

class usersService{
    constructor(){
        this.pool = pool
        this.pool.on('errot', e => console.log(e))
    }

    async create(data){
        return data
    }

    async find(){
        try {
            let query = 'SELECT * FROM tasks'
            let users = await this.pool.query(query)
            return users.rows
        } catch (error) {
            console.error(error);
            throw boom.badGateway('Error con la base de datos')
        }
    }

    async findOne(id){
        return {id}
    }

    async update(id,changes){
    }
}

module.exports = usersService;