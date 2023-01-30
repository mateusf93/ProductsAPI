import { ObjectLiteral } from "typeorm";
import { AppDataSource } from "../datasource";


export class Services{
    entidade: string;
    constructor(entidade: string){
        this.entidade = entidade
    }
    async listAll(){
        return AppDataSource.getRepository(this.entidade).find()
    }
    async listById(where = {}){
        return AppDataSource.getRepository(this.entidade).findOneBy({...where})
    }
    async insertData(data:ObjectLiteral[]){
        return AppDataSource.getRepository(this.entidade).save(data)
    }
    async updateData(data:ObjectLiteral[], newdata:ObjectLiteral[]){
        return AppDataSource.getRepository(this.entidade).update(data,newdata)
        }
    async deleteData(id :unknown){
        return AppDataSource.getRepository(this.entidade).delete({id:id})
    }
}