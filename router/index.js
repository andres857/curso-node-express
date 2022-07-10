const productRouter = require('./products')
const usersRouter = require('./users')
const categoryRouter = require('./categories')

const route = '/api/v1'
function routerApi(app){
    app.use(`${route}/users`, usersRouter)
    app.use(`${route}/products`, productRouter)
    app.use(`${route}/categories`, categoryRouter)
}

module.exports = routerApi;