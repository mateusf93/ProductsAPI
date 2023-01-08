import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, Table } from "typeorm";
import { Category } from "./entityCategory";

@Entity('Product')
export class Products{
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    product:string

    @Column()
    description:string

    @ManyToOne(()=> Category, (category) => category.products)
    category: Category

}

