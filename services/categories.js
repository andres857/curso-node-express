const faker = require('faker')

class categoriesService {
    constructor(){
        this.categories = []
        this.generator()
    }

    generator(){
        let limit = 5
        for (let i = 0; i < limit; i++) {
        this.categories.push({
            name: faker.commerce.department(),
            image: faker.image.imageUrl()
            })
        }
    }
    create(data){
        
    }
    find(){
        return this.categories
    }
    findOne(name){
        let category = this.categories.find(category => category.name == name)
        return category ? category : ''
    }
    delete(){

    }
}

module.exports = categoriesService