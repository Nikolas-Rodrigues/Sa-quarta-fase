import { useState } from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import axios from 'axios';
const host = "http://localhost:3000"




function HFunc() {
  const [id, setId] = useState(null)
  const [funcs, setFuncs] = useState([])
  const [count, setCount] = useState([])



  async function buscar() {
    const dados = { id }
    try {
      const response = await axios.post(`${host}/hfunc`, dados);
      setFuncs(response.data.registroConsulta);
      console.log(response.data.registroConsulta)
      setCount(funcs.length)
    } catch (error) {
      console.error('Erro ao obter dados do backend:', error);
    }
    if (count == 0) {
      alert("Registro não localizado")
    }
  }

  return (
    <div className='index'>
      <Link to={"/"}>
        < h1 > Historico de Funcionarios</h1>
      </Link >
      <div className='arrumar'>
        <h1>id funcionari</h1>
        <input type="number" onChange={(evento) => setId(evento.target.value)} />
        <button onClick={buscar}>
          Buscar
        </button>
      </div>
      <div className='content'>

        <div>
          <div className='dadosEpi'>
            <div>ID</div>
            <div>Id Func</div>
            <div>Id epi</div>
            <div>Retirada</div>
            <div>Devolução</div>
          </div>
          <ul className='listar'>
            {funcs.map(func => (
              <li key={func.id}>
                <div className='organizar' >
                  <div className='org'>{func.id}</div>
                  <div className='org'>{func.IdFuncionario}</div>
                  <div className='org'>{func.IdEpi}</div>
                  <div className='org'>{func.Retirada}</div>
                  <div className='org'>{func.Devolucao}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>

      </div>

    </div>
  )
}

export default HFunc
