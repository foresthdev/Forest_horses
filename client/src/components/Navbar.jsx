import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import logotype from "../assets/logo_horizontal.png";
import perfil from "../assets/perfil.png";
import cart from "../assets/navcart.png";
import { Link } from "react-router-dom";

// anchor del logo a pagina principal wix

function Encabezado() {
  return (
    <div className="Navbar">
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand className="NvBrand">
            <Link to="/">
              <img
                className="logo"
                src={logotype}
                alt="logo"
                style={{ width: "6em" }}
              />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Nav.Link>
                <Link
                  to="/"
                  style={{ textDecoration: "none", color: "#4A4A4B" }}
                >
                  Botiga Solidària
                </Link>
              </Nav.Link>

              <Nav.Link
                href="https://foresthorses.wixsite.com/foresthorses/l-associaci%C3%B3"
                target="_blank"
                style={{ textDecoration: "none", color: "#4A4A4B" }}
              >
                Associació
              </Nav.Link>
              <Nav.Link>
                <Link
                  to="cataleg"
                  style={{ textDecoration: "none", color: "#4A4A4B" }}
                >
                  Catàleg
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  to="apadrina"
                  style={{ textDecoration: "none", color: "#4A4A4B" }}
                >
                  Apadrina
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  to="donacions"
                  style={{ textDecoration: "none", color: "#4A4A4B" }}
                >
                  Donacions
                </Link>
              </Nav.Link>
              <img
                className="perfil"
                alt="profile"
                src={perfil}
                style={{ width: "2em", height: "2em" }}
              />
              <NavDropdown title="" id="collasible-nav-dropdown">
                <NavDropdown.Item >
                  <Link to="lesmevesdades">El meu prefil</Link>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Historial
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  <Link to="login">Tancar sessió</Link>
                </NavDropdown.Item>
              </NavDropdown>
              <Navbar.Brand className="NvBrand">
                <Link to="carrito">
                  <img
                    className="cart"
                    src={cart}
                    alt="cart"
                    style={{ width: "2em" }}
                  />
                </Link>
              </Navbar.Brand>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Encabezado;
