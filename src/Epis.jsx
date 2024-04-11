import { useState } from 'react'
import './Home.css'



function Epi() {
   
  function listar() {
    console.log('SEXO ENTRE HETERO QUENTE FESTA RED PILL')

    let aba1api = document.getElementById("aba1api");
    let aba2api = document.getElementById("aba2api");
    let aba3api = document.getElementById("aba3api");
    let aba4api = document.getElementById("aba4api");

    let cadastroEpi = document.getElementById("cadastrarEpi");
    let listarEpi = document.getElementById("listarEpi");


    aba1api.style.backgroundColor = "darkgray";
    aba2api.style.backgroundColor = "white";
    aba3api.style.backgroundColor = "darkgray";
    aba4api.style.backgroundColor = "darkgray";

    cadastroEpi.style.display = "none"
    listarEpi.style.display = "none"
}

  return (
    <>
      <div className='index'>
        <h1>Epis</h1>
        
        <div className='navApiGeral'>
          <button className='navApi' id="aba1api">Cadastrar</button>
          
          <button className='navApi2' id="aba2api" onClick={listar}>Listar</button>
          <button className='navApi3' id="aba3api">Editar</button>
          <button className='navApi4' id="aba4api">Remover</button>
        </div>
        <div className='content'>
        
          <div className='cadastro-epi' id="cadastrarEpi">

            <div className='cadastro-epi-div'>
              <h2>Nome do Equipamento: </h2>
              <input name="adicionarEpiNome" />
            </div>

            <div>
              <h2>Codigo do Equipamento</h2>
              <input name="adicionarEpiCodigo" />
            </div>

            <div>
              <h2>Validade</h2>
              <input type='date' name="adicionarEpiValidade" />
            </div>
            <button className='adicionarEpi'>
              <span>Adicionar</span>
            </button>
          </div>



          <div className='listar-epi' id="listrarEpi">

            <h1>Funcionou pika</h1>
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

export default Epi
