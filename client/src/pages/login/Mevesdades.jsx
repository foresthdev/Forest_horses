// import './App.css';
import React from "react";
import { Button } from "react-bootstrap";
import Menu from '../components/Menu';

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
    
    <main> 
       {/* <h2 className="hola">Hola des de Forest Horses!</h2> */}
       <Menu />
       <div className = "lista">
            <a
            className="registro"
            href="#registro"
            style={{ color: "#fff", textDecoration: "none" }}
        >
          Registra't
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

      <div className = "formulario" style={{ color: "#fff" }}>
        <div className="form">
            <label>Nom</label>
            <input
            className="input"
            type="text"
            name="nom"
            />
        </div>
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

        <div className="form">
            <label>Telèfon de contacte</label>
            <input
            className="input"
            type="text"
            name="teléfono"
            />
        </div>

            <div className="form">
            <label>Direcció d'entrega</label>
            <input
            className="input"
            type="text"
            name="dirección"
            />
      </div>

      <div>
      <Button className="boton">Modificar</Button>
      <Button className="boton">Desar</Button>
      </div>
     
      </main>
     
      </div>  
    )}

   