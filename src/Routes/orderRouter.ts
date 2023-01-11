import { OrderController } from "../Controllers/OrderController"
import express from "express"

const router = express.Router()

router
    .get('/orders', OrderController.listAllOrders)
    .get("/orders/:id", OrderController.listOrderById)
    .put("/orders/:id", OrderController.updateOrder)
    .post("/orders", OrderController.createOrder)
    .delete("/orders/:id", OrderController.deleteOrder)
    

export default router