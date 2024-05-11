import {createBrowserRouter} from 'react-router-dom'

// importação das páginas
import App from '../App.jsx'
import Home from "../pages/Home.jsx"
import Cadastro from "../pages/Cadastro.jsx"
import Lista from "../pages/Lista.jsx"
import Login from "../pages/Login.jsx"

const routers = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  { 
    path: "/",
    element: <App />,
    errorElement: <div>Not Found</div>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/cadastro",
        element: <Cadastro />,
      },
      {
        path: "/lista-trilhas",
        element: <Lista />,
      }
    ]
  }
])

export default routers  