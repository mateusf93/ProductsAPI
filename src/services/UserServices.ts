import { AppDataSource } from "../datasource";
import { Services } from "./services";
import bcrypt from 'bcrypt'

export class UserServices extends Services{
    constructor(){
        super("User")
    }

    async getEmailById(id:Object){
        return AppDataSource.getRepository(this.entidade).find({
            select:{
                email:true
            },
            where:{
                id:id
            }
        })
    }
    async checkEmail(email:String){
        return AppDataSource.getRepository(this.entidade).findOneBy({email})
         
    }
    private readonly saltRounds = 10;
    async hashPassword(password:string){
        return bcrypt.hash(password, this.saltRounds)

    }
    async createUserSafe(name:string, email:string, password:string, active:boolean ){
        const hashedPassword = await this.hashPassword(password)
        const userData = AppDataSource.getRepository(this.entidade).create({
            name,
            email,
            password: hashedPassword,
            active
        })
        return AppDataSource.getRepository(this.entidade).save(userData)
    }

}