import express from 'express'
import {AppDataSource} from './datasource'

import { errorMiddleware } from './middlewares/error'

import routes from './Routes/index'

AppDataSource.initialize().then( ()=>{
    const app = express()
    
    app.use(express.json(),
            errorMiddleware,
            routes
            )
    return app.listen(3000, ()=>{
        console.log('conexão realizada com sucesso')
    })
})

