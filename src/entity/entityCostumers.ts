import { Column, Entity, OneToMany } from "typeorm";
import { PrimaryGeneratedColumn } from "typeorm";
import { Order } from "./entityOrders";

@Entity('Costumers')
export class Costumers{

    @PrimaryGeneratedColumn({name:"CostumerID"})
    id:number

    @Column()
    CostumerName:string

    @OneToMany(()=>Order, (order)=> order.costumer)
    order:Order[]

    @Column()
    adress:string



}