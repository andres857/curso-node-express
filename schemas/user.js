const joi = require('joi')

// const id = joi.string().uuid()
const id = joi.number()

const name = joi.string().min(3).max(30)
const email = joi.string().email()
const password = joi.string().min(8)
// const jobTitle = joi.string().min(4).max(30)


const createUserSchema = joi.object({
    name: name.required(),
    email: email.required(),
    password: password.required()
    // jobTitle: jobTitle.required()
})

const updateUserSchema = joi.object({
    name: name,
    email: email,
    password: password
    // jobtitle: jobTitle
})

const getUserSchema = joi.object({
    id: id.required()
})

module.exports = {
    getUserSchema,
    createUserSchema,
    updateUserSchema
}