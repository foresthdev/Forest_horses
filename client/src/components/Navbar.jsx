import React from "react";
import {
  Container,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import logotype from "../assets/logo_horizontal.png";
import perfil from "../assets/perfil.png";
import cart from "../assets/navcart.png";

// anchor del logo a pagina principal wix

function Encabezado() {
  return (
    <div className="Navbar">
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
    </div>
  );
}

export default Encabezado;
