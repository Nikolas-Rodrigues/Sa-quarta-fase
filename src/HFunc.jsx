import { useState } from 'react'
import './Home.css'
import { Link } from 'react-router-dom'





function HFunc() {


  return (
    <div className='index'>
      <Link to={"/"}>
          < h1 > Historico de Funcionarios</h1>
        </Link >
    </div>
  )
}

export default HFunc
