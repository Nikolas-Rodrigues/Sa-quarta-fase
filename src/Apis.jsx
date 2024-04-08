import { useState } from 'react'
// import './Apis.css '
import DatePicker from 'react-date-picker'
// Lib do calendario
// https://www.npmjs.com/package/react-date-picker


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
            < DatePicker onChange={"a"} valor={"a"} />

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
