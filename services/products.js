const faker = require('faker')

class productsService{
    constructor(){
        this.products = []
        this.generate()
    }

    generate(){
        let limit = 1
        for (let i = 0; i < limit; i++) {
            this.products.push({
                id: faker.datatype.uuid(),
                name: faker.commerce.productName(),
                price: parseInt(faker.commerce.price(),10),
                image: faker.image.imageUrl()
            })
        }
    }

    create(data){
        let newProduct = {
            id: faker.datatype.uuid(),
            ...data
        }
        this.products.push(newProduct)
        return newProduct
    }

    find(){
        return this.products
    }

    findOne(id){
        let product = this.products.find(product => product.id == id)
        return product ? product : 'not found'
    }

    update(id, changes){
        let index = this.products.findIndex( product => product.id == id)
        if(index === -1){
            return ''
        }else{
            let product = this.products[index]
            this.products[index] = {
                ...product,
                ...changes
            }
            return this.products[index]
        }
    }

    delete(id){
        let index = this.products.findIndex( product => product.id == id)
        if(index === -1){
            return 'item not Found'
        }else{
            this.products.splice(index,1)
            return {id}
        }
    }
}

module.exports = productsService