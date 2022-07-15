const { Model, DataTypes } = require('sequelize')

const CATEGORIES_table = 'products'

const categorySchema = {
    id : {
        allowNull: false,
        autoIncremental: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    name : {
        allowNull: false,
        type: DataTypes.STRING
    }
}

class Category extends Model {
    static associate(){

    }
    static config(sequelize){
        return{
            sequelize,
            tableName: CATEGORIES_table,
            modelName: 'Category',
            timestamps: false
        }
    }
}

module.exports = {
    CATEGORIES_table,
    categorySchema,
    Category
}