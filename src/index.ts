import express from "express";
import dotenv from "dotenv";
import routes from "./routes";
import sequelize from "./config/database";

dotenv.config();

const app = express();
app.use(express.json());
app.use(routes);

//Testando a conexão com o banco de dados
sequelize.authenticate()
.then(() => console.log("Database Conected!"))
.catch(err => console.error("Database connection error: ", err));

//Definindo a porta do servidor
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on server ${PORT}`);
});
