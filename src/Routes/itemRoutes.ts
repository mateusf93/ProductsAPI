import { ItemController } from "../Controllers/ItemController"
import express from "express"

const router = express.Router()

router
    .get('/orders/:orderID/items/', ItemController.listAllItems)
    .get("/orders/:orderID/items/:itemID", ItemController.findItemById)
    .put("/orders/:orderID/items/:itemID", ItemController.updateItem)
    .post("/orders/:orderID/items/", ItemController.createItem)
    .delete("/orders/:orderID/items/:itemID", ItemController.deleteItem)
    

export default router