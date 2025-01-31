import { useEffect, useState } from 'react';

import style from "./Topbarlogin.module.css";

import { Link } from 'react-router-dom';



export function TopBarLogin({ children }) {

    const [carrinho, setCarrinho] = useState([])
    const [pesquisa, setPesquisa] = useState('');

    const adicionarCarrinho = (produto) => {
        setCarrinho((prevCarrinho) => [...prevCarrinho, produto]);
    };


    return (
        <div>
            <div className={style.topo_conteudo}>
                <div className={style.logo}>
                    <h1>Pro2 Adesivos</h1>
                </div>

                <ul className={style.top_bar_intens}>
                    {/* <ProtectedRoute>
                        <li className="item-nav">
                        <Link to="/admin" className="link-nav">
                       Administrador
                         </Link>
                      </li>
                     </ProtectedRoute> */}
                    <li className={style.item_topbar}>
                        <Link to="/login" className={style.link}>
                            Login
                        </Link>
                    </li>
                 
                    <li className="item-nav">
                        <Link to="/DuvidasIA" className={style.link}>
                            DuvidasIA
                        </Link>
                    </li>
                 
                </ul>
            </div>

            <div className={style.pagina_conteudo}>
                {children}

            </div>
        </div>
    );
}