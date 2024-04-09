import pg from 'pg';

const database = new pg.Client("postgres://pooqbkmy:zVazK2zFLz-B-RguhEtvol8Xbfx4Cwm4@isabelle.db.elephantsql.com/pooqbkmy")

database.connect((erro) => {
    if (erro) {
        return console.log("Não foi possível se conectar com o ElephantSQL", erro)
    } else {
        return console.log("Conectado ao ElephantSQL!")
    }
})

export default database
