const express = require('express')
const faker = require('faker')

const router = express()

const categories = []

router.get('/', (req,res)=>{
    let {size} = req.query
    let limit = size || 5
    for (let i = 0; i < limit; i++) {
        categories.push({
            name: faker.commerce.department(),
            image: faker.image.imageUrl()
        })
    }
    res.json({
        categories
    })
})

router.get('/:nameCategory',(req,res)=>{
    let {nameCategory} = req.params
    let category = categories.find(categorie => categorie.name == nameCategory)
    res.json({
        category
    })
})

module.exports = router