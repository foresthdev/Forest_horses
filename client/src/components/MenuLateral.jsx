// import './App.css';
import React from "react";

export default function menuLateral() {
  return (
    <div className="MenuLateral">
      <a
        className="registro"
        href="#registro"
        style={{ color: "black", textDecoration: "none", fontWeight: "800" }}
      >
        Registra't
      </a>
      <a
        className="historial"
        href="#historial de comandes"
        style={{ color: "black", textDecoration: "none", fontWeight: "800" }}
      >
        Historial de comandes
      </a>
      <a
        className="tanca"
        href="#tanca sessió"
        style={{ color: "black", textDecoration: "none", fontWeight: "800" }}
      >
        Tanca sessió
      </a>
    </div>
  );
}
