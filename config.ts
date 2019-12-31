
require('dotenv').config();
import { Pool } from "pg";

const isProduction = process.env.NODE_ENV === 'production';
const ch = {
    user:process.env.DB_USER,
    pwd:process.env.DB_PASSWORD,
    host:process.env.DB_HOST,
    port:process.env.DB_PORT,
    db:process.env.DB_DATABASE
}

const connectString = `postgresql://${ch.user}:${ch.pwd}@${ch.host}:${ch.port}/${ch.db}`;

const pool = new Pool({
    connectionString:isProduction ? process.env.DATABASE_URL : connectString,
    ssl:isProduction
})

export default pool;