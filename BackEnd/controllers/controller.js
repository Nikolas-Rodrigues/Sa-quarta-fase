import Funcionario from "../models/Funcionarios.js";

const addFunc = async (req, res) => {
    try {
        console.log("Chegou")
        const { nome, cpf, cargo } = req.body
        if (!nome || !cpf || !cargo) return res.status(404).send({ mensagem: 'Informações incompletas' })
        const funcCadastrado = await Funcionario.create({ nome, cpf, cargo })
        res.status(201).send({ funcCadastrado })
    } catch (erro) {
        console.log(erro)
        res.status(404).send({ mensagem: 'Erro ao inserir funcionario' })
    }
}

const listarFunc = async (req, res) => {
    try {
        const funcionarios = await Funcionario.findAll()
        console.log(funcionarios)
        res.status(200).send({ funcionarios })
    } catch (erro) {
        console.log(erro)
        res.status(404).send({ mensagem: 'Erro ao buscar dados' })
    }
}
const apagarFunc = async (req, res) => {
    try {
        const {id} = req.body
        await Funcionario.destroy({ where: { id } })
        res.status(200).send({ mensagem: "Concluido" })
    } catch (erro) {
        console.log(erro)
        res.status(404).send({ mensagem: "Erro ao deletar dado" })
    }
}






const editarFunc = async (req, res) => {
    try {
        const { id, nome, cargo, cpf } = req.body
        const funcAtualizado = await Funcionario.update({ nome, cargo, cpf }, { where: { id } })
        res.status(200).send({ funcAtualizado })
    } catch (erro) {
        console.log(erro)
        res.status(404).send({ mensagem: 'Erro ao atualizar' })
    }
}
export { addFunc, listarFunc, apagarFunc, editarFunc }

