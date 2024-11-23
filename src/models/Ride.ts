import { DataType, DataTypes, Model } from "sequelize";
import sequelize from "../config/database";

export class Ride extends Model {}

Ride.init(
  {
    origin: { type: DataTypes.STRING, allowNull: false },
    destination: { type: DataTypes.STRING, allowNull: false },
    fare: { type: DataTypes.FLOAT, allowNull: false },
    customerId: { type: DataTypes.INTEGER, allowNull: false },
    driverId: { type: DataTypes.INTEGER, allowNull: true },
  },
  { sequelize, modelName: "ride" }
);

export default Ride;

//CONFIGURAR O BANCO E TESTAR A CONEXÃO NO INICIO DA APLICAÇÃO