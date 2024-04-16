import { Sequelize } from 'sequelize'

const sequelize = new Sequelize('postgres://pooqbkmy:zVazK2zFLz-B-RguhEtvol8Xbfx4Cwm4@isabelle.db.elephantsql.com/pooqbkmy')

try {
    await sequelize.authenticate()
    console.log('Conectado com sucesso')
 } catch (erro) {
     console.log('Erro ao conectar banco de dados')
     console.log(erro)
 }

export default sequelize;
