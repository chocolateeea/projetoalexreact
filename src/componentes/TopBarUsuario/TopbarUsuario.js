import style from './TopBarUsuario.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { MdOutlineLogout } from "react-icons/md";
import { useState } from 'react';

export function TopBarUsuario({ nomeUsuario, children }) {



    const [menuvisivel, setMenuVisivel] = useState(false);

    const navigate = useNavigate();
    function Deslogar() {
        localStorage.removeItem('usuarioId');
        
        navigate('/');
    }

    const handleToggleMenu = () => {
        setMenuVisivel(!menuvisivel);
    }
    return (
        <div>
            <div className={style.topbar_conteudo}>
                {/* Renderiza o nome do usuário ou o link de "Entrar" */}

                {nomeUsuario ? (
                    <span onClick={handleToggleMenu}
                        style={{
                            cursor: 'pointer',
                        }}
                        className={style.nome}>
                        Olá, {nomeUsuario}


                        {menuvisivel && (
                            <div className={style.dropdownMenu}>
                                <ul>
                                    <li ><Link style={{
                                        textDecoration: 'none',
                                        color: 'black'
                                    }} to={"/perfil"}>Perfil</Link></li>


                                    <li ><Link style={{
                                        textDecoration: 'none',
                                        color: 'black'

                                    }} to={"/Conta"}>Conta</Link></li>

                                    <li ><Link style={{
                                        textDecoration: 'none',
                                        color: 'black'

                                    }} to={"/Conta"}>Carrinho</Link></li>

                                </ul>

                            </div>
                        )}


                    </span>
                ) : (
                    <Link to="/login" className={style.fonte}>Entrar</Link>


                )}
                <div className={style.logout}>

                    <button  className ={style.deslogar} onClick={Deslogar}>
                        <MdOutlineLogout color='white' size={22} />
                    </button>

                </div>
            </div>
            <div className={style.pagina_conteudo}>
                {children}
            </div>
        </div>
    );
}
