const faker = require('faker')
const boom = require('@hapi/boom')

class usersService{
    constructor(){
        this.users = []
        this.generate()
    }

    generate(){
        let limit = 5
        for (let i = 0; i < limit; i++) {
            this.users.push({
                id: faker.datatype.uuid(),
                name: faker.name.findName(),
                email:faker.internet.email(),
                jobtitle: faker.name.jobTitle(),
            })
        }
    }

    create(data){
        let newUser = {
            id: faker.datatype.uuid(),
            ...data
        }
        this.users.push(newUser)
        return newUser
    }

    find(){
        return this.users
    }

    findOne(id){
        let user = this.users.find(user => user.id == id)
        if(!user){
            throw boom.notFound('User not Found')
        }else{
            return user
        }
    }

    update(id,data){
        let index = this.users.findIndex(user => user.id == id)
        if(index === -1){
            throw boom.notFound('User not Found')
        }else{
            let user = this.users[index]
            this.users[index] = {
                ...user,
                ...data
            }
            return this.users[index]
        }

    }
    
    delete(id){

    }
}

module.exports = usersService;