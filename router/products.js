const express = require('express')
const productsService = require('../services/products')
const validatorHandler = require('../middlewares/validator.handler')
const {createProductSchema, updateProductSchema, getProductSchema } = require('../schemas/product')
const router = express()

const service = new productsService()

router.get('/', async (req,res,next)=>{
    try {
        let products = await service.find()
        res.json( {products} )
    } catch (error) {
        next(error)
    }
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

router.patch('/:id',
    validatorHandler(getProductSchema,'params'),
    validatorHandler(updateProductSchema, 'body'),
    async (req,res,next)=>{
        try {
            let {id} = req.params
            const body = req.body
            let product = await service.update(id, body)
            res.json(product)   
        } catch (error) {
            next(error)
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
