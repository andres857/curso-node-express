const express = require('express')
const productsService = require('../services/products')
const router = express()

const service = new productsService()

router.get('/', async (req,res)=>{
    let products = await service.find()
    res.json( products )
})

router.get('/:id',async (req,res)=>{
    let {id} = req.params
    let product = await service.findOne(id)
    if (product != 'not found'){
        res.json({product})
    }else{
        res.status(404).json({ 
            message: product
        })
    }
})

router.post('/',async (req,res)=>{
    let body = req.body
    let newProduct = await service.create(body)

    res.status(201).json({
        newProduct
    })
})

router.patch('/:idProduct',async (req,res)=>{
    try {
        let {idProduct} = req.params
        const body = req.body
        let product = await service.update(idProduct, body)
        res.json(product)   
    } catch (error) {
        res.status(404).json({
            message: error.message
        })
    }
})

router.delete('/:id',async (req,res)=>{
    let {id} = req.params
    let deleteProduct = await service.delete(id)
    res.json(deleteProduct)
})

module.exports = router
