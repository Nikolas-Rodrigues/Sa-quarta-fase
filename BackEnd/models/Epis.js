import sequelize from "../database.js"
import { DataTypes } from "sequelize"

const Epis = sequelize.define('epis', {

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    codigo: {
        type: DataTypes.INTEGER
    },
    validade: {
        type: DataTypes.DataTypes
    },
    nome: {
        type: DataTypes.STRING
    },
    disponibilidade: {
        type: DataTypes.BOOLEAN
    },
}, {tableName: 'epis'})

export { Epis }