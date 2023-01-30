import { ItemServices } from "../services/ItemServices";
import { Request, Response } from "express";

const itemServices = new ItemServices()
export class ItemController{

    static async createItem(req:Request, res:Response){
        const { orderID } = req.params
        const newItem = {...req.body, order: Number(orderID)}
        try{
            
            const ItemCreated = await itemServices.insertData(newItem)
            return res.send(ItemCreated).status(200)
        }
    catch(error){
        return res.status(500).send(error)
        }
    }
    static async updateItem(req:Request, res:Response){
        const newInfo = req.body
        const orderId = req.params.orderID
        const itemID = req.params.itemID
        try{
            const itemUpdate = await itemServices.getRow(orderId, itemID)
            await itemServices.updateData(itemUpdate,newInfo)
            const itemToUpdate = await itemServices.getRow(orderId,itemID)
            res.send(itemToUpdate).status(200)

        }catch(error){
            res.send(error).status(401)
        }
   
    }

    static async listAllItems(req:Request, res:Response){
        const orderID = req.params.orderID
        try{
            const allItems = await itemServices.getItens(Number(orderID))
            res.send(allItems).status(200)
        }   catch(error){
            res.send(error).status(404)
        }
    }
    static async findItemById(req:Request, res:Response){
        const orderID = req.params.orderID
        const itemID = req.params.itemID
        try{
            const itemById = await itemServices.getRow(Number(orderID),Number(itemID))
            res.send(itemById).status(200)
        }catch(error){
            res.send(error).status(404)
        }
    }
    static async deleteItem(req:Request, res:Response){
        const orderID = req.params.orderID
        const itemID = req.params.itemID
        try{
            const itemById  = await itemServices.getRow(Number(orderID),Number(itemID))
            await itemServices.deleteData(itemById)
            res.status(200).send("Item deletado com sucesso")
        }catch(error){
            res.send(error).status(404)
        }


    }



}