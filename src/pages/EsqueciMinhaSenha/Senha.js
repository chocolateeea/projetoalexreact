import { Form } from 'react-bootstrap';
import { TopBar } from '../../componentes/TopBar';
import style from './Senha.module.css';
import { useState } from "react";

export function Senha() {
    const [email, setEmail] = useState('');


  
    return (

        <TopBar>
            <Form>

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

                    ></input>
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
                    >Enviar</button>
                </div>

            </Form>

        </TopBar>
    )
}