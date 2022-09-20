// import './App.css';
import React from "react";
import { Button } from "react-bootstrap";

export default function Registrados() {
    return (
        <main>
      <div className="registrados">
          <h1>Registra't</h1>
       </div>
       <div className="body">
       {/* <h2 className="hola">Hola des de Forest Horses!</h2> */}

       <div className = "lista">
        <a
          className="dades"
          href="#les meves dades"
          style={{ color: "#fff", textDecoration: "none" }}
        >
          Les meves dades
        </a>
        <a
          className="historial"
          href="#historial de comandes"
          style={{ color: "#fff", textDecoration: "none" }}
        >
          Historial de comandes
        </a>
        <a
          className="tanca"
          href="#tanca sessió"
          style={{ color: "#fff", textDecoration: "none" }}
        >
          Tanca sessió
        </a>

      </div>
      <div className = "formulario" style={{ color: "#fff" }} >
      <div className="form">
        <label>Nom</label>
        <input
          className="input"
          type="text"
          name="nom"
        />
      </div>
      <div className="form">
        <label>Cognoms</label>
        <input
          className="input"
          type="text"
          name="cognoms"
        />
      </div>
      <div className="form">
        <label>Correu</label>
        <input
          className="input"
          type="text"
          name="correu"
        />
      </div>
      <div className="form">
        <label>Contrasenya</label>
        <input
          className="input"
          type="text"
          name="contrasenya"
        />
      </div>
      <Button className="boton">Desar</Button>
      </div>
    </div>
    </main>
    )}
