import Epis from "../models/epis.js";
import Funcionario from "../models/Funcionarios.js";
import Relatorios from "../models/Relatorios.js";
const addFunc = async (req, res) => {
    try {
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
        const FuncResults = await Funcionario.findAll()
        res.status(200).send({ FuncResults })

    } catch (erro) {
        console.log(erro)
        res.status(404).send({ mensagem: 'Erro ao listar' })
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
        const apiAtuaizado = await Funcionario.update({ nome, cargo, cpf }, { where: { id } })
        res.status(200).send({ apiAtuaizado })
    } catch (erro) {
        console.log(erro)
        res.status(404).send({ mensagem: 'Erro ao atualizar' })
    }
}

const addEpis = async (req, res) => {
    try {
        const { nome, codigo, validade } = req.body
        let disponibilidade = false;

        if (!nome || !codigo || !validade) return res.status(404).send({ mensagem: 'Informações incompletas' })
        const epiCadastrado = await Epis.create({ nome, codigo, validade, disponibilidade })
        res.status(201).send({ epiCadastrado })
    } catch (erro) {
        console.log(erro)
        res.status(404).send({ mensagem: 'Erro ao inserir epi' })
    }
}


const listarEpi = async (req, res) => {

    try {
        const episResults = await Epis.findAll()
        res.status(200).send({ episResults })

    } catch (erro) {
        console.log(erro)
        res.status(404).send({ mensagem: 'Erro ao listar' })
    }
}

const editarEpi = async (req, res) => {
    try {
        const { id, nome, codigo, validade } = req.body

        const apiAtuaizado = await Epis.update({ nome, codigo, validade }, { where: { id } })
        res.status(200).send({ apiAtuaizado })
    } catch (erro) {
        console.log(erro)
        res.status(404).send({ mensagem: 'Erro ao atualizar' })
    }
}

const apagarEpi = async (req, res) => {
    try {
        const { id } = req.body
        console.log('aPagando EPI: ', id)
        await Epis.destroy({ where: { id } })
        res.status(200).send({ mensagem: 'excluido' })
    } catch (erro) {
        console.log(erro)
        res.status(404).send({ mensagem: 'Erro ao apagar' })
    }
}
const relatorio = async (req, res) => {
    try {
        const { IdFuncionario, IdEpi, Retirada, Devolucao } = req.body
        if (!IdFuncionario || !IdEpi || !Retirada || !Devolucao) return res.status(404).send({ mensagem: 'Informações incompletas' })
        const funcRelatorios = await Relatorios.create({ IdFuncionario, IdEpi, Retirada, Devolucao })
        res.status(201).send({ funcRelatorios })
    } catch (erro) {
        console.log(erro)
        res.status(404).send({ mensagem: 'Erro ao inserir funcionario' })
    }
}



export { addFunc, listarFunc, apagarFunc, editarFunc, addEpis, listarEpi, relatorio, editarEpi, apagarEpi}