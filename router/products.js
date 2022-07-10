const express = require('express')
const productsService = require('../services/products')
const router = express()

const service = new productsService()

router.get('/', (req,res)=>{
    let products = service.find()
    res.json({ products })
})

router.get('/:id',(req,res)=>{
    let {id} = req.params
    let product = service.findOne(id)
    if (product != 'not found'){
        res.json({product})
    }else{
        res.status(404).json({ 
            message: product
        })
    }
    
})

router.post('/',(req,res)=>{
    let body = req.body
    let newProduct = service.create(body)

    res.status(201).json({
        newProduct
    })
})

router.patch('/:idProduct',(req,res)=>{
    let {idProduct} = req.params
    const body = req.body
    let product = service.update(idProduct, body)
    res.json(product)
})

router.delete('/:id',(req,res)=>{
    let {id} = req.params
    let deleteProduct = service.delete(id)
    res.json(deleteProduct)
})

module.exports = router
