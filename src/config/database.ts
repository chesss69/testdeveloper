import { DataSource } from "typeorm";
import * as dotenv  from 'dotenv';
import { Persona } from "../entities/persona.entity"
import { Users } from "../entities/users.entity";
dotenv.config();

export default new DataSource({
    type: "mysql",
    host: process.env.DATABASE_HOST || "localhost",
    port: parseInt(process.env.DATABASE_PORT || "3306"),
    username: process.env.DATABASE_USER || "root",
    password: process.env.DATABASE_PASSWORD || "",
    database: process.env.DATABASE_NAME || "personasedge",
    entities: [Persona, Users],
    synchronize: true,
    logging: false,
})