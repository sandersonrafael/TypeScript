import { Knex } from "knex";
import dotenv from "dotenv";
dotenv.config();

const DB_CLIENT = process.env.DB_CLIENT as string;
const DB_USER = process.env.DB_USER as string;
const DB_PASSWORD = process.env.DB_PASSWORD as string;
const DB_HOST = process.env.DB_HOST as string;
const DB_PORT = process.env.DB_PORT as unknown as number;
const DB_SCHEMA = process.env.DB_SCHEMA as string;

export const development: Knex.Config = {
    client: DB_CLIENT,
    connection: {
        user: DB_USER,
        password: DB_PASSWORD,
        host: DB_HOST,
        port: DB_PORT,
        database: DB_SCHEMA,
    },
};
