import { useState, useEffect } from 'react';
import { Footer } from '../../componentes/Footer/Footer';
import { TopBarEntrar } from '../../componentes/TopBarEntrar/TopBarEntrar';
import { Button, Card } from 'react-bootstrap';
import Black from '../../assets/Black.jpg';
import { FaRegStar, FaStar } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import style from './Carrinho.module.css';

export function Carrinho() {

    const [produtosRecuperados, setProdutosRecuperados] = useState(JSON.parse(localStorage.getItem("Carrinho")) || []);
    const navigate = useNavigate();

    const renderizarEstrelas = (nota) => {
        return [...Array(5)].map((_, i) => i < nota ? <FaStar key={i} color="#FFD700" /> : <FaRegStar key={i} color="#CCCCCC" />);
    };

    function Pagina() {
        navigate("/");
    }

    const removerDoCarrinho = (produtoId) => {
        const produtosAtualizados = [...produtosRecuperados];
        const index = produtosAtualizados.findIndex(produto => produto.id === produtoId);

        if (index !== -1) {
            produtosAtualizados.splice(index, 1); // Remove apenas UM item do array
            setProdutosRecuperados(produtosAtualizados);
            localStorage.setItem("Carrinho", JSON.stringify(produtosAtualizados));
        }
    };

    const calcularTotalCarrinho = () => {
        return produtosRecuperados.reduce((acumulador, produto) => acumulador + produto.preco, 0).toFixed(2);
    };

    return (
        <TopBarEntrar carrinho={produtosRecuperados} setPesquisaValor='' pesquisaValor=''>
            {/* Flexbox Container para garantir o footer na parte inferior */}
            <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
                <div style={{ flex: 1 }}>
                    <div className="container mt-4">
                        <div className="row g-4">
                            {produtosRecuperados.map((produto) => (
                                <div className="col-md-4 mb-4" key={produto.id}>
                                    <Card style={{ width: '20rem' }}>
                                        <Card.Img variant="top" src={Black} />
                                        <Card.Body>
                                            <Card.Title>{produto.nome}</Card.Title>
                                            <div className="d-flex align-items-center mb-2">
                                                {renderizarEstrelas(produto.nota)}
                                            </div>
                                            <Card.Text>{produto.descricao}</Card.Text>
                                            <h5 className="fw-bold text-primary">R$ {produto.preco}</h5>
                                            <Button variant="danger" onClick={() => removerDoCarrinho(produto.id)}>
                                                Remover do Carrinho
                                            </Button>
                                        </Card.Body>
                                    </Card>
                                </div>
                            ))}
                        </div >
                        <div className={style.botao}>
                            <Button onClick={Pagina} variant="success" className="mt-3">Finalizar Compra</Button>
                        </div>


                        <div className={style.valor_total} style={{ textAlign: 'center', marginTop: '20px' }}>
                            <h3>Total: R$ {calcularTotalCarrinho()}</h3>
                        </div>
                    </div>
                </div>

                {/* Rodapé sempre estará na parte inferior */}
                <Footer />
            </div>
        </TopBarEntrar>
    );
}
