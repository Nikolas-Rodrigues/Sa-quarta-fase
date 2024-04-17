import { useState } from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import axios from 'axios';
const host = "http://localhost:3000"


function Epi() {
  const [id, setId] = useState(null)
  const [codigo, setCodigo] = useState(null)
  const [validade, setValidade] = useState(null)
  const [nome, setNome] = useState(null)

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

    listarBackend();
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

  function adicionar() {
    console.log(nome, codigo, validade)
    let disponibilidade = false
    const dados = { nome, codigo, validade ,disponibilidade}
    axios.post(`${host}/epi`, dados)
    alert('Salvo com sucesso!');
    document.getElementById("adicionarEpiNome").value = '';
    document.getElementById("adicionarEpiCodigo").value = '';
    document.getElementById("adicionarEpiValidade").value = '';
  }

  function listarBackend() {
    console.log('LISTANDO...')
    axios.post(`${host}/listarEpi`, )
  }
  return (
    <>
      <div className='index'>
      <Link to={"/"}>
          <h1> Epis</h1>
        </Link >

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
                <input id="adicionarEpiNome" onChange={(evento) => setNome(evento.target.value)} />
              </div>

              <div>
                <h2>Codigo do Equipamento</h2>
                <input id="adicionarEpiCodigo" onChange={(evento) => setCodigo(evento.target.value)} />
              </div>

              <div>
                <h2>Validade</h2>
                <input type='date' id="adicionarEpiValidade" onChange={(evento) => setValidade(evento.target.value)} />
              </div>
              <button className='adicionarEpi' onClick={adicionar}>
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
