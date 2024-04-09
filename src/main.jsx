import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Home.jsx'
import Epi from './Epis.jsx'
import Func from './Func.jsx'
import HApi from './HistoricoApi.jsx'
import HFunc from './HistoricoFunc.jsx'
import Cadastro from './Cadastro.jsx'


const paginas = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/Funcionarios', element: <Func /> },
  { path: '/Epi', element: <Epi /> },
  { path: '/Api', element: <HApi /> },
  { path: '/HFunc', element: <HFunc /> },
  { path: '/Cadastro', element: <Cadastro /> },




])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={paginas}></RouterProvider>,
)
