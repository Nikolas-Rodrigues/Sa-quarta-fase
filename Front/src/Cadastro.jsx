import './Home.css'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
const host = "http://localhost:3000"


function Cadastro() {
  const [idfuncionario, setIdFuncionario] = useState('')
  const [idepi, setIdEpi] = useState('')
  const [retirada, setRetirada] = useState('')
  const [devolucao, setDevolucao] = useState('')
  const [Epis, setEpis] = useState([])
  const [Func, setFunc] = useState([])
  const [Rels, setRels] = useState([])
  const [idRel, setIdRel] = useState('')

  useEffect(() => {
    async function fetchDataEpi() {
      try {
        const response = await axios.post(`${host}/listarEpi`);

        setEpis(response.data.episResults);
      } catch (error) {
        console.log('Erro ao obter dados do epi:', error);
      }
    }
    async function fetchDataFunc() {
      try {
        const response = await axios.post(`${host}/listarFunc`);
        setFunc(response.data.FuncResults);
      } catch (error) {
        console.log('Erro ao obter dados do func:', error);
      }
    }
    async function fetchDataRelat() {
      try {
        const response = await axios.post(`${host}/listarRelatorios`);
 
        setRels(response.data.relatorioResults);
      } catch (error) {
        console.log('Erro ao obter dados do func:', error);
      }
    }
    fetchDataEpi();
    fetchDataFunc();
    fetchDataRelat();
  }, []);

   function exRelatorioFront() {
    console.log(Rels)
    let acharRel = false;


    //Verificação se existe Relatorios
    for (let i = 0; i < Rels.length; i++) {
      console.log(Rels[i].id)
      if (Rels[i].id == idRel) {
        acharRel = true;
      }
    }

    if (acharRel == false) {
      alert('Esse id não existe!')
      return;
    }

    let dados = { idRel };
    console.log(dados)
    try {
     axios.delete(`${host}/exRelatorio/${idRel}`);
     alert("Dados Excluidos com sucesso!");
     window.location.reload();
    }catch(erro) {
      console.log('Erro ao excluir dados!')
    }
  }
  function addRelatorioFront() {

    let dados = { idfuncionario, idepi, retirada, devolucao };
    let acharIdEpi = false;
    let acharIdFunc = false;

    let pesqidEpi = [];
    let pesqidFunc = [];

    Epis.forEach((item) => pesqidEpi.push([item.id, item.disponibilidade]))
    Func.forEach((item) => pesqidFunc.push(item.id))

    //Verificação se existe EPI
    for (let i = 0; i < pesqidEpi.length; i++) {
      if (pesqidEpi[i][0] == idepi) {
        acharIdEpi = true;
      }
    }
    //Verificação se existe Func
    for (let i = 0; i < pesqidFunc.length; i++) {
      if (pesqidFunc[i] == idfuncionario) {
        acharIdFunc = true;
      }
    }

    var arrayEpi = (Epi) => Epi.id == idepi;
    var epiFilter = Epis.filter(arrayEpi);

    //Verificação existencia de EPI
    if (acharIdEpi == false) {
      alert('EPI NAO ENCONTRADO!')
      return;
    }
    //Verificação existencia de EPI
    if (acharIdFunc == false) {
      alert('Funcionario NAO ENCONTRADO!')
      return;
    }
    //Verificar se ja dispo é true
    if (epiFilter[0].disponibilidade == false) {
      alert('EPI Já foi retirado!')
      return;
    }

    if (retirada >= devolucao || idepi == '' || idfuncionario == '' || retirada == '' || devolucao == '') {
      alert("Dados inválidos");
      return;
    } else {
      try {
        axios.post(`${host}/addRelatorio`, dados);
        document.getElementById("RegistrarIdEpi").value = '';
        document.getElementById("RegistrarIdFunc").value = '';
        document.getElementById("RegistrarEpiRetirada").value = '';
        document.getElementById("RegistrarEpiDevolucao").value = '';
        alert("Dados inseridos com sucesso");
        window.location.reload();
      } catch (error) {
        console.error('Erro ao enviar relatório:', error);
        alert("Erro ao enviar relatório, Verificar Id da Epi e do Funcionario");

      }
    }

  }

  return (
    <>
      <div className='index'>
        <Link to={"/"}>
          <h1> Administrar uso de Epi</h1>
        </Link >

        <div className='todo'>
          <div className='divisa'>
            <div id="cadastrarEpi">
              <div >
                <h3>IdFuncionario: </h3>
                <input type='number' id="RegistrarIdFunc" onChange={(evento) => setIdFuncionario(evento.target.value)} />
              </div>

              <div>
                <h3>IdEpi:</h3>
                <input type='number' id="RegistrarIdEpi" onChange={(evento) => setIdEpi(evento.target.value)} />
              </div>

              <div>
                <h3>Retirada:</h3>
                <input type='date' id="RegistrarEpiRetirada" onChange={(evento) => setRetirada(evento.target.value)} />
              </div>

              <div>
                <h3>Entrega:</h3>
                <input type='date' id="RegistrarEpiDevolucao" onChange={(evento) => setDevolucao(evento.target.value)} />

              </div>
              <button className='adicionarEpi' onClick={addRelatorioFront}>
                <span>Adicionar</span>
              </button>
            </div>
          </div>
          <div className='divisa2'>
            <h1>Excluir Registro</h1>
            <input type='number' onChange={(evento) => setIdRel(evento.target.value)} />
            <br />
            <button className='adicionarEpi' onClick={exRelatorioFront}>
              <span>Excluir</span>
            </button>
          </div>

        </div>
      </div>
    </>
  )
}

export default Cadastro
