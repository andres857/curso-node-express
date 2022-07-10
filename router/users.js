const express = require('express')
const faker = require('faker')

const router = express()
let users = []

router.get('/', (req,res)=>{
    let {size} = req.query
    let limit = size || 5

    for (let i = 0; i < limit; i++) {
        users.push({
            id: faker.datatype.uuid(),
            name: faker.name.findName(),
            email:faker.internet.email(),
            jobtitle: faker.name.jobTitle(),
        })
    }
    res.json({
        users
    })
})

router.get('/:id',(req,res)=>{
    let {id} = req.params
    let user = users.find(user => user.id == id)
    console.log(user);
    res.json({
        user
    })
})

module.exports = router
