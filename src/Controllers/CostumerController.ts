import { Request, Response } from "express";
import { CostumerServices } from "../services/CostumerServices";


const costumerServices = new CostumerServices()

export class CostumerController{

    static async createCostumer(req:Request, res:Response){
        const newCostumer = req.body 
        try{ const costumerCreated = await costumerServices.insertData(newCostumer)
            return res.send(costumerCreated)
        }catch(error){
            return res.send('Não foi possível criar o cliente').status(500)
        }
    }

    static async listAllCostumers(req:Request, res:Response){
        try{
            const costumers = await costumerServices.listAll()
            return res.status(200).send(costumers)
        }catch(error){
            return res.status(500).send(error)
        }
    }
    static async listCostumerById(req:Request, res:Response){
        
        try{
            const {id} = req.params
            const costumerById = await costumerServices.listById(id)
            res.send(costumerById)
        }catch(error){
            res.status(500).send(error)
        }
    }
    static async updateCostumer(req:Request,res:Response){
        const id = req.params.id
        const newInfo= req.body
        try{
            const CostumerUpdate = await costumerServices.listById({id})
            await costumerServices.updateData(CostumerUpdate,newInfo)
            const CostumerUpdated = await costumerServices.listById({id})
            return res.status(200).json(CostumerUpdated)
        }catch(error){
            res.status(500).send(error)
        }
    }

    static async deleteCostumer(req:Request, res:Response){
        try{
            const costumerId = req.params.id
            await costumerServices.deleteData(costumerId)
            return res.send(200).send("Cliente deletado")
        }catch(error){
            res.status(500).send(error)
        }
     }
}