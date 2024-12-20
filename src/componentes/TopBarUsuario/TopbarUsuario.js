import style from './TopBarUsuario.module.css';
import { Link } from 'react-router-dom';
import { MdOutlineLogout } from "react-icons/md";
import { useState } from 'react';

export function TopBarUsuario({ nomeUsuario, children }) {

    const [menuvisivel, setMenuVisivel] = useState(false);


    const handleToggleMenu = () => {
        setMenuVisivel(!menuvisivel);
    }
    return (
        <div>
            <div className={style.topbar_conteudo}>
                {/* Renderiza o nome do usuário ou o link de "Entrar" */}

                {nomeUsuario ? (
                    <span   onClick={handleToggleMenu}
                    style={{
                        cursor: 'pointer',
                    }}
                     className={style.nome}>
                        Olá, {nomeUsuario}

                        
                        {menuvisivel && (
                            <div className={style.dropdownMenu}>
                                <ul>
                                    <li ><Link  style={{textDecoration: 'none'}} to={"/perfil"}>Perfil</Link></li>
                                    <li ><Link style={{
                                        textDecoration: 'none',
                                        
                                        }} to={"/Conta"}>Conta</Link></li>
                                    
                                </ul>

                            </div>
                        )} 
                        <div className={style.logout}>

                            <Link to={"/"}>
                                <MdOutlineLogout color='white' size={22} />
                            </Link>

                        </div>

                    </span>
                ) : (
                    <Link to="/login" className={style.fonte}>Entrar</Link>

                )}
            </div>
            <div className={style.pagina_conteudo}>
                {children}
            </div>
        </div>
    );
}
