const joi = require('joi')

const id = joi.string().uuid()
const name = joi.string().min(3).max(30)
const email = joi.string().email()
const jobTitle = joi.string().min(4).max(30)


const createUserSchema = joi.object({
    name: name.required(),
    email: email.required(),
    jobTitle: jobTitle.required()
})

const updateUserSchema = joi.object({
    name: name,
    email: email,
    jobtitle: jobTitle
})

const getUserSchema = joi.object({
    id: id.required()
})

module.exports = {
    getUserSchema,
    createUserSchema,
    updateUserSchema
}