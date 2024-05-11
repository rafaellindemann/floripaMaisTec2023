import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import Home from './pages/Home.jsx'
import Cadastro from './pages/Cadastro.jsx'
import Lista from './pages/Lista.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/cadastro',
    element: <Cadastro />,
  },
  {
    path: '/lista',
    element: <Lista />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  <RouterProvider router={router}>

  </RouterProvider>
)
