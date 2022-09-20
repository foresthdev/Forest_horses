// import './App.css';
import React from "react";
import { Button } from "react-bootstrap";
import Menu from '../components/Menu';

export default function Registrados() {
  return (
    <div>
      <header className="Header">
        <div className="header-title">
          {" "}
          {/*background image con parallax*/}
          <h1>Registra't</h1>
        </div>
      </header>

      <main>
        {/* <h2 className="hola">Hola des de Forest Horses!</h2> */}

        
        <div className="formulario" style={{ color: "#fff" }}>
          <div className="form">
            <label>Nom</label>
            <input className="input" type="text" name="nom" />
          </div>
        </div>

        <div className="form">
          <label>Cognoms</label>
          <input className="input" type="text" name="cognoms" />
        </div>
        <div className="form">
          <label>Correu</label>
          <input className="input" type="text" name="correu" />
        </div>
        <div className="form">
          <label>Contrasenya</label>
          <input className="input" type="text" name="contrasenya" />
        </div>
        <Button className="boton">Desar</Button>
        
      </main>
      <Menu />
    </div>
  );
}
