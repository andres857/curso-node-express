const express = require('express')
const categoriesService = require('../services/categories')
const {createCategorySchema,updateCategorySchema,getCategorySchema} = require('../schemas/category')
const validatorHandler = require('../middlewares/validator.handler')
const router = express()

const service = new categoriesService()

router.get('/', (req,res)=>{
    let category = service.find()
    res.json({
        category
    })
})

router.get('/:id',validatorHandler(getCategorySchema, 'params'),
    (req,res,next)=>{
        try {
            let {id} = req.params
            let category = service.findOne(id)
            res.status(200).json(category)
        } catch (error) {
            next(error)
    }
})

router.post('/',validatorHandler(createCategorySchema,'body'),
    (req,res,next)=>{
        try {
            let body = req.body
            let newCategory = service.create(body)
            res.status(201).json(newCategory)
        } catch (error) {
            next(error)
        }
})

router.patch('/:id',validatorHandler(getCategorySchema, 'params'),
    validatorHandler(updateCategorySchema, 'body'),
    (req,res,next)=>{
        try {
            let {id} = req.params
            let body = req.body
            let categoryUpdated= service.update(id,body)
            res.status(201).json(categoryUpdated)
        } catch (error) {
            next(error)
        }
})

module.exports = router