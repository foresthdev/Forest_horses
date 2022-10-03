import React from "react";
import "../App.css";
import {Container, Col, Row } from 'react-bootstrap';

function Header() {
  return (
    <div className="Header">
      <Container fluid>
        <div className="header-title">
          {" "}
          {/*background image con parallax*/}
          <h1>Botiga solidària</h1>
        </div>
      </Container>
    </div>
  );
}

export default Header;
