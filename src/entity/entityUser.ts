import { Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('User')
export class User{

    @PrimaryGeneratedColumn({name:"UserID"})
    id:number

    @Column()
    name:string

    @Column({unique:true})
    email:string

    @Column()
    password:string

    @Column()
    active:boolean

}