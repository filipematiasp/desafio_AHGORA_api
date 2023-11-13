import { DataSource } from "typeorm";
import 'dotenv/config';

import { Migrations1699847746307 } from "./migrations/1699847746307-migrations";
import { Sequence } from "../entities/sequencies";

export const dataSource = new DataSource({
    type: "postgres",
    host: process.env.HOST,
    port: 5432,
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    synchronize: true,
    logging: true,
    entities: [
        Sequence
    ],
    subscribers: [],
    migrations: [
        Migrations1699847746307,
    ],
})