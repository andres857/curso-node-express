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
                throw boom.notFound('user not found')
            }else{
                return userFound
            }
    }

    async update(id,changes){
        try {
            const user = this.findOne(id)
            const changesFields = await user.update(changes)
            return changesFields
        } catch (error) {
            console.error(`[ Services - users: function update error: \n ${error}]`)
            throw boom.serverUnavailable('Error interno del servidor')
        }
    }

    async delete(id){
        try {
            const user = await this.findOne(id)
            const userDeleted = await user.destroy()
            console.log(userDeleted);
            return userDeleted            
        } catch (error) {
            console.error(error);
            throw boom.badData('Error eliminando user')
        }
    }
}

module.exports = usersService;