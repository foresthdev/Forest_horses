import React from "react";
import cataleg from "../pages/tienda/Cataleg";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

export default function CatalegHome() {
  return (
    <div className="CatalegHome">
      <Container fluid>
        <Row>
          <h1 href={cataleg}>Cataleg</h1>
          <Col>
            <Link to="detalle/1">
              <img
                src="https://i.imgur.com/gKq7Lay.jpg"
                className="imghomecataleg"
                style={{ width: "30em" }}
                alt="bag1"
              />
            </Link>
          </Col>
          <Col>
            <Link to="detalle/2">
              <img
                src="https://i.imgur.com/KucgSMo.jpg"
                // href={} router
                className="imghomecataleg"
                style={{ width: "30em" }}
                alt="cup"
              />
            </Link>
          </Col>
          <Col>
            <Link to="detalle/3">
              <img
                src="https://i.imgur.com/B2guuEe.jpg"
                // href={} router
                className="imghomecataleg"
                style={{ width: "30em" }}
                alt="bag2"
              />
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
