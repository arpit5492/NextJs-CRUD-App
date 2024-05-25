import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();

const pool = mysql.createPool({
  host: process.env.HOST,
  password: process.env.PASSWORD,
  user: "root",
  database: process.env.DATABASE,
  port: process.env.DB_PORT,
  multipleStatements: true,
});

export default pool;
