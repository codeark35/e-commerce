import { Sequelize } from "sequelize-typescript";
import { User } from "../models/user";
import { Product } from "../models/product";
import { Category } from "../models/category";

/* import dotenv from "dotenv";
dotenv.config(); */

const db = new Sequelize({
  database: process.env.DB_NAME,
  username: process.env.USER_NAME,
  password: process.env.PASSWORD_USER,
  host: process.env.DB_HOST,
  dialect: "mysql",
  port: Number(process.env.DB_PORT),
  models: [User, Product, Category],
});

export default db;
