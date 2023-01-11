import { AppDataSource } from "../datasource";
import { Services } from "./services";

export class OrderServices extends Services{
    constructor(){
        super('Orders')
    }

    async listOrder(){
        return AppDataSource.getRepository(this.entidade).find({relations:
            {
            item:true, 
            costumer:true
            }
        })
    }
    async listOrderById(id:Object){
        return AppDataSource.getRepository(this.entidade).find({relations:
            {
            item:true, 
            costumer:true
            },
            where:{id:id}
        })
    }
}