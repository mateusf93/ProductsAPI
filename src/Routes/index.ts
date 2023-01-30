import productsRoutes from './productRoutes'
import categoryRoutes from './categoryRoutes'
import userRouter from './userRoutes'
import costumerRoutes from './costumerRoutes'
import orderRoutes from './orderRouter'
import itemRoutes from './itemRoutes'
import { Router } from 'express'

const router = Router();

router.use(productsRoutes,
            productsRoutes,
            categoryRoutes,
            userRouter,
            costumerRoutes,
            orderRoutes,
            itemRoutes)

export default router;