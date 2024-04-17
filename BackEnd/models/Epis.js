import sequelize from "../dataBase/database.js"
import { DataTypes } from "sequelize"

const Epis = sequelize.define('Epis', {

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    codigo: {
        type: DataTypes.INTEGER
    },
    validade: {
        type: DataTypes.DATE
    },
    nome: {
        type: DataTypes.STRING
    },
    disponibilidade: {
        type: DataTypes.BOOLEAN
    },
}, {tableName: 'Epis'})

export default Epis 