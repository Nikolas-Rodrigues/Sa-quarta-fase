import './Home.css'
import { useEffect,useState } from 'react'
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
    let id = 0;
    
    const dados = { id,nome, codigo, validade }
    axios.post(`${host}/epi`, dados)
    alert('Salvo com sucesso!');
    window.location.reload()
  }

  function listarBackend() {
    console.log('LISTANDO...')
    axios.post(`${host}/listarEpi`)

  }

  function editarBackend() {
    const dadosEdit = { id, nome, codigo, validade }

    axios.put(`${host}/editarEpi`, dadosEdit)
    if (nome != null && codigo != null && validade != null && id != null) {
      alert("Epis editado com sucesso")
    } else {
      alert("Erro ao editado Epis")
      return;
    }
 window.location.reload()

  }

  function removerBackend() {
    console.log('REMOVER frontend')
    let achouId = false;
    epi.forEach((item) => {
      if (item.id == id) {
        console.log(`Achou id ${item.id} com ${id}`)
        achouId = true;
      }
    });

    if (achouId == false || id == null) {
      alert("Falha ao remover Epi")
      return;
    } else {
      alert("REMOVIDO");
      document.getElementById("apagarEpi").value = '';
  
      try {
        axios.delete(`${host}/apagarEpi/${id}`)
      } catch(erro) {
        console.log('ERRO AO APAGAR EPI')
      }
      window.location.reload()
    
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
            <h1>Listar</h1>
            <ul>
              {epi.map(epi => (
                <li key={epi.id}>{epi.id}     {epi.nome} {epi.validade} {epi.disponibilidade}</li>
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
