import { AppDataSource } from "../datasource";
import { Services } from "./services";

export class ItemServices extends Services{
    constructor(){
        super('Itens')
    }
      
      async getRow(orderID:unknown, ItemId:unknown){
      return AppDataSource.getRepository(this.entidade).find({
            where:{id:ItemId, order:orderID} , relations:{order:true, product:true}
      })
    }

    async getItens(order:unknown){
        return AppDataSource.getRepository(this.entidade).find({
              where:{order:{id:Number(order)}}, relations:{order:true, product:true}
        })
      }
    


}