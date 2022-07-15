const pool = require('../libs/postgress.pool')
const {models} = require('./../libs/sequialize')
const boom = require('@hapi/boom')
const faker = require('faker')


class usersService{
    constructor(){
        this.pool = pool
        this.pool.on('error', e => console.log(e))
    }

    async create(data){
        try {
            let userCreated = await models.User.create(data)
            return userCreated
        } catch (error) {
            console.error(error);
            throw boom.conflict('no se creo el nuevo usuario')
        }
    }

    async find(){
        try {
            let users = await models.User.findAll()
            return users
        } catch (error) {
            throw boom.badGateway('Error con la base de datos')
        }
    }

    async findOne(id){
        let userFound = await models.User.findByPk(id)
        if(!userFound){
            throw boom.notFound('User not found')
        }else{
            return userFound
        }
    }

    async update(id,changes){
        const user = await models.User.findByPk(id)
        const changesFields = await user.update(changes)
        return changesFields
    }

    async delete(id){
        const user = await models.User.findByPk(id)
        const userDeleted = await user.destroy()
        return userDeleted
    }
}

module.exports = usersService;