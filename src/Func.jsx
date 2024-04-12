import { useState } from 'react'
import './Home.css'
import { Link } from 'react-router-dom';





function Func() {

  function cadastrar() {
    let btnCadastrar = document.getElementById("btnCadastrar");
    let btnListar = document.getElementById("btnListar");
    let btnEditar = document.getElementById("btnEditar");
    let btnRemover = document.getElementById("btnRemover");

    let cadastroFunc = document.getElementById("cadastrarFunc");
    let listarFunc = document.getElementById("listarFunc");
    let excluirFunc = document.getElementById("excluirFunc");
    let editarFunc = document.getElementById("editarFunc");


    btnCadastrar.style.backgroundColor = "white";
    btnListar.style.backgroundColor = "darkgray";
    btnEditar.style.backgroundColor = "darkgray";
    btnRemover.style.backgroundColor = "darkgray";

    cadastroFunc.style.display = "block";
    listarFunc.style.display = "none";
    excluirFunc.style.display = "none";
    editarFunc.style.display = "none";
  }
  function listar() {
    let btnCadastrar = document.getElementById("btnCadastrar");
    let btnListar = document.getElementById("btnListar");
    let btnEditar = document.getElementById("btnEditar");
    let btnRemover = document.getElementById("btnRemover");

    let cadastroFunc = document.getElementById("cadastrarFunc");
    let listarFunc = document.getElementById("listarFunc");
    let excluirFunc = document.getElementById("excluirFunc");
    let editarFunc = document.getElementById("editarFunc");


    btnCadastrar.style.backgroundColor = "darkgray";
    btnListar.style.backgroundColor = "white";
    btnEditar.style.backgroundColor = "darkgray";
    btnRemover.style.backgroundColor = "darkgray";

    cadastroFunc.style.display = "none";
    listarFunc.style.display = "block";
    excluirFunc.style.display = "none";
    editarFunc.style.display = "none";
  }

  function editar() {
    let btnCadastrar = document.getElementById("btnCadastrar");
    let btnListar = document.getElementById("btnListar");
    let btnEditar = document.getElementById("btnEditar");
    let btnRemover = document.getElementById("btnRemover");

    let cadastroFunc = document.getElementById("cadastrarFunc");
    let listarFunc = document.getElementById("listarFunc");
    let excluirFunc = document.getElementById("excluirFunc");
    let editarFunc = document.getElementById("editarFunc");


    btnCadastrar.style.backgroundColor = "darkgray";
    btnListar.style.backgroundColor = "darkgray";
    btnEditar.style.backgroundColor = "white";
    btnRemover.style.backgroundColor = "darkgray";

    cadastroFunc.style.display = "none";
    listarFunc.style.display = "none";
    excluirFunc.style.display = "none";
    editarFunc.style.display = "block";
  }
  function remover() {
    let btnCadastrar = document.getElementById("btnCadastrar");
    let btnListar = document.getElementById("btnListar");
    let btnEditar = document.getElementById("btnEditar");
    let btnRemover = document.getElementById("btnRemover");

    let cadastroFunc = document.getElementById("cadastrarFunc");
    let listarFunc = document.getElementById("listarFunc");
    let excluirFunc = document.getElementById("excluirFunc");
    let editarFunc = document.getElementById("editarFunc");


    btnCadastrar.style.backgroundColor = "darkgray";
    btnListar.style.backgroundColor = "darkgray";
    btnEditar.style.backgroundColor = "darkgray";
    btnRemover.style.backgroundColor = "white";

    cadastroFunc.style.display = "none";
    listarFunc.style.display = "none";
    excluirFunc.style.display = "block";
    editarFunc.style.display = "none";
  }


  return (
    <>
      <div className='index'>
        <Link to={"/"}>
          < h1 > Funcionarios</h1>
        </Link >
        <div className='navFuncGeral'>
          <button className='navFunc' id="btnCadastrar" onClick={cadastrar}>Cadastrar</button>
          <button className='navFunc2' id="btnListar" onClick={listar}>Listar</button>
          <button className='navFunc3' id="btnEditar" onClick={editar}>Editar</button>
          <button className='navFunc4' id="btnRemover" onClick={remover}>Remover</button>
        </div>
        <div className='content'>

          <div className='cadastroFunc' id="cadastrarFunc">

            <div className='cadastro-Func-div'>
              <h2>Nome do Equipamento: </h2>
              <input name="adicionarFuncNome" />
            </div>

            <div>
              <h2>Codigo do Equipamento</h2>
              <input name="adicionarFuncCodigo" />
            </div>

            <div>
              <h2>Validade</h2>
              <input type='date' name="adicionarFuncValidade" />
            </div>
            <button className='adicionarFunc'>
              <span>Adicionar</span>
            </button>
          </div>

          <div className='listarFunc' id="listarFunc">
            <h1>Listar</h1>
            <input name="" />
            <button>
              <span>Listar</span>
            </button>
          </div>

          <div className='editarFunc' id="editarFunc">
            <h1>Editar</h1>
            <input name="" />
            <button>
              <span>Editar</span>
            </button>
          </div>

          <div className='excluirFunc' id="excluirFunc">
            <h1>Excluir</h1>
            <input name="" />
            <button>
              <span>Apagar</span>
            </button>
          </div>

        </div>
      </div >
    </>
  )
}

export default Func