import Epis from "../models/epis.js";
import Funcionario from "../models/epis.js";

const addFunc = async (req, res) => {
   
    try {
        const { nome, cpf, cargo } = req.body
        if (!nome || !cpf || !cargo) return res.status(404).send({ mensagem: 'Informações incompletas' })
        const epiCadastrado = await Funcionario.create({ nome, cpf, cargo })
        res.status(201).send({ epiCadastrado })
    } catch (erro) {
        console.log(erro)
        res.status(404).send({ mensagem: 'Erro ao inserir funcionario' })
    }
}

const listarFunc = async (req, res) => {
    try {
        const epis = await Funcionario.findAll()
        res.status(200).send({ epis })
    } catch (erro) {
        console.log(erro)
        res.status(404).send({ mensagem: 'Erro ao buscar dados' })
    }
}
const apagarFunc = async (req, res) => {
    try {
        const { id } = req.body
        await Funcionario.destroy({ where: { id } })
        res.status(200).send({ mensagem: 'excluido' })
    } catch (erro) {
        console.log(erro)
        res.status(404).send({ mensagem: 'Erro ao apagar' })
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

const addEpis = async (req, res) => {
    console.log('FOI BACKEND')
    try {
        const { nome, codigo, validade } = req.body
        let disponibilidade = false;
        console.log( nome,codigo, validade)
        if (!nome || !codigo || !validade) return res.status(404).send({ mensagem: 'Informações incompletas' })
        const epiCadastrado = await Epis.create({ nome, codigo, validade, disponibilidade })
        res.status(201).send({ epiCadastrado })
    } catch (erro) {
        console.log(erro)
        res.status(404).send({ mensagem: 'Erro ao inserir funcionario' })
    }
}

    const listarEpi = async (req, res) => {
        console.log('LISTAR EPI no backend')
        try {
            const episResults = await Epis.findAll()
            res.status(200).send({ episResults })
            console.log(episResults)
            
        } catch (erro) {
            console.log(erro)
            res.status(404).send({ mensagem: 'Erro ao listar' })
        }
    }

export { addFunc, listarFunc, apagarFunc, editarFunc ,addEpis, listarEpi}