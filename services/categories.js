const faker = require('faker')
const boom =require('@hapi/boom')
const {models} = require('../libs/sequialize')
const pool = require('../libs/postgress.pool')


class categoriesService {
    constructor(){
        this.categories = []
        this.generator()
        this.pool = pool
        this.pool.on('error', e => console.log(e))
    }

    generator(){
        let limit = 5
        for (let i = 0; i < limit; i++) {
        this.categories.push({
            id: faker.datatype.uuid(),
            name: faker.commerce.department(),
            image: faker.image.imageUrl()
            })
        }
    }
    create(data){
        let newCategory = {
            id: faker.datatype.uuid(),
            ...data
        }
        this.categories.push(newCategory)
        return newCategory
    }
    async find(){
        try {
            let categories = await models.Category.findAll()
            return categories
        } catch (error) {
            console.error(`[ Services - categories ${error}]`);
            throw boom.badGateway(`Error en la consulta con la base de datos`)
        }

    }
    findOne(id){
        let category = this.categories.find(category => category.id == id)
        if(!category){
            throw boom.notFound('category not found')
        }else{
            return category
        }
    }
    update(id,changes){
        let index = this.categories.findIndex(category => category.id == id)
        if(index === -1){
            throw boom.notFound('Categoria no Encontrada')
        }else{
            let category = this.categories[index]
            this.categories[index] = {
                ...category,
                ...changes
            }
            return this.categories[index]
        }
    }
    delete(){

    }
}

module.exports = categoriesService