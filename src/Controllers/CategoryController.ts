import { Request, Response } from "express"
import { CategoryServices } from "../services/CategoryServices"

const categoryServices = new CategoryServices()

export class CategoryController{
     static async createCategory(req:Request, res:Response){
        const newCategory = req.body
        try{
            const createdCategory = await categoryServices.insertData(newCategory)
            return res.status(201).json(createdCategory)
        }catch(error){
            console.log(error)
            return res.status(500)
        }
    }
    static async listCategory(req:Request, res:Response){
        try{
            const allCategory = await categoryServices.listAll()
            return res.status(200).send(allCategory)
            }catch(error){
            res.status(500).send(error)
        }
    }
    static async listCategoryById(req:Request, res:Response){
        const {id} = req.params
        try{const CategoryById = await categoryServices.listById({id})
        return res.status(200).send(CategoryById)
        }catch(error){
            res.status(404).send(error)
        }
    }
    static async updateCategory(req:Request, res:Response){
        const id = req.params.id
        const newInfo = req.body
        try{const CategoryUpdate = await categoryServices.listById({id})
            await categoryServices.updateData(CategoryUpdate, newInfo)
            const UpdatedCategory = await categoryServices.listById({id})
            return res.json(UpdatedCategory).status(200)
        }catch(error){
            res.status(500).send(error)
        }
    }
    static async deleteCategory(req:Request, res:Response){
        const categoryId = req.params.id
        try{
            await categoryServices.deleteData(categoryId)
            return res.status(200).send("Categoria deletado com sucesso")
        }catch(error){
            res.status(500).send(error)
        }
    }


}