import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
  process.env.DB_NAME || "rides",
  process.env.DB_USER || "admin", 
  process.env.DB_PASSWORD || "secret",
  {
    host: process.env.DB_HOST || 'localhost',
    port: Number(process.env.DB_PORT) || 5432,
    dialect: "postgres",
  }
);

export default sequelize;
