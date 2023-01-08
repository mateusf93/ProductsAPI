import { CategoryController } from "../Controllers/CategoryController";
import express from "express"

const router = express.Router()
router
    .get('/categorys', CategoryController.listCategory)
    .get("/categorys/:id", CategoryController.listCategoryById)
    .put("/categorys/:id", CategoryController.updateCategory)
    .post("/categorys", CategoryController.createCategory)
    .delete("/categorys/:id", CategoryController.deleteCategory)
    

export default router;