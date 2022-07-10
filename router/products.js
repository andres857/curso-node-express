const express = require('express')
const faker = require('faker')

const router = express()

const products = []

router.get('/', (req,res)=>{
    if (products.length == 0){
        res.json({
            message: 'No hay productos creados'
        })
    }else{
        res.json({
            products
        })
    }
})

router.get('/:id',(req,res)=>{
    let {id} = req.params
    if (products.length != 0){
        let product = products.find(product => product.id == id)
        if(product){
            res.json({
                product
            })
        }else{
            res.status(404).json({
                message: 'No existe el producto'
            })
        }
    }else{
        res.status(404).json({
            message: 'No hay productos agregados'
        })
    } 
})

router.post('/',(req,res)=>{
    let {size} = req.query
    let limit = size || 5
    for (let i = 0; i < limit; i++) {
        products.push({
            id: faker.datatype.uuid(),
            name: faker.commerce.productName(),
            price: parseInt(faker.commerce.price(),10),
            image: faker.image.imageUrl()
        })
    }
    res.status(201).json({
        products
    })
})

router.patch('/:idProduct',(req,res)=>{
    let {idProduct} = req.params
    const body = req.body
    console.log(body);
    
    res.json({
        message: 'created',
        body,
        idProduct
    })
})

module.exports = router
