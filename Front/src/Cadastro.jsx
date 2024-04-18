import './Home.css'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
const host = "http://localhost:3000"


function Cadastro() {

  const [IdFuncionario, setIdFuncionario] = useState('')
  const [IdEpi, setIdEpi] = useState('')
  const [Retirada, setRetirada] = useState('')
  const [Devolucao, setDevolucao] = useState('')


  async function addRelatorio() {
    let dados = { IdFuncionario, IdEpi, Retirada, Devolucao }
    let resposta = null
    if (Retirada >= Devolucao || IdEpi == '' || IdFuncionario == '') {
      alert("Dados invalidos")
    }
    else {
      resposta = await axios.post(`${host}/relatorio`, dados)
      document.getElementById("RegistrarIdEpi").value = '';
      document.getElementById("RegistrarIdFunc").value = '';
      document.getElementById("RegistrarEpiRetirada").value = '';
      document.getElementById("RegistrarEpiDevolucao").value = '';
      alert("Dados inseridos com sucesso")
    }
    console.log(resposta)
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
            <button className='adicionarEpi' onClick={addRelatorio}>
              <span>Adicionar</span>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cadastro
