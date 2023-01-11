import { Column, Entity, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Products } from "./entityProduct";
import { Order } from "./entityOrders";

@Entity('Itens')
export class Itens{

    @PrimaryGeneratedColumn({name:"ItemID"})
    id:Number

    @ManyToOne(()=> Products, (product) => product.item)
    product: Products

    @ManyToOne(()=> Order, (order) => order.item)
    order:Order

    @Column({type:"float"})
    UnitPrice:Number

    @Column({type:"float"})
    Quantity:Number



}