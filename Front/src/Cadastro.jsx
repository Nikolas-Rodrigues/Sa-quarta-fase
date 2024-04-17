import './Home.css'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
const host = "http://localhost:3000"


function Cadastro() {

  const [IdFuncionario, setIdFuncionario] = useState(null)
  const [IdEpi, setIdEpi] = useState(null)
  const [Retirada, setRetirada] = useState(null)
  const [Devolucao, setDevolucao] = useState(null)



  function addRelatorio() {
    const dados = { IdFuncionario, IdEpi, Retirada, Devolucao };

    if (Retirada >= Devolucao) {
      alert("Retirada após devolução é inválida");
    } else {
      axios.post(`${host}/relatorio`, dados)
        .then(() => {
          alert("Registro feito com sucesso");
          document.getElementById("RegistrarIdFunc").value = null;
          document.getElementById("RegistrarIdEpi").value = null;
          document.getElementById("RegistrarEpiRetirada").value = null;
          document.getElementById("RegistrarEpiDevolucao").value = null;
        })
        .catch(error => {
          console.error("Erro ao adicionar relatório:", error);
          alert("Erro ao adicionar relatório");
        });
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
