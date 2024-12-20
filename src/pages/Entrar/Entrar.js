import { useEffect, useState } from "react";
import style from "./Entrar.module.css";
import { Link, useNavigate } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import UsuarioApi from "../../services/UsuarioApi";
import { TopBarEntrar } from "../../componentes/TopBarEntrar/TopBarEntrar";

export function Entrar() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const [usuarioNome, setUsuarioNome] = useState(''); 
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email || !senha) {
            console.error("Por favor, preencha ambos os campos");
            return;
        }

        try {
            const response = await UsuarioApi.validarLogin(email, senha);
            if (response.success) { 
                localStorage.setItem("usuarioId", response.usuarioId);
                
                console.log("Login bem-sucedido!");
                navigate("/logado"); 
            } else {
                console.error(response.message || "Erro ao tentar fazer login.");
            }
        } catch (error) {
            console.error("Erro ao tentar fazer login:", error);
            alert("Senha incorreta");
        }
    };


    const buscarNomeUsuario = async () => {

            const usuarioId = localStorage.getItem("usuarioId");

            if (!usuarioId) {  // login bem  sucedido if usuario nao logado
                console.error("Usuário não logado");
                return;
            }
        try {
            
            const response = await UsuarioApi.buscarPorId(usuarioId);
            setUsuarioNome(response.nome);
            
        } catch (error) {
            console.error("Erro ao buscar o nome do usuário:", error);
            
        }
    }

    useEffect(() => {
        buscarNomeUsuario()
    }, [])
    

    return (
        <TopBarEntrar>
            <Form onSubmit={handleSubmit}>
                <div className={style.Email_login}>
                    <input
                        className={style.Email}
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Digite seu email"
                        required

                        style={{
                            border: 'none',
                            borderBottom: '2px solid #ccc',
                            outline: 'none',
                            padding: '5px 0',
                            width: '15%',

                        }}
                    />
                    <input
                        className={style.Email}
                        type="password"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                        placeholder="Digite sua senha"
                        required
                        style={{
                            border: 'none',
                            borderBottom: '2px solid #ccc',
                            outline: 'none',
                            padding: '5px 0',
                            width: '15%',

                        }}
                    />
                </div>

                <div className={style.Entrar_button}>
                    <button type="submit"
                    
                    style={{
                        border: 'none',
                        borderBottom: '2px solid #ccc',
                        outline: 'none',
                        padding: '5px 0',
                        width: '15%',
                        cursor: 'pointer',
                        background: 'none',
                        

                    }}
                    >Entrar</button>
                </div>
            </Form>

            <div className={style.Esquci_senha}>
                <Link className={style.Senha} to="/senha">Esqueceu a senha?</Link>
                <Link className={style.criarConta} to="/conta" title="Clique aqui">Criar uma conta</Link>
            </div>
        </TopBarEntrar>
    );
}
