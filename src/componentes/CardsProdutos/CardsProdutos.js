import React, { use, useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import product from '../../assets/produtos.png'; // Coloque a imagem real aqui
import { FaStar, FaRegStar } from 'react-icons/fa';
import ProdutosApi from '../../services/ProdutosApi';

export function CardsProdutos({ pesquisaValor }) {

    const [produto, setProdutos] = useState([]);

    async function CarregarProdutos() {
        try {
           
            const listaProdutos = await ProdutosApi.listarProdutosAsync(true);
          
            setProdutos(listaProdutos)
           
        } catch (error) {
            console.error("Erro ao carregar usuários:", error);
        }
    }


    // Função para renderizar estrelas com base na pontuação
    const renderizarEstrelas = (nota) => {
        const estrelas = [];
        for (let i = 1; i <= 5; i++) {
            estrelas.push(i <= nota ? <FaStar key={i} color="#FFD700" /> : <FaRegStar key={i} color="#CCCCCC" />);
        }
        return estrelas;
    };


    // Dados dos produtos
  

    // Estado para o carrinho
    const [carrinho, setCarrinho] = useState([]);

    // Função para adicionar o produto ao carrinho
    const adicionarAoCarrinho = (produto) => {
        setCarrinho([...carrinho, produto]); // Adiciona o produto ao carrinho
    };

    //Filtro de pesquisaValor em produtos

    const produtosFiltrados = produto.filter(produto =>
        produto.nome.toLowerCase().startsWith(pesquisaValor.toLowerCase())
    );

    useEffect(() =>{
        CarregarProdutos()
    },[])

    return (


        <div className="container mt-4">
            <div className="row g-4">
                {/* Mapeamos os produtos para criar os cards */}
                {produtosFiltrados.map((produto) => (
                    <div className="col-md-4 mb-4" key={produto.id}>
                        <Card style={{ width: '20rem' }} className="d-flex flex-column h-100">
                            <Card.Img variant="top" src={product} />
                            <Card.Body className="p-4 flex-grow-1">
                                <Card.Title>{produto.nome}</Card.Title>
                                <div className="d-flex align-items-center mb-2">
                                    {renderizarEstrelas(produto.nota)}
                                    <span className="ms-2">({produto.nota}.3)</span> {/* Exibe a nota do produto */}
                                </div>
                                <Card.Text>{produto.descricao}</Card.Text>
                                <h5 className="fw-bold text-primary">{produto.preco}</h5>
                                <Button onClick={() => adicionarAoCarrinho(produto)} variant="primary">
                                    Comprar
                                </Button>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </div>



            {/* Exibir a contagem de itens no carrinho */}
            <div className="mt-4">
                <h4>Carrinho de Compras</h4>
                <p>Total de produtos: {carrinho.length}</p> {/* Exibe o número total de produtos no carrinho */}
                <Button variant="success" onClick={() => alert('Ir para o carrinho')}>
                    Ver Carrinho ({carrinho.length} itens) {/* Exibe a quantidade de itens no carrinho */}
                </Button>

                {/* Exibir os produtos no carrinho */}
                <div className="mt-3">
                    <h5>Produtos no Carrinho:</h5>
                    <ul>
                        {carrinho.map((produto, index) => (
                            <li key={index}>
                                {produto.nome} - {produto.preco}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
