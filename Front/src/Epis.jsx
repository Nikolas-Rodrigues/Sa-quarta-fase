import { useState, useEffect } from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import axios from 'axios';
const host = "http://localhost:3000"


function Epi() {
  const [id, setId] = useState(null)
  const [codigo, setCodigo] = useState(null)
  const [validade, setValidade] = useState(null)
  const [nome, setNome] = useState(null)
  const [epi, setEpis] = useState([])

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.post(`${host}/listarEpi`);
        setEpis(response.data.episResults);
        console.log(response.data.episResults)
      } catch (error) {
        console.error('Erro ao obter dados do backend:', error);
      }
    }

    fetchData();
  }, []);

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
    if (nome == null || codigo == null || validade == null) {
      alert("Faltando dados!")
      return;
    } 
    let disponibilidade = false
    const dados = { nome, codigo, validade, disponibilidade }
    axios.post(`${host}/epi`, dados)
    alert('Salvo com sucesso!');
    document.getElementById("adicionarEpiNome").value = '';
    document.getElementById("adicionarEpiCodigo").value = '';
    document.getElementById("adicionarEpiValidade").value = '';
  }

  function listarBackend() {
    console.log('LISTANDO...')

    axios.post(`${host}/listarEpi`)
   
  }

  function editarBackend() {
    const dadosEdit = { id,nome, codigo, validade}
    
    axios.put(`${host}/editarEpi`, dadosEdit)
    if (nome != null && codigo != null && validade != null && id != null) {
      alert("Epis editado com sucesso")
    } else {
      alert("Erro ao editado Epis")
      return;
    }
    
    document.getElementById("editarValidade").value = '';
    document.getElementById("editarCodigo").value = '';
    document.getElementById("editarNome").value = '';
    document.getElementById("editarId").value = '';

  }

  function removerBackend() {

    if(id > epi.length) {
     alert('ID INVALIDO!')
    } else {
      document.getElementById("apagarEpi").value = '';
      if (id != null) {
        alert("Epi removido com sucesso")
      }
      else {
        alert("Falha ao remover Epi")
      }
  
      let data = JSON.stringify({
        id: id,
  
      });
      let config = {
        method: 'delete',
        url: " http://localhost:3000/apagarEpi",
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
            <div className='dadosEpi'>
            <div>ID</div>
            <div>Nome</div>
            <div>Validade</div>
            <div>Disponibilidade</div>
            </div>
            <ul className='listar1'>
              {epi.map(epi => (
                <li key={epi.id}>
                  <div className='organizar1'>
                    <div className='epiId'>{epi.id}</div>
                    <div className='epiNome'>{epi.nome}</div>
                    <div className='epiValidade'>{epi.validade}</div>
                    <div className='epiDisponibilidade'>{epi.disponibilidade}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className='editarEpi' id="editarEpi">
          <div>
              <h2>Id a modificar: </h2>
              <input type='number' id='editarId' onChange={(evento) => setId(evento.target.value)} />
            </div>

            <div>
              <h2>Nome do equipamento: </h2>
              <input type='text' id='editarNome' onChange={(evento) => setNome(evento.target.value)} />
            </div>

            <div>
              <h2>codigo:</h2>
              <input type='text' id='editarCodigo' onChange={(evento) => setCodigo(evento.target.value)} />
            </div>

            <div>
              <h2>Validade:</h2>
              <input type='date' id='editarValidade' onChange={(evento) => setValidade(evento.target.value)} />
            </div>
            <button className='alterarEpi' onClick={editarBackend}>
              <span>Alterar</span>
            </button>
          </div>

          <div className='excluirEpi' id="excluirEpi">
          <h1>Excluir</h1>
            <input type='number' id="apagarEpi" onChange={(evento) => setId(evento.target.value)} />
            <button onClick={removerBackend}>
              <span>Apagar</span>
            </button>
          </div>

        </div>
      </div>
    </>
  )
}

export default Epi
