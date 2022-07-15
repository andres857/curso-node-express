const { Model, DataTypes } = require('sequelize')

const PRODUCTS_table = 'products'

const productSchema ={
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    name: {
        allowNull: false,
        type: DataTypes.STRING
    },
    price: {
        allowNull: false,
        type: DataTypes.INTEGER
    }
}

class Product extends Model {
    static associate(){

    }
    static config(sequelize){
        return {
            sequelize,
            tableName: PRODUCTS_table,
            modelName: 'Product',
            timestamps: false
        }
    }
}

module.exports = {
    PRODUCTS_table,
    productSchema,
    Product
}