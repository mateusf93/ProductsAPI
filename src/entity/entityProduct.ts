import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
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
    unitPrice:number

    @Column()
    Measure:string

    @OneToMany(()=>Itens, (item) => item.product)
    item: Itens[]

    @ManyToOne(()=> Category, (category) => category.products)
    category: Category

}

