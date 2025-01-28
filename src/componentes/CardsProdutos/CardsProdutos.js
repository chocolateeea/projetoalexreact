import React, { use, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import product from '../../assets/produtos.png'; // Coloque a imagem real aqui
import { FaStar, FaRegStar } from 'react-icons/fa';
import { TopBarEntrar } from '../TopBarEntrar/TopBarEntrar';

export function CardsProdutos() {
    // Função para renderizar estrelas com base na pontuação
    const renderizarEstrelas = (nota) => {
        const estrelas = [];
        for (let i = 1; i <= 5; i++) {
            estrelas.push(i <= nota ? <FaStar key={i} color="#FFD700" /> : <FaRegStar key={i} color="#CCCCCC" />);
        }
        return estrelas;
    };


    // Dados dos produtos
    const produtos = [
        { id: 1, nome: "Adesivo Carbono", preco: "R$ 39,90", nota: 4, descricao: "Adesivo de alta qualidade, ideal para personalização e decoração." },
        { id: 2, nome: "Adesivo Madeira", preco: "R$ 59,90", nota: 5, descricao: "Adesivo texturizado com aparência de madeira natural." },
        { id: 3, nome: "Adesivo Fosco", preco: "R$ 29,90", nota: 3, descricao: "Adesivo fosco com acabamento premium, ideal para um visual moderno." },
        { id: 4, nome: "Adesivo Transparente", preco: "R$ 25,90", nota: 4, descricao: "Adesivo transparente ideal para proteção e personalização." },
        { id: 5, nome: "Adesivo 3D", preco: "R$ 49,90", nota: 5, descricao: "Adesivo com efeito 3D para um visual impactante." },
        { id: 6, nome: "Adesivo Vinílico", preco: "R$ 34,90", nota: 4, descricao: "Adesivo vinílico de alta resistência para diversas aplicações." },
    ];

    // Estado para o carrinho
    const [carrinho, setCarrinho] = useState([]);

    // Função para adicionar o produto ao carrinho
    const adicionarAoCarrinho = (produto) => {
        setCarrinho([...carrinho, produto]); // Adiciona o produto ao carrinho
    };

    return (


        <div className="container mt-4">
            <div className="row g-4">
                {/* Mapeamos os produtos para criar os cards */}
                {produtos.map((produto) => (
                    <div className="col-md-4 mb-4" key={produto.id}>
                        <Card style={{ width: '20rem' }} className="d-flex flex-column h-100">
                            <Card.Img variant="top" src={product} />
                            <Card.Body className="p-4 flex-grow-1">
                                <Card.Title>{produto.nome}</Card.Title>
                                <div className="d-flex align-items-center mb-2">
                                    {renderizarEstrelas(produto.nota)}
                                    <span className="ms-2">({produto.nota}.0)</span> {/* Exibe a nota do produto */}
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
