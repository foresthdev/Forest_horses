import '../../App.css';
import React from "react";
import { Button } from "react-bootstrap";
import MenuLateral from "../../components/MenuLateral";

export default function Misdatos() {
  return (
    <div>
      <header className="Header">
        <div className="header-title">
          {" "}
          {/*background image con parallax*/}
          <h1>Les meves dades</h1>
        </div>
      </header>

      <main style={{ background: "#939745" }}>
        {/* <h2 className="hola">Hola des de Forest Horses!</h2> */}

        
      <MenuLateral />
        <div className="formulario" style={{ color: "black" }}>
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
          <label>Adreça de lliurament</label>
          <input className="input" type="text" name="contrasenya" />
        </div>
        <div className="form">
          <label>Telèfon de contacte</label>
          <input className="input" type="text" name="teléfono" />
        </div>
        <div className="form">
          <label>Ciutat</label>
          <input className="input" type="text" name="dirección" />
        </div>
        <div className="form">
          <label>Província</label>
          <input className="input" type="text" name="dirección" />
        </div>
        <div className="form">
          <label>Pais</label>
          <input className="input" type="text" name="dirección" />
        </div>

        <div>
          
          <Button className="boton2" style= {{background:"#173A3A", border: "#173A3A" }}>Desar</Button>
        </div>
      </main>
    </div>
  );
}
