import './Home.css'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios';
import { format } from 'date-fns';
const host = "http://localhost:3000"

function HEpi() {
  const [juncao, setJuncao] = useState([])
  const [id, setId] = useState([])

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.post(`${host}/listarRelatorios`);
        const responseEpi = await axios.post(`${host}/listarEpi`);

        let relatorioResults = response.data.relatorioResults;
        let episResults = responseEpi.data.episResults;

        console.log(relatorioResults)
        console.log(episResults)
        relatorioResults.forEach((item) => {
          item.retirada = format(new Date(item.retirada), 'dd/mm/yyyy');
        })
        let novaLista = [];
        let x = 'Epi Dispinivel'
        for (let i = 0; i < episResults.length; i++) {
          let achar = false;
          for (let j = 0; j < relatorioResults.length; j++) {
            if (episResults[i].id == relatorioResults[j].id) {
              achar = true;
              novaLista.push({
                id: episResults[i].id, idfuncionario: relatorioResults[j].idfuncionario,
                idepi: relatorioResults[j].idepi, regEntrada: relatorioResults[j].retirada, disponibilidade: 'Não'
              })
              break;
            }

          }
          if (achar == false) {
            novaLista.push({
              id: episResults[i].id, idfuncionario: x, idepi: x, regEntrada: x, disponibilidade: x
            })
          }

        }
        console.log(novaLista)
        setJuncao(novaLista);

      } catch (error) {
        console.error('Erro ao obter dados do backend:', error);
      }
    }

    fetchData();
  }, []);

  const buscarEpi = async (req, res) => {
    console.log('BUSCANDO EPI front');
    console.log(juncao);

    let achouId = false;
    juncao.forEach((item) => {
      if (item.id == id) {
        achouId = true;
      }
    });


    if (id == null || achouId == false) {
      alert("Id vazio ou Inválido");
      return;
    }
    const procurar = juncao.find((element) => element.id == id);
    setJuncao([procurar])
    console.log(procurar)

  }

  return (
    <div className='index'>
      <Link to={"/"}>
        < h1 > Historico de Epis</h1>
      </Link >
      <div className='arrumar'>
        <h3 className='organizado'>ID Epi's</h3>
        <input type='number' id="BuscarHistoricoEpi" className='organizado' onChange={(evento) => setId(evento.target.value)} />
        <button className='organizado' onClick={buscarEpi}>
          <span>Buscar</span>
        </button>
      </div>
      <div className='content'>
        <div className='dadosEpi'>
          <div>ID</div>
          <div>IdFunc</div>
          <div>IdEpi</div>
          <div>regEntrada</div>
          <div>Disponível</div>
        </div>
        <ul className='listar1'>
          {juncao.map(juncao => (
            <li key={juncao.id}>
              <div className='organizar1'>
                <div className='relId'>{juncao.id}</div>
                <div className='reIdFunc'>{juncao.idfuncionario}</div>
                <div className='reIdEpi'>{juncao.idepi}</div>
                <div className='reRetirada'>{juncao.regEntrada}</div>
                <div className='reIdEpi'>{juncao.disponibilidade}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default HEpi
