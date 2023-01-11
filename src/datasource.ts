import 'dotenv/config'
import 'reflect-metadata'
import { DataSource} from 'typeorm'
import { Products } from './entity/entityProduct'
import { Category } from './entity/entityCategory'
import { User } from './entity/entityUser'
import { Order } from './entity/entityOrders'
import { Itens } from './entity/entityItens'
import { Costumers} from './entity/entityCostumers'
import {default1673301185919} from './migrations/1673301185919-default'

const port = process.env.DB_PORT as number | undefined

export const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.DB_HOST,
    port: port,
    username:process.env.DB_USER,
    password:process.env.DB_PASS,
    subscribers: [], 
    database:process.env.DB_NAME,
    migrationsRun:true,
    entities: [Products,User,Category, Order, Itens,Costumers],
	migrations: [default1673301185919],

})