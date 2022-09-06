import React from "react";
import { BsFillTelephoneFill, BsEnvelope, BsInstagram } from "react-icons/bs";



function Footer() {
  return (
    <div className="footer">
        <div className="footerFila1">
            <a href="#contact" style={{color: "#fff", textDecoration:"none"}}><BsFillTelephoneFill style={{color: "#173A3A"}}/>686 261 943</a>
            <a href="#contact" style={{color: "#fff", textDecoration:"none"}}><BsEnvelope style={{color: "#173A3A"}}/>foresthorses.info@gmail.com</a>
            <a href="#contact" style={{color: "#fff", textDecoration:"none"}}><BsInstagram style={{color: "#173A3A"}}/>instagram</a>
        </div>
        <div className="footerFila2">
            <a href="#contact" style={{color: "#fff", textDecoration:"none"}}>Cost d’enviament i recollida</a>
            <a href="#contact" style={{color: "#fff", textDecoration:"none"}}>Mètodes de pagament</a>
            <a href="#contact" style={{color: "#fff", textDecoration:"none"}}>Contacte</a>
        </div>
    
    </div>
  );
}

export default Footer;