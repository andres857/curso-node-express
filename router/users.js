const express = require('express')
const usersService = require('../services/users')
const validatorHandler = require('../middlewares/validator.handler')
const {getUserSchema,createUserSchema,updateUserSchema} = require('../schemas/user.js')

const router = express()
const service = new usersService()

router.get('/', async (req,res,next)=>{
    try {
        let users = await service.find()
        res.json(users)
    } catch (error) {
        next(error)
    }
})

router.get('/:id',validatorHandler(getUserSchema,'params'),
    async (req,res,next)=>{
        try {
            let {id} = req.params
            let user = await service.findOne(id)
            res.status(200).json(user)   
        } catch (error) {
            next(error)
        }
})

router.post('/', validatorHandler(createUserSchema,'body'),
    async (req,res,next)=>{
        try {
            let body = req.body
            let newUser = await service.create(body)
            res.status(201).json({newUser}) 
        } catch (error) {
            next(error)
        }
})

router.patch('/:id',validatorHandler(getUserSchema,'params'),
    validatorHandler(updateUserSchema, 'body'),
    async (req,res,next)=>{
        try {
            let {id} = req.params
            let body = req.body
            let userUpdated = await service.update(id, body)
            res.status(201).json(userUpdated)
        } catch (error) {
            next(error)
        }
})

router.delete('/:id', validatorHandler(getUserSchema,'params'), 
    async (req,res,next)=>{
        try {
            let {id} = req.params
            let userDeleted = await service.delete(id)
            res.status(200).json({userDeleted})
        } catch (error) {
            next(error)
        }
})

module.exports = router
