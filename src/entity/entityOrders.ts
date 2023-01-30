import { CreateDateColumn, UpdateDateColumn } from "typeorm";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Costumers } from "./entityCostumers";
import { Itens } from "./entityItens";


export enum StatusOrder{
    ORDERED = "Ordered",
    CANCELLED = "Cancelled",
    SHIPPING = "Shipping",
    FINISHED = "Finished"
}

@Entity('Orders')
export class Order{
    @PrimaryGeneratedColumn({name:"orderId"})
    id:number

    @OneToMany(()=>Itens, (item) => item.order)
    item:Itens[]
    
    @Column()
    @CreateDateColumn()
    OrderDate:Date

    @Column()
    @UpdateDateColumn()
    ShipDate:Date

    @Column({type:"enum", enum:StatusOrder, default:StatusOrder.ORDERED})
    status:StatusOrder

    @ManyToOne(()=>Costumers, (costumer)=> costumer.order)
    costumer:Costumers

    
}