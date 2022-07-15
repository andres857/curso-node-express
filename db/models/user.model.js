const {Model, DataTypes, Sequelize} = require('sequelize')

const USER_table = 'users'

const userSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.STRING,
    },
    name:{
        allowNull:false,
        type: DataTypes.STRING
    },
    email:{
        allowNull: false,
        type: DataTypes.STRING,
        unique: true
    },
    password:{
        allowNull: false,
        type: DataTypes.STRING,
    },
    createdAt:{
        allowNull: false,
        type: DataTypes.DATE,
        field: 'create_at',
        defaultValue: Sequelize.NOW,
    }
}

class User extends Model {
    static associate(){
        //associate
    }
    static config(sequelize){
        return {
            sequelize,
            tableName: USER_table,
            modelName: 'User',
            timestamps: false
        }
    }
}

module.exports = {
    USER_table,
    userSchema,
    User
}