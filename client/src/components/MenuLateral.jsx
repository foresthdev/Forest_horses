import React from "react";
import '../App.css';


export default function menuLateral() {
  return (
    <div className="menuLateral">
          <a
            className="registro"
            href="#registro"
            style={{ color: "black", textDecoration: "none" }}
          >
            Registra't
          </a>
          <a
            className="historial"
            href="#historial de comandes"
            style={{ color: "black", textDecoration: "none" }}
          >
            Historial de comandes
          </a>
          <a
            className="tanca"
            href="#tanca sessió"
            style={{ color: "black", textDecoration: "none" }}
          >
            Tanca sessió
          </a>
        </div>
  )}