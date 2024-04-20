import './Home.css'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'


function HEpi() {
  const [relatorios, setRelatorios] = useState([])

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.post(`${host}/listarEpi`);
        console.log(response.data.episResults)
        let epiResults = response.data.episResults;

        epiResults.forEach((item) => {

          item.validade = format(new Date(item.validade), 'dd/mm/yyyy');
        })
        console.log(epiResults)
        setEpis(response.data.episResults);

      } catch (error) {
        console.error('Erro ao obter dados do backend:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className='index'>
      <Link to={"/"}>
        < h1 > Historico de Epis</h1>
      </Link >
      <div className='dadosEpi'>
        <div>ID</div>
        <div>Nome</div>
        <div>Validade</div>
        <div>Disponibilidade</div>
      </div>
      <ul className='listar1'>
              {epi.map(epi => (
                <li key={epi.id}>
                  <div className='organizar1'>
                    <div className='epiId'>{epi.id}</div>
                    <div className='epiNome'>{epi.nome}</div>
                    <div className='epiValidade'>{epi.validade}</div>
                    <div className='epiDisponibilidade'>{epi.disponibilidade}</div>
                  </div>
                </li>
              ))}
            </ul>

    </div>
  )
}

export default HEpi
