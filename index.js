const express = require('express')
const routerApi = require('./router')
const { errorHandle,boomErrorHandle} = require('./middlewares/error.handler')
const app = express()

const port = 4000

app.use(express.json())
routerApi(app)
//middlewares to handle errors
app.use(boomErrorHandle)
app.use(errorHandle)

app.listen(port,()=>{
    console.log(`el servicio esta activo en el puerto ${port}`);
})



  
