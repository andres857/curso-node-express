const faker = require('faker')

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

    find(){
        return this.users
    }

    findOne(id){
        let user = this.users.find(user => user.id == id)
        return user ? user : ''
    }
    
    delete(id){

    }
}

module.exports = usersService;