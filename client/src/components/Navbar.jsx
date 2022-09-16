import React from "react";
import { Link } from "react-router-dom";
import {Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import logotype from '../assets/logo_forest.png';
import perfil from '../assets/perfil.png';
import { BsFillCartFill } from "react-icons/bs";

// anchor del logo a pagina principal

function Encabezado() {
  return (
    <div className="Navbar">
     <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand className="NvBrand"><Link to="/"><img className= "logo" src={logotype} style={{width: "4em", height: "4em"}}/></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link href="#features">Features</Nav.Link> */}
          </Nav>
          <Nav>
          <Nav.Link href="https://foresthorses.wixsite.com/foresthorses/l-associaci%C3%B3" target="_blank" style={{textDecoration: "none", color: "#4A4A4B"}}>Associació</Nav.Link>
          <Nav.Link to="cataleg"><Link to="cataleg" style={{textDecoration: "none", color: "#4A4A4B"}}>Catàleg</Link></Nav.Link>
          <Nav.Link to="apadrina"><Link to="apadrina" style={{textDecoration: "none", color: "#4A4A4B"}}>Apadrina</Link></Nav.Link>
          <img className= "perfil" src= {perfil} style={{width: "2em", height: "2em"}}/> 
            <NavDropdown title= "" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">El meu prefil</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Historial</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Tancar sessió
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link eventKey={2} href="#memes"><Link to="carrito" style={{textDecoration: "none", color: "#4A4A4B"}}><BsFillCartFill /></Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>

 
  );
}

export default Encabezado;

