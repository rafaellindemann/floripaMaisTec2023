import { createContext, useState } from "react";

// 1. Criar o contexto
const AuthContext = createContext();

// 2. Criar o provedor de contexto
function AuthContextProvider({ children }) {
 const [user, setUser] = useState(null);

 const login = (username) => {
  // Lógica de autenticação aqui
  setUser(username);
 };

 const logout = () => {
  // Lógica de logout aqui
  setUser(null);
 };

 return (
  <AuthContext.Provider value={{ user, login, logout }}>
   {children}
  </AuthContext.Provider>
 );
}

export { AuthContextProvider, AuthContext };
