import { useEffect, useState } from 'react';
import style from './TopBarEntrar.module.css';
import { Search, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import UsuarioApi from '../../services/UsuarioApi';
import ProtectedRoute from '../../ProtectedRoute';


export function TopBarEntrar({ children, setPesquisaValor, pesquisaValor}) {

    const [carrinho, setCarrinho] = useState([])


    const adicionarCarrinho = (produto) => {
        setCarrinho((prevCarrinho) => [...prevCarrinho, produto]);
    };

  

    const [usuario, setUsuario] = useState({});

    const Id = localStorage.getItem("usuarioId");

    const buscarNomeUsuario = async () => {
        try {
            const resposta = await UsuarioApi.obterAsync(Id)
            setUsuario(resposta);

        } catch (error) {
            console.error("Erro ao buscar o nome do usuário:", error);

        }
    }

    useEffect(() => {
        buscarNomeUsuario()
    }, [Id])

    return (
        <div>
            <div className={style.topo_conteudo}>
                <div className={style.logo}>
                    <h1>Pro2 Adesivos</h1>
                </div>

                <div className={style.pesquisa}>

                    <input
                        type="text"
                        placeholder="Pesquisar..."
                        value={pesquisaValor}
                        onChange={(e) => setPesquisaValor(e.target.value)}
                    />
                    <Search id='icon-pesquisa' size={20} className={style.icon} />
                </div>
                
                <ul className={style.top_bar_intens}>
                     <ProtectedRoute>
                        <li className="item-nav">
                        <Link to="/admin" className="link-nav">
                       Administrador
                         </Link>
                      </li>
                     </ProtectedRoute> 
                    <li className={style.item_topbar}>
                        <Link to="/login" className={style.link}>
                            {usuario.nome}
                        </Link>
                    </li>
                    <li className="item-nav">
                        <Link to="/produtos" className={style.link}>
                            Produtos
                        </Link>
                    </li>
                    <li className="item-nav">
                        <Link to="/IA" className={style.link}>
                            DuvidasIA
                        </Link>
                    </li>
                    <li className="item-nav">
                        <button className={style.botao_carrinho}>
                            <ShoppingCart />
                            <span className="contagem-carrinho"> {carrinho.length}</span>
                        </button>
                    </li>
                </ul>
            </div>

            <div className={style.pagina_conteudo}>
                {children}

            </div>
        </div>
    );
}
