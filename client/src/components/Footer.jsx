import React from "react";
import { BsFillTelephoneFill, BsEnvelope, BsInstagram } from "react-icons/bs";
import { Button, Container, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
    
      <div className="footerFila1">
        <a
          className="telf"
          href="#contact"
          style={{ color: "#fff", textDecoration: "none" }}
        >
          <BsFillTelephoneFill className="icon" style={{ color: "#173A3A" }} />
          686 261 943
        </a>
        <a
          className="email"
          href="#contact"
          style={{ color: "#fff", textDecoration: "none" }}
        >
          <BsEnvelope className="icon" style={{ color: "#173A3A" }} />
          foresthorses.info@gmail.com
        </a>
        <a
          className="instagram"
          href="#contact"
          style={{ color: "#fff", textDecoration: "none" }}
        >
          <BsInstagram className="icon" style={{ color: "#173A3A" }} />
          @forest_horses_assoc
        </a>
      </div>
      <div className="footerFila2">
        <a
          className="contact"
          href="https://foresthorses.wixsite.com/foresthorses/contacte"
          target="_blank"
          style={{ color: "#fff", textDecoration: "none" }}
        >
          Contacte
        </a>
        <Link to="enviament">
          <a
            className="envio"
            href="#MetodosEnvio"
            style={{ color: "#fff", textDecoration: "none" }}
          >
            Cost d’enviament i recollida
          </a>
        </Link>
        <Link to="pagament">
          <a
            className="pago"
            href="#MetodosPago"
            style={{ color: "#fff", textDecoration: "none" }}
          >
            Mètodes de pagament
          </a>
        </Link>
      </div>
      
    </div>
  );
}

export default Footer;
