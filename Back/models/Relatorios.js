import sequelize from "../dataBase/database.js"
import { DataTypes } from "sequelize"

const Relatorios = sequelize.define('Relatorios', {

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    IdFuncionario: {
        type: DataTypes.INTEGER
    },
    IdEpi: {
        type: DataTypes.INTEGER
    },
    Retirada: {
        type: DataTypes.DATE
    },
    Devolucao: {
        type: DataTypes.DATE
    },
})

export default Relatorios 