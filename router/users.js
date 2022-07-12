const express = require('express')
const usersService = require('../services/users')
const validatorHandler = require('../middlewares/validator.handler')
const {getUserSchema,createUserSchema,updateUserSchema} = require('../schemas/user.js')

const router = express()
const service = new usersService()

router.get('/', (req,res)=>{
    let users = service.find()
    res.json({users})
})

router.get('/:id',validatorHandler(getUserSchema,'params'),
    (req,res,next)=>{
        try {
            let {id} = req.params
            let user = service.findOne(id)
            res.status(200).json(user)   
        } catch (error) {
            next(error)
        }
})

router.post('/', validatorHandler(createUserSchema,'body'),
    (req,res,next)=>{
        try {
            let body = req.body
            let newUser = service.create(body)
            res.status(201).json(newUser) 
        } catch (error) {
            next(error)
        }
})

router.patch('/:id',validatorHandler(getUserSchema,'params'),
    validatorHandler(updateUserSchema, 'body'),
    (req,res,next)=>{
        try {
            let {id} = req.params
            let body = req.body
            let userUpdated = service.update(id, body)
            res.status(201).json(userUpdated)
        } catch (error) {
            next(error)
        }
})

module.exports = router
