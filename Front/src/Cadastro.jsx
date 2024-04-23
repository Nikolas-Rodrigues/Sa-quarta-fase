import './Home.css'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
const host = "http://localhost:3000"


function Cadastro() {
  const [IdFuncionario, setIdFuncionario] = useState('')
  const [IdEpi, setIdEpi] = useState('')
  const [Retirada, setRetirada] = useState('')
  const [Devolucao, setDevolucao] = useState('')
  const [Epis, setEpis] = useState([])
  const [Func, setFunc] = useState([])
  
  useEffect(() => {
    async function fetchDataEpi() {
      try {
        const response = await axios.post(`${host}/listarEpi`);
        let epiResults = response.data.episResults;
        console.log('epiResults')
        console.log(epiResults)
        setEpis(response.data.episResults);
      } catch (error) {
        console.log('Erro ao obter dados do epi:', error);
      }
    }
    async function fetchDataFunc() {
      try {
        const response = await axios.post(`${host}/listarFunc`);
        let FuncResults = response.data.FuncResults;
        console.log('epiResults 2')
        console.log(FuncResults)
        setFunc(response.data.FuncResults);
      } catch (error) {
        console.log('Erro ao obter dados do func:', error);
      }
    }
    fetchDataEpi();
    fetchDataFunc();
  }, []);


  function addRelatorioFront() {
    console.log('REGISTRANDO')
    console.log(Func)
    let dados = { IdFuncionario, IdEpi, Retirada, Devolucao };


    if (Epis[IdEpi - 1] == undefined) {
      alert('EPI NAO ENCONTRADO!')
      return;
    }
    if (Func[IdFuncionario - 1] == undefined) {
      alert('Funcionário NAO ENCONTRADO!')
      return;
    }
    // console.log(Epis[IdEpi - 1].disponibilidade)
    if (Epis[IdEpi - 1].disponibilidade == false) {
      alert('EPI já está sendo usada!');
      return;
    }
    if (Retirada >= Devolucao || IdEpi == '' || IdFuncionario == '' || Retirada == '' || Devolucao == '' ) {
      alert("Dados inválidos");
      return;
    } else {
      try {
        axios.post(`${host}/addRelatorio`, dados);
      
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
          <h1> Registra uso de Epi</h1>
        </Link >
        <div className='todo'>
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
      </div>
    </>
  )
}

export default Cadastro
