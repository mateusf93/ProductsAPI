import { ProductController } from "../Controllers/ProductController"
import express from "express"

const router = express.Router()

router
    .get('/products', ProductController.listProducts)
    .get("/products/:id", ProductController.listProductsById)
    .get("/products/categorys/:id", ProductController.productCategory)
    .put("/products/:id", ProductController.updateProduct)
    .post("/products", ProductController.createProduct)
    .delete("/products/:id", ProductController.deleteProduct)
    

export default router