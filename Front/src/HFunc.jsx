import { useState } from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import axios from 'axios';
const host = "http://localhost:3000"




function HFunc() {
  const [id, setId] = useState(null)
  const [funcs, setFuncs] = useState([])



  async function buscar() {
    const dados = { id }
    try {
      const response = await axios.post(`${host}/hfunc`, dados);
      setFuncs(response.data.registroConsulta);
      console.log(response.data.registroConsulta)
    } catch (error) {
      console.error('Erro ao obter dados do backend:', error);
    }

    funcs.forEach((item) => {
      item.retirada = format(new Date(item.retirada), 'dd/mm/yyyy');
      item.devolucao = format(new Date(item.devolucao), 'dd/mm/yyyy');
    })
  }
  return (
    <div className='index'>
      <Link to={"/"}>
        < h1 > Historico de Funcionarios</h1>
      </Link >
      <div className='arrumar'>
        <h3 className='organizado'>Id Funcionario</h3>
        <input type='number' className='organizado' onChange={(evento) => setId(evento.target.value)} />
        <button className='organizado' onClick={buscar}>
          <span>Buscar</span>
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
                  <div className='org'>{func.idfuncionario}</div>
                  <div className='org'>{func.idepi}</div>
                  <div className='org'>{func.retirada}</div>
                  <div className='org'>{func.devolucao}</div>
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
