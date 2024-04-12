import { useState } from 'react'
import { Link } from 'react-router-dom'


function Api() {


  return (
    <>
      <div className='index'>
        <h1>Epis</h1>

        <div className='content'>

          <div className='cadastro-epi'>
            <h1>Nome do Equipamento</h1>
            <input name="adicionarEpiNome" />
            <h1>Codigo do Equipamento</h1>
            <input name="adicionarEpiCodigo" />
            <h1>Validade do Equipamento</h1>

            <button>
              <span>Adicionar</span>
            </button>
          </div>



          <div className='listar-epi'>


          </div>





          <div className='editar-epi'>


          </div>





          <div className='excluir-epi'>
            <h1></h1>
            <input name="" />
            <button>
              <span>Apagar</span>
            </button>
          </div>







        </div>
      </div>
    </>
  )
}

export default Api
