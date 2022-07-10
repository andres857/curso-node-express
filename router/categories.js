const e = require('express')
const express = require('express')
const categoriesService = require('../services/categories')
const router = express()

const service = new categoriesService()

router.get('/', (req,res)=>{
    let category = service.find()
    res.json({
        category
    })
})

router.get('/:nameCategory',(req,res)=>{
    let {nameCategory} = req.params
    let category = service.findOne(nameCategory)
    if (category){
        res.json({category})
    }else{
        res.status(404).json({
            message: 'category not found'
        })
    }
})

module.exports = router