const express = require('express')
const routerApi = require('./router')
const app = express()

const port = 4000
app.use(express.json())
routerApi(app)

app.listen(port,()=>{
    console.log(`el servicio esta activo en el puerto ${port}`);
})