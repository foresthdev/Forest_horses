import React from "react";
<<<<<<< HEAD
import {
  Container,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import logotype from "../assets/logo_horizontal.png";
import perfil from "../assets/perfil.png";
import cart from "../assets/navcart.png";
=======
import { Link } from "react-router-dom";
import {Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import logotype from '../assets/logo_forest.png';
import perfil from '../assets/perfil.png';
import { BsFillCartFill } from "react-icons/bs";
>>>>>>> 57107849f31a0fa6caa96212dc3412f160fd5491

// anchor del logo a pagina principal wix

function Encabezado() {
  return (
    <div className="Navbar">
<<<<<<< HEAD
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand className="NvBrand">
            <img
              className="logo"
              src={logotype}
              alt="logo"
              style={{ width: "6em" }}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Nav.Link href="#pricing">Associació</Nav.Link>
              <Nav.Link href="#pricing">Catàleg</Nav.Link>
              <Nav.Link href="#pricing">Apadrina</Nav.Link>
              <img
                className="perfil"
                alt="profile"
                src={perfil}
                style={{ width: "2em", height:"2em" }}
              />
              <NavDropdown title="" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  El meu prefil
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Historial
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Tancar sessió
                </NavDropdown.Item>
              </NavDropdown>
              <Navbar.Brand className="NvBrand">
                <img
                  className="cart"
                  src={cart}
                  alt="cart"
                  style={{ width: "2em" }}
                />
              </Navbar.Brand>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
=======
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
>>>>>>> 57107849f31a0fa6caa96212dc3412f160fd5491
    </div>
  );
}

export default Encabezado;
