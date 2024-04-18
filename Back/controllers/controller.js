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
    const { IdFuncionario, IdEpi, Retirada, Devolucao } = req.body;
    let existe = true;
    let idVerificarEpi = IdEpi;
    let idVerificarFunc = IdFuncionario
    console.log('Buscar Para Verificação');



    try {

        const epis = await Epis.findOne({ where: { id: idVerificarEpi } });
        if (!epis) {
            existe = false;
        }
    } catch (erro) {
        console.log(erro);
        return res.status(404).send({ mensagem: 'Erro ao buscar Epi' });
    }

    try {
        const funcionario = await Funcionario.findOne({ where: { id: idVerificarFunc } });
        if (!funcionario) {
            existe = false;
        }
    } catch (erro) {
        console.log(erro);
        return res.status(404).send({ mensagem: 'Erro ao buscar Funcionario' });
    }

    console.log(existe);

    try {
        if (!IdFuncionario || !IdEpi || !Retirada || !Devolucao || !existe) {
            return res.status(404).send({ mensagem: 'Dados incorretos' });
        }

        const registrado = await Relatorios.create({ IdFuncionario, IdEpi, Retirada, Devolucao });
        res.status(201).send({ registrado });
    } catch (erro) {
        console.log(erro);
        res.status(404).send({ mensagem: 'Erro ao inserir relatorio' });
    }
};



export { addFunc, listarFunc, editarFunc, apagarFunc, addEpis, listarEpi, editarEpi, apagarEpi, relatorio }