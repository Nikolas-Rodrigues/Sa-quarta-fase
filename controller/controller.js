import database from './banco.js'


const buscandoDados = (req, res) => {
    const query = ("SELECT * FROM epis")
    const values = [req.params.nome]
    database.query(query, values).then(
        (resultado) => {
            res.status(200).send({ Resultado: resultado.rows })//[0] pq naturalmente ele retorna um objeto, sum pra ele retornar o objeto sum direto
        },
        (erro) => {
            res.status(500).send({ erro: erro })
        })
}


export { buscandoDados }
