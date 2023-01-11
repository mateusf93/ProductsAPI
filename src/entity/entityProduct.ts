import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, Table } from "typeorm";
import { Category } from "./entityCategory";
import { Itens} from "./entityItens";

@Entity('Product')
export class Products{
    @PrimaryGeneratedColumn({name:"ProductID"})
    id:number

    @Column()
    product:string

    @Column()
    description:string

    @Column({type:"float"})
    unitPrice:Number

    @Column()
    Measure:String

    @OneToMany(()=>Itens, (item) => item.product)
    item: Itens[]

    @ManyToOne(()=> Category, (category) => category.products)
    category: Category

}

