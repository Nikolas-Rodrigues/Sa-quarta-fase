import { ValidationError } from 'sequelize';
import Epis from '../models/Epis.js'
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
        let disponibilidade = true;

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
        const { id } = req.params

        console.log('Apgando EPI: ', id)
        await Epis.destroy({ where: { id } })
        res.status(200).send({ mensagem: 'excluido' })
    } catch (erro) {
        console.log(erro)
        res.status(404).send({ mensagem: 'Erro ao apagar' })
    }
}
const relatorio = async (req, res) => {
    try {
        let epis = null
        const { IdFuncionario, IdEpi, Retirada, Devolucao } = req.body;
        let existe = true;
        console.log('Buscar Para Verificação');
        let disponivel = "nao"
        epis = await Epis.findOne({ where: { id: IdEpi } });
        const funcionario = await Funcionario.findOne({ where: { id: IdFuncionario } });
        if (!epis || !funcionario) {
            existe = false;
        }
        console.log(epis.disponibilidade)
        if (epis.disponibilidade == true) {
            disponivel = "sim"
        }
        if (!IdFuncionario || !IdEpi || !Retirada || !Devolucao || !existe || disponivel == "nao") {
            return res.status(404).send({ mensagem: 'Dados incorretos' });
        }
        await Relatorios.create({ IdFuncionario, IdEpi, Retirada, Devolucao });
        const disponibilidade = false
        const apiAtuaizado = await Epis.update({ disponibilidade }, { where: { id: IdEpi } })
        console.log(apiAtuaizado)
        return res.status(200).send({ apiAtuaizado })
    } catch (erro) {
        console.log(erro);
        return res.status(404).send({ mensagem: 'Erro ao inserir relatorio' });
    }
};


export { addFunc, listarFunc, editarFunc, apagarFunc, addEpis, listarEpi, editarEpi, apagarEpi, relatorio }