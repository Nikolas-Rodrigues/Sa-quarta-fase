import { useState } from 'react'
import './Home.css'
import { Link } from 'react-router-dom'


function HEpi() {


  return (
    <div className='index'>
      <Link to={"/"}>
          < h1 > Historico de Epis</h1>
        </Link >
        <div>
        <h3>ID Epi's</h3>
        <input type='number' id="BuscarHistoricoEpi" onChange={(evento) => setDevolucao(evento.target.value)}/>
        </div>
        <button className='BuscarHistoricoEpi'>
          <span>Buscar</span>
          </button>
        <div className='todo'></div>
        
      </div>
  )
}

export default HEpi
