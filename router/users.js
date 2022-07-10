const express = require('express')
const usersService = require('../services/users')

const router = express()
const service = new usersService()

router.get('/', (req,res)=>{
    let users = service.find()
    res.json({users})
})

router.get('/:id',(req,res)=>{
    let {id} = req.params
    let user = service.findOne(id)
    if(user){ 
        res.status(200).json({user})
    }else{
        res.status(404).json({
            message : 'user not found'
        })
    }
})

module.exports = router
