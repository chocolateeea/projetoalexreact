
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Entrar } from "./pages/Entrar/Entrar";
import { CadastroUsuario } from "./pages/CadastroUsuario/CadastroUsuario";
import { Senha } from "./pages/EsqueciMinhaSenha/Senha";
import { Logado } from "./pages/Logado/Logado";



function App() {
  return (
    <BrowserRouter>
      <Routes>
     
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Entrar />} />
        <Route path="conta/Entrar" element={<Entrar />} />
        <Route path="Conta" element={<CadastroUsuario />} />
        <Route path="senha" element={<Senha />} />
        <Route path="logado" element={<Logado />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
