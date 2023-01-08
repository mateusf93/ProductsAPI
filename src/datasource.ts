import 'dotenv/config'
import 'reflect-metadata'
import { DataSource} from 'typeorm'
import { Products } from './entity/entityProduct'
import { Category } from './entity/entityCategory'
import { User } from './entity/entityUser'

const port = process.env.DB_PORT as number | undefined

export const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.DB_HOST,
    port: port,
    username:process.env.DB_USER,
    password:process.env.DB_PASS,
    subscribers: [], 
    database:process.env.DB_NAME,
    entities: [Products,User,Category],
	migrations: ['./migrations/*.{ts,js}'],

})