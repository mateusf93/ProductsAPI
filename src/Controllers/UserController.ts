import { error } from "console";
import { Request, Response } from "express";
import { ObjectLiteral } from "typeorm";
import { UserServices } from "../services/UserServices";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const userServices = new UserServices

export class UserController{

    static async createUser(req:Request, res:Response){
        const name = req.body.name
        const email = req.body.email
        const password = req.body.password
        const active = req.body.active
        try{        
            const check = await userServices.checkEmail(req.body.email)
            if(check){
                throw error
           }
            const userData = await userServices.createUserSafe(name, email, password, active)
            const {password:_, ...user} = userData
            return res.status(201).send(user)
        }
        catch(error){
            return res.status(401).send('E-Mail já cadastrado')
        }
    }
    static async login(req:Request, res:Response){

        const email = req.body.email
        const password = req.body.password
        try{
            const user = await userServices.checkEmail(email)
            if(!user){
                throw error
           } 
           const verifyPass =  await bcrypt.compare(password, user.password)  
           if(!verifyPass){
            throw error
           }
            const token = jwt.sign({id: user.id}, process.env.JWT_PASS ?? '',{expiresIn:'1h'
        })
        const {password:_, ...userLogin} = user

        return res.json({
            user: userLogin,
            token:token
        })
        }catch(error){
            return res.status(404).send('E-mail ou Senha inválidos!')
        }
    }
    static async listAllUser(req:Request, res:Response){
        try{
            const listOfUser: Object[] = await userServices.listAll()
            return res.status(200).send(listOfUser)
        }catch(error){
            res.status(404).send(error)
        }
    }
    static async listUserById(req:Request, res:Response){
            const id:Object = req.params.id
        try{const userById = await userServices.listById({id})
            return res.status(200).send(userById)
        }catch(error){
            res.status(404).send(error)           
        }
    }
    static async updateUser(req:Request, res:Response){
        const id : Object= req.params.id
        const newInfo : ObjectLiteral = req.body
        try{
            const ProductUpdate = await userServices.listById({id})
            await userServices.updateData(ProductUpdate, newInfo)
            const ProductUpdated = await userServices.listById({id})
            return res.status(200).json(ProductUpdated)
            }catch(error){
            res.status(500).send(error)
        }
    }
    static async deleteUser(req:Request, res:Response){
        const id: Object= req.params.id
        try{
            await userServices.deleteData(id)
            res.status(200).send("Usuário deletado com sucesso")
        }catch(error){
            res.status(400).send("Usuário não encontrado")
        }
    }
    static async getEmailById(req:Request, res:Response){
        const id:Object = req.params.id
        try{
           const email: Object =  await userServices.getEmailById(id)
           return res.status(200).send(email)
        }catch(error){
            res.status(404)
        }
    }
    static async getProfile(req:Request, res:Response){
        try{
        return res.json(req.user)
        }catch(error){
            res.status(401).send("Token inválido")
        }
    }
 
}