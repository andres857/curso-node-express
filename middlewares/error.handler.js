const errorHandle = function (err,req,res,next){
    console.log('errorHandle');
    res.status(401).json({
        message : err.message,
        stack : err.stack
    })
}

const boomErrorHandle = function (err,req,res,next){
    console.log('boom handle');
    if(err.isBoom){
        const {output} = err
        res.status(output.statusCode).json({
            statusCode: output.statusCode,
            error: output.payload.error,
            message: output.payload.message
        })
    }else{
        next(err)
    }
}

module.exports = {
    errorHandle,
    boomErrorHandle
}