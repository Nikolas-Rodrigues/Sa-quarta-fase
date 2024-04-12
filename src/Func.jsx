import { useEffect, useState } from 'react'
import './Home.css'
import { Link } from 'react-router-dom';





function Func() {
  const [nome, setNome] = useState(null)
  const [cpf, setCpf] = useState(null)
  const [cargo, setCargo] = useState(null)
  const [id, setId] = useState(null)



  function adicionar() {
    console.log(nome, cpf, cargo)



  }




  function cadastrarAba() {
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
  function listarAba() {
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

  function editarAba() {
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
  function removerAba() {
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
          <h1> Funcionarios</h1>
        </Link >
        <div className='navFuncGeral'>
          <button className='navFunc' id="btnCadastrar" onClick={cadastrarAba}>Cadastrar</button>
          <button className='navFunc2' id="btnListar" onClick={listarAba}>Listar</button>
          <button className='navFunc3' id="btnEditar" onClick={editarAba}>Editar</button>
          <button className='navFunc4' id="btnRemover" onClick={removerAba}>Remover</button>
        </div>
        <div className='content'>

          <div className='cadastroFunc' id="cadastrarFunc">

            <div>
              <h2>Nome: </h2>
              <input name="adicionarFuncNome" onChange={(evento) => setNome(evento.target.value)} />
            </div>

            <div>
              <h2>CPF:</h2>
              <input name="adicionarFuncCodigo" onChange={(evento) => setCpf(evento.target.value)} />
            </div>

            <div>
              <h2>Cargo:</h2>
              <input type='text' name="adicionarFuncValidade" onChange={(evento) => setCargo(evento.target.value)} />
            </div>
            <button className='adicionarFunc' onClick={adicionar}>
              <span>Adicionar</span>
            </button>
          </div>

          <div className='listarFunc' id="listarFunc">
            <h1>Listar Funcionarios</h1>

            <span></span>

          </div>

          <div className='editarFunc' id="editarFunc">
            <h1>Editar Id:</h1>
            <input type='number' />
            <div>
              <h2>Nome</h2>
              <input type="number" />
            </div>
            <div>
              <h2>CPF</h2>
              <input type="number" />
            </div>
            <div>
              <h2>Cargo</h2>
              <input type="number" />
            </div>

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