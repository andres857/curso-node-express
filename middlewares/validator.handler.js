const boom = require('@hapi/boom')

//middleware 
function validatorHandler(schema,property){
    return function(req,res,next){
        const data = req[property]
        const { error } = schema.validate(data)
        if(error){
            throw boom.badRequest(error.message)            
        }else{
            next() // continue to the next middleware
        }
    }
}

module.exports = validatorHandler