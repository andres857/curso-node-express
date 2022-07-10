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
    let {size} = req.query

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
