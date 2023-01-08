import express from 'express'
import {AppDataSource} from './datasource'
import productsRoutes from './Routes/productRoutes'
import categoryRoutes from './Routes/categoryRoutes'
import userRouter from './Routes/userRoutes'
import { errorMiddleware } from './middlewares/error'

AppDataSource.initialize().then( ()=>{
    const app = express()
    
    app.use(express.json(),
            productsRoutes,
            categoryRoutes,
            userRouter,
            errorMiddleware
            )
    return app.listen(3000, ()=>{
        console.log('conexão realizada com sucesso')
    })
})

