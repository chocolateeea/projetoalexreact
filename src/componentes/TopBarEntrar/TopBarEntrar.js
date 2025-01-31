import { useEffect, useState } from 'react';
import style from './TopBarEntrar.module.css';
import { Search, ShoppingCart } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import UsuarioApi from '../../services/UsuarioApi';
import ProtectedRoute from '../../ProtectedRoute';



export function TopBarEntrar({ carrinho, children, setPesquisaValor, pesquisaValor }) {

    const [usuario, setUsuario] = useState({});
  
    const navigate = useNavigate()

   
   
  

    const buscarNomeUsuario = async () => {
        const Id = localStorage.getItem("idUsuario");

        try {
            const resposta = await UsuarioApi.obterAsync(Id)
           
            setUsuario(resposta);

        } catch (error) {
            console.error("Erro ao buscar o nome do usuário:", error);
        }
    };
    // const produtosFiltrados = produtos.filter(produto =>
    //     produto.nome.toLowerCase().startsWith(pesquisaValor.toLowerCase())
    // );

    useEffect(() => {
        buscarNomeUsuario();
    }, []);

    return (
        <div>
            <div className={style.topo_conteudo}>
                <div className={style.logo_pesquisa}>
                    <div className={style.logo}>
                        <Link to='/' className={style.link_botao}>
                            <h1>Pro2 Adesivos</h1>
                        </Link>

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
                </div>

                <ul className={style.top_bar_intens}>
                    <ProtectedRoute>
                        <li className="item-nav">
                            <Link to="/admin" className={style.link}>
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

                    {/* Usando o Link para navegar para a página de carrinho */}
                    <li className="item-nav">
                        <Link to="/carrinho" className={style.link}>
                            <button className={style.botao_carrinho}>
                                <ShoppingCart />
                                <span className="contagem-carrinho"> {carrinho.length}</span>
                            </button>
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
