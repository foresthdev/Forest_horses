import React from "react";
import Paypal from '../../components/Paypal';
import { Button, Container, Col, Row } from "react-bootstrap";

export default function Apadrina() {
  return (
    <div>
      <header className="Header">
        <div className="header-title">
          {" "}
          {/*background image con parallax*/}
          <h1>Apadrina</h1>
        </div>
      </header>
      <main>
          <p>
            Sabem de la importància de cuidar els nostres boscos i la situació
            actual de risc d'incendi ho requereix. El Forest es troba en una
            zona de perímetre de protecció prioritària per la prevenció
            d'incendis forestals, un territori amb un gran perill d'incendi que,
            a causa de la continuïtat de la massa forestal, es pot convertir en
            un gran incendi. Per tal de poder obtenir els recursos necessaris
            per seguir amb les accions de restauració del bosc, prevenció
            d'incendis i regeneració de pastura, hem engegat la campanya
            «Apadrina una hectàrea». Tothom qui vulgui col·laborar podrà
            apadrinar una o més hectàrees de manera simbòlica, a través d’una
            aportació mensual de 10 euros per ha. que aniran destinats a poder
            gestionar l'espai on l'Associació actua. Amb aquesta aportació dones
            suport en les tasques que es duen a terme al nostre entorn natural,
            en les que el Forest forma part. Si vols sumar-te a aquesta acció
            pels nostres boscos, omple el formulari que hi ha a continuació. De
            part nostra i del Forest: moltes gràcies per formar part de la
            solució!
          </p>
        < Paypal />
      </main>
    </div>
  );
}
