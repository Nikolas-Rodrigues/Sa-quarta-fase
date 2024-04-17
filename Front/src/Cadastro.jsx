import './Home.css'



function Epi() {
   


  return (
    <>
      <div className='index'>
        <h1>Registra uso de Epi</h1>
        
        
        <div className='todo'>
        
          <div  id="cadastrarEpi">

            <div >
              <h3>IdFuncionario: </h3>
              <input type='number' name="adicionarEpiNome" />
            </div>

            <div>
              <h3>IdEpi:</h3>
              <input type='number' name="adicionarEpiCodigo" />
            </div>

            <div>
              <h3>Retirada:</h3>
              <input type='date' name="adicionarEpiValidade" />
            </div>

            <div>
              <h3>Entrega:</h3>
              <input type='date' name="adicionarEpiValidade" />
              
            </div>
            <button className='adicionarEpi'>
              <span>Adicionar</span>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Epi
