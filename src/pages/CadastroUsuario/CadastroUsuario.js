import { useState } from "react";
import { TopBar } from "../../componentes/TopBar";
import style from "./CadastroUsuario.module.css";
import UsuarioApi from "../../services/UsuarioApi";
import { useNavigate } from "react-router-dom";
import Form from 'react-bootstrap/Form';

export function CadastroUsuario() {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [nome, setnome] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (isFormValid()) {
            await UsuarioApi.criarAsync(nome, email, senha);
            console.log("aquii", nome, email, senha)
            navigate("/");

        } else {
            alert("Por favor, preencha todos os campos.");
        }
    }

    const isFormValid = () => {
        return nome && email && senha;
    };
    return (
        <TopBar>
            <Form onSubmit={handleSubmit}>
                <div className={style.Email_login}>
                    <input
                        className={style.Email}
                        type="text"
                        value={nome}
                        onChange={(e) => setnome(e.target.value)}
                        placeholder="Digite seu nome"
                        required
                        style={{
                            border: 'none',
                            borderBottom: '2px solid #ccc',
                            outline: 'none',
                            padding: '5px 0',
                            width: '15%',

                        }}

                    ></input>



                    <input
                        className={style.Email}
                        type="text"
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

                    ></input>
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

                    ></input>



                </div>

                <div className={style.Entrar_button}>
                <button
                    type="submit"


                    style={{
                        border: 'none',
                        background: 'none',
                        padding: '5px 0',
                        cursor: 'pointer',
                    }}

                >Continuar</button>
            </div>


            </Form>

        


        </TopBar>
    )
}