import { CostumerController } from "../Controllers/CostumerController"
import express from "express"

const router = express.Router()

router
    .get('/costumers', CostumerController.listAllCostumers)
    .get("/costumers/:id", CostumerController.listCostumerById)
    .put("/costumers/:id", CostumerController.updateCostumer)
    .post("/costumers", CostumerController.createCostumer)
    .delete("/costumers/:id", CostumerController.deleteCostumer)
    

export default router