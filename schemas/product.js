const joi = require('joi')

const id = joi.string().uuid()
const name = joi.string().min(3).max(15)
const price = joi.number().integer().min(10)
const url = joi.string().uri()

const createProductSchema = joi.object({
    name: name.required(),
    price: price.required(),
    image: url.required() 
})

const updateProductSchema = joi.object({
    name: name,
    price: price,
    image: url
})

const getProductSchema = joi.object({
    id: id.required(),
})

module.exports = {
    createProductSchema,
    updateProductSchema,
    getProductSchema
}
