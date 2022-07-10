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

    create(){
    }

    find(){
        return this.products
    }

    findOne(id){
        let product = this.products.find(product => product.id == id)
        return product ? product : 'not found'
    }

    update(){
    }

    delete(){
    }
}

module.exports = productsService