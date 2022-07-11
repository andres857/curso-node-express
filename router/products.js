const express = require('express')
const productsService = require('../services/products')
const validatorHandler = require('../middlewares/validator.handler')
const {createProductSchema, updateProductSchema, getProductSchema } = require('../schemas/product')
const router = express()

const service = new productsService()

router.get('/', async (req,res)=>{
    let products = await service.find()
    res.json( products )
})

router.get('/:id', validatorHandler(getProductSchema, 'params'),
    async (req,res,next)=>{
        try {
            let {id} = req.params
            let product = await service.findOne(id)
            res.json(product)
        } catch (err) {
            next(err)
        }
})

router.post('/',validatorHandler(createProductSchema,'body'),
    async (req,res)=>{
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

router.delete('/:id',async (req,res,next)=>{
    try {
        let {id} = req.params
        let deleteProduct = await service.delete(id)
        res.json(deleteProduct)
    } catch (err) {
        next(err)
    }
})

module.exports = router
