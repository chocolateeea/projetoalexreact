import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const tipoUsuario = localStorage.getItem("tipoUsuario");

  // Verifica se o usuário é Administrador
  console.log(tipoUsuario)
  if (tipoUsuario === "2") {
    
    return children;
  }

  // Redireciona para a página de login ou uma página genérica

}

export default ProtectedRoute;
