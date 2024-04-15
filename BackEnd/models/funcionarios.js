import sequelize from '../database';
import { DataTypes } from 'sequelize';

const Funcionario = sequelize.define('Funcionario', {
  id: {
    type: DataTypes.BIGINT,
    allowNull: false,
    primaryKey: true,
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cpf: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  cargo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default Funcionario;
