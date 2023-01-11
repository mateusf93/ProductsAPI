import { Column, Entity, OneToMany } from "typeorm";
import { PrimaryGeneratedColumn } from "typeorm";
import { Order } from "./entityOrders";

@Entity('Costumers')
export class Costumers{

    @PrimaryGeneratedColumn({name:"CostumerID"})
    id:Number

    @Column()
    CostumerName:String

    @OneToMany(()=>Order, (order)=> order.costumer)
    order:Order[]

    @Column()
    adress:String



}