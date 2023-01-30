import { Services } from "./services";
import { AppDataSource } from "../datasource";

export class ProductServices extends Services{
    category: Services;
    constructor(){
        super('Product')
        this.category = new Services('Category')
    }
    async categoryProducts(id:unknown){
        return AppDataSource.getRepository(this.entidade).find({
            relations:{
                category:true,
            },
            where:{category :{id: id}}
        })
    }
    async listAllProducts(){
        return AppDataSource.getRepository(this.entidade).find({
            relations:{
            category:true
        }})
    }
    async listProductId(id:unknown){
        return AppDataSource.getRepository(this.entidade).find({
            relations:{
                category:true,
            },
            where:{id: id}
        })
         
    }
}


