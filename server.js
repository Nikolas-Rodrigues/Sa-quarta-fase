import express from "express";
import sequelize from './dataBase/database.js'

const port = 3000;
const app = express();

try {
    await sequelize.sync({})
} catch (erro) {
    console.log(erro)
}

app.use(express.json());

app.listen(port, () => {
    console.log("Servidor esta disponivel")
})
