import { Button, Card } from "react-bootstrap";



export function Produtos() {
    return (

        <div className="container mt-4">
            <div className="row g-4">
                {/* Mapeamos os produtos para criar os cards */}
                
                    <div className="col-md-4 mb-4" key={null.id}>
                        <Card style={{ width: '20rem' }} className="d-flex flex-column h-100">
                            <Card.Img variant="top" src={null} />
                            <Card.Body className="p-4 flex-grow-1">
                                <Card.Title>{null.nome}</Card.Title>
                            
                                <Card.Text>{null.descricao}</Card.Text>
                                <h5 className="fw-bold text-primary">{null.preco}</h5>
                                <Button onClick={() => (null)} variant="primary">
                                    Comprar
                                </Button>
                            </Card.Body>
                        </Card>
                    </div>
                
            </div>




        </div>)
}