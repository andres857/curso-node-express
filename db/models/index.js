const { User, userSchema }= require('./user.model')
const { Product, productSchema }= require('./products.model')
const {Category, categorySchema} = require('./categories.model')


function setupModels(sequelize){
    User.init(userSchema, User.config(sequelize))
    Product.init(productSchema, Product.config(sequelize))
    Category.init(categorySchema, Category.config(sequelize))
}

module.exports = setupModels 