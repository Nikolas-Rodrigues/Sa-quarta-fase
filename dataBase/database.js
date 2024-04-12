import pg from 'pg';
import { Sequelize } from 'sequelize'

// const database = new pg.Client('postgres://hwpivqfw:pdS05tdj99xuoQjCUlOirSP8N1Dg9PLn@kesavan.db.elephantsql.com/hwpivqfw');
const sequelize = new Sequelize('postgres://hwpivqfw:pdS05tdj99xuoQjCUlOirSP8N1Dg9PLn@kesavan.db.elephantsql.com/hwpivqfw')

// try {
//     await sequelize.authenticate()
//     console.log('Conectado com sucesso')
// } catch (erro) {
//     console.log('Erro ao conectar banco de dados')
//     console.log(erro)
// }

export default sequelize;
