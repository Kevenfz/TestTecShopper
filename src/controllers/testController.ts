import { Request, Response } from "express";
import sequelize from "../config/database";

export const testDatabaseConnection = async (req: Request, res: Response) => {
  try {
    await sequelize.authenticate();
    res.status(200).json({ message: "Database connection successful!" });
  } catch (error) {
    res.status(500).json({ message: "Database connection failed!", error });
  }
};
