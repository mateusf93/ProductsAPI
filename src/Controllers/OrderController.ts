import { Request, Response } from "express";
import { OrderServices } from "../services/OrderServices";

const orderServices = new OrderServices()

export class OrderController{
    static async listAllOrders(req:Request, res:Response){
        try{
            const allOrders = await orderServices.listOrder()
            return res.send(allOrders).status(200)
        }catch(error){
            return res.status(500).send(error)
        }

    }

    static async listOrderById(req:Request, res:Response){
        try{
            const {id} = req.params
            const OrderById = await orderServices.listOrderById(id)
            res.send(OrderById)
        }catch(error){
            res.status(500).send(error)
        }
    }

    static async createOrder(req:Request, res:Response){
        try{
            const newOrder = req.body
            const orderCreated = await orderServices.insertData(newOrder)
            res.send(orderCreated).status(200)
        }catch(error){
            res.send(error).status(500)
        }
    }
    static async updateOrder(req:Request, res:Response){
            const id = req.params.id
            const newInfo  = req.body
            try{
                const OrderUpdate = await orderServices.listById({id})
                await orderServices.updateData(OrderUpdate, newInfo)
                const OrderUpdated = await orderServices.listById({id})
                return res.status(200).json(OrderUpdated)
                }catch(error){
                res.status(500).send(error)
            }
        }
    static async deleteOrder(req:Request, res:Response){
        const id = req.params.id
        try{
            await orderServices.deleteData(id)
            res.send("Order deleted!").status(200)
        }catch(error){
            res.send(error).status(500)
        }
    }



    }








    





