import express from 'express'
import {AppDataSource} from './datasource'
import productsRoutes from './Routes/productRoutes'
import categoryRoutes from './Routes/categoryRoutes'
import userRouter from './Routes/userRoutes'
import { errorMiddleware } from './middlewares/error'
import costumerRoutes from './Routes/costumerRoutes'
import orderRoutes from './Routes/orderRouter'
import itemRoutes from './Routes/itemRoutes'

AppDataSource.initialize().then( ()=>{
    const app = express()
    
    app.use(express.json(),
            productsRoutes,
            categoryRoutes,
            userRouter,
            errorMiddleware,
            costumerRoutes,
            orderRoutes,
            itemRoutes
            )
    return app.listen(3000, ()=>{
        console.log('conexão realizada com sucesso')
    })
})

