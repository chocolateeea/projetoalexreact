import React from 'react';
import { Container, Row, Col, Navbar, Nav, Button } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

export function Footer() {
    return (
        <Navbar bg="dark" variant="dark" className="py-4 mt-4">
            <Container>
                <Row className="w-100">
                    {/* Coluna de links de navegação */}
                    <Col className="d-flex justify-content-center mb-3 mb-md-0">
                        <Nav className="mr-auto">
                            <Nav.Link href="#home" className="text-light">Home</Nav.Link>
                            <Nav.Link href="#about" className="text-light">Sobre</Nav.Link>
                            <Nav.Link href="#contact" className="text-light">Contato</Nav.Link>
                        </Nav>
                    </Col>

                    {/* Coluna de ícones de redes sociais */}
                    <Col className="d-flex justify-content-center">
                        <Button variant="link" href="https://facebook.com" target="_blank" className="text-light">
                            <FaFacebook size={30} />
                        </Button>
                        <Button variant="link" href="https://twitter.com" target="_blank" className="text-light">
                            <FaTwitter size={30} />
                        </Button>
                        <Button variant="link" href="https://instagram.com" target="_blank" className="text-light">
                            <FaInstagram size={30} />
                        </Button>
                    </Col>
                </Row>
            </Container>
        </Navbar>
    );
}
