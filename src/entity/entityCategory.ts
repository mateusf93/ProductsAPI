import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Products } from "./entityProduct";

@Entity('Category')
export class Category{
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    category:string

    @Column()
    description:string
    
    @OneToMany(()=>Products, (product) => product.category)
    products: Products[]

}