import sequelize from '../dataBase/database.js';
import { DataTypes } from 'sequelize';

const Funcionario = sequelize.define('Funcionario', {
  id: {
    type: DataTypes.BIGINT,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cpf: {
    type: DataTypes.BIGINT,
    allowNull: false,
    unique: true,
  },
  cargo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default Funcionario;