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





  function adicionar() {//Perfeito
    const dadosCad = { nome, cpf, cargo }
    axios.post(`${host}/funcionario`, dadosCad)
    document.getElementById("adicionarFuncNome").value = '';
    document.getElementById("adicionarFuncCpf").value = '';
    document.getElementById("adicionarFuncCargo").value = '';
    if (nome != null && cpf != null && cargo != null) {
      alert("Funcionario inserido com sucesso")
    } else {
      alert("Erro ao inserir funcionario")
    }
  }

  function listar() {
    axios.get(`${host}/funcionario`)
  }

  function editar() {//Perfeito

    console.log(id, nome, cpf, cargo)
    const dadosEdit = { id, nome, cpf, cargo }
    axios.put(`${host}/funcionario`, dadosEdit)
    document.getElementById("EditarFuncNome").value = '';
    document.getElementById("EditarFuncCpf").value = '';
    document.getElementById("EditarFuncCargo").value = '';
    document.getElementById("EditarFuncId").value = '';
    if (nome != null && cpf != null && cargo != null && id != null) {
      alert("Funcionario editado com sucesso")
    } else {
      alert("Erro ao editado funcionario")
    }


  }

  function apagar() {
    document.getElementById("apagarFuncId").value = '';
    if (id != null) {
      alert("Funcionario removido com sucesso")
    }
    else {
      alert("Falha ao remover funcionario")
    }


    
    let data = JSON.stringify({
      id: id,

    });
    let config = {
      method: 'delete',
      url: " http://localhost:3000/funcionario",
      headers: {
        'Content-Type': 'application/json',
      },
      data: data
    }
    axios.request(config)
      .then((response) => {
        console.log(response.data);

      })
      .catch((error) => {
        console.log(error);
      });


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
              <input type='text' id="adicionarFuncNome" onChange={(evento) => setNome(evento.target.value)} />
            </div>

            <div>
              <h2>CPF:</h2>
              <input type="number" id="adicionarFuncCpf" onChange={(evento) => setCpf(evento.target.value)} />
            </div>

            <div>
              <h2>Cargo:</h2>
              <input type='text' id="adicionarFuncCargo" onChange={(evento) => setCargo(evento.target.value)} />
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
              <input type='number' id='EditarFuncId' onChange={(evento) => setId(evento.target.value)} />
            </div>

            <div>
              <h2>Nome: </h2>
              <input type='text' id='EditarFuncNome' onChange={(evento) => setNome(evento.target.value)} />
            </div>

            <div>
              <h2>CPF:</h2>
              <input type='number' id='EditarFuncCpf' onChange={(evento) => setCpf(evento.target.value)} />
            </div>

            <div>
              <h2>Cargo:</h2>
              <input type='text' id='EditarFuncCargo' onChange={(evento) => setCargo(evento.target.value)} />
            </div>
            <button className='adicionarFunc' onClick={editar}>
              <span>Adicionar</span>
            </button>
          </div>

          <div className='excluirFunc' id="excluirFunc">
            <h1>Excluir</h1>
            <input type='number' id="apagarFuncId" onChange={(evento) => setId(evento.target.value)} />
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