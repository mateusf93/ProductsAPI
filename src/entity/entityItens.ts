import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Products } from "./entityProduct";
import { Order } from "./entityOrders";

@Entity('Itens')
export class Itens{

    @PrimaryGeneratedColumn({name:"ItemID"})
    id:number

    @ManyToOne(()=> Products, (product) => product.item)
    product: Products

    @ManyToOne(()=> Order, (order) => order.item)
    order:Order

    @Column({type:"float"})
    UnitPrice:number

    @Column({type:"float"})
    Quantity:number



}