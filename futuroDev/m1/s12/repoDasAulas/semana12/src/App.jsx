import Navbar from "./components/Navbar";
import {Outlet} from "react-router-dom"
import {UsuariosContextProvider} from "./context/UsuariosContext"
import Footer from "./components/Footer";

function App(){
  return (
    <UsuariosContextProvider>
      <Navbar />

      <Outlet />


     <Footer />
      {/* <footer>
        footerzin
      </footer> */}
    </UsuariosContextProvider>
  )
}

export default App;