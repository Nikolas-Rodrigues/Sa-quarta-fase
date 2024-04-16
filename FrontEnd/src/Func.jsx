import { useEffect, useState } from 'react'
import './Home.css'
import { Link } from 'react-router-dom';
import axios from 'axios';
const host = "http://localhost:3000"

function Func() {
  const [nome, setNome] = useState(null)
  const [cpf, setCpf] = useState(null)
  const [cargo, setCargo] = useState(null)
  const [id, setId] = useState(null)



  function adicionar() {
    const dados = { nome, cpf, cargo }
    axios.post(`${host}/funcionario`, dados)
  }
  function apagar() {
    const dados1 = { id }
    axios.delete(`${host}/funcionario`, dados1)
  }
  function listar() {

    axios.get(`${host}/funcionario`)

  }
  function editar() {
    console.log(nome, cpf, cargo)
    const dados3 = { id, nome, cpf, cargo }
    axios.put(`${host}/funcionario`, dados3)

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
            <button className='adicionarFunc' onClick={listar}>
              <span>Butão</span>
            </button>
          </div>

          <div className='editarFunc' id="editarFunc">

            <div>
              <h2>Id a modificar: </h2>
              <input type='number' onChange={(evento) => setNome(evento.target.value)} />
            </div>



            <div>
              <h2>Nome: </h2>
              <input type='number' onChange={(evento) => setNome(evento.target.value)} />
            </div>

            <div>
              <h2>CPF:</h2>
              <input type='number' onChange={(evento) => setCpf(evento.target.value)} />
            </div>

            <div>
              <h2>Cargo:</h2>
              <input type='text' onChange={(evento) => setCargo(evento.target.value)} />
            </div>
            <button className='adicionarFunc' onClick={editar}>
              <span>Adicionar</span>
            </button>
          </div>

          <div className='excluirFunc' id="excluirFunc">
            <h1>Excluir</h1>
            <input name="apagarFuncId" onChange={(evento) => setId(evento.target.value)} />
            <button onClick={apagar}>
              <span>Apagar</span>
            </button>
          </div>

        </div>
      </div >
    </>
  )
}

export default Func