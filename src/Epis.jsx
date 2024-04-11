import { useState } from 'react'
import './Home.css'



function Epi() {

  function cadastrar() {
    let btnCadastrar = document.getElementById("btnCadastrar");
    let btnListar = document.getElementById("btnListar");
    let btnEditar = document.getElementById("btnEditar");
    let btnRemover = document.getElementById("btnRemover");

    let cadastroEpi = document.getElementById("cadastrarEpi");
    let listarEpi = document.getElementById("listarEpi");
    let excluirEpi = document.getElementById("excluirEpi");
    let editarEpi = document.getElementById("editarEpi");


    btnCadastrar.style.backgroundColor = "white";
    btnListar.style.backgroundColor = "darkgray";
    btnEditar.style.backgroundColor = "darkgray";
    btnRemover.style.backgroundColor = "darkgray";

    cadastroEpi.style.display = "block";
    listarEpi.style.display = "none";
    excluirEpi.style.display = "none";
    editarEpi.style.display = "none";
  }
  function listar() {
    let btnCadastrar = document.getElementById("btnCadastrar");
    let btnListar = document.getElementById("btnListar");
    let btnEditar = document.getElementById("btnEditar");
    let btnRemover = document.getElementById("btnRemover");

    let cadastroEpi = document.getElementById("cadastrarEpi");
    let listarEpi = document.getElementById("listarEpi");
    let excluirEpi = document.getElementById("excluirEpi");
    let editarEpi = document.getElementById("editarEpi");


    btnCadastrar.style.backgroundColor = "darkgray";
    btnListar.style.backgroundColor = "white";
    btnEditar.style.backgroundColor = "darkgray";
    btnRemover.style.backgroundColor = "darkgray";

    cadastroEpi.style.display = "none";
    listarEpi.style.display = "block";
    excluirEpi.style.display = "none";
    editarEpi.style.display = "none";
  }

  function editar() {
    let btnCadastrar = document.getElementById("btnCadastrar");
    let btnListar = document.getElementById("btnListar");
    let btnEditar = document.getElementById("btnEditar");
    let btnRemover = document.getElementById("btnRemover");

    let cadastroEpi = document.getElementById("cadastrarEpi");
    let listarEpi = document.getElementById("listarEpi");
    let excluirEpi = document.getElementById("excluirEpi");
    let editarEpi = document.getElementById("editarEpi");


    btnCadastrar.style.backgroundColor = "darkgray";
    btnListar.style.backgroundColor = "darkgray";
    btnEditar.style.backgroundColor = "white";
    btnRemover.style.backgroundColor = "darkgray";

    cadastroEpi.style.display = "none";
    listarEpi.style.display = "none";
    excluirEpi.style.display = "none";
    editarEpi.style.display = "block";
  }
  function remover() {
    let btnCadastrar = document.getElementById("btnCadastrar");
    let btnListar = document.getElementById("btnListar");
    let btnEditar = document.getElementById("btnEditar");
    let btnRemover = document.getElementById("btnRemover");

    let cadastroEpi = document.getElementById("cadastrarEpi");
    let listarEpi = document.getElementById("listarEpi");
    let excluirEpi = document.getElementById("excluirEpi");
    let editarEpi = document.getElementById("editarEpi");


    btnCadastrar.style.backgroundColor = "darkgray";
    btnListar.style.backgroundColor = "darkgray";
    btnEditar.style.backgroundColor = "darkgray";
    btnRemover.style.backgroundColor = "white";

    cadastroEpi.style.display = "none";
    listarEpi.style.display = "none";
    excluirEpi.style.display = "block";
    editarEpi.style.display = "none";
  }


  return (
    <>
      <div className='index'>
        <h1>Epis</h1>

        <div className='navApiGeral'>
          <button className='navApi' id="btnCadastrar" onClick={cadastrar}>Cadastrar</button>

          <button className='navApi2' id="btnListar" onClick={listar}>Listar</button>
          <button className='navApi3' id="btnEditar" onClick={editar}>Editar</button>
          <button className='navApi4' id="btnRemover" onClick={remover}>Remover</button>
        </div>
        <div className='content'>

          <div className='cadastroEpi' id="cadastrarEpi">

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

          <div className='listarEpi' id="listarEpi">
            <h1>Listar</h1>
            <input name="" />
            <button>
              <span>Listar</span>
            </button>
          </div>

          <div className='editarEpi' id="editarEpi">
            <h1>Editar</h1>
            <input name="" />
            <button>
              <span>Editar</span>
            </button>
          </div>

          <div className='excluirEpi' id="excluirEpi">
            <h1>Excluir</h1>
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
