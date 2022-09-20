import React from "react";
import Navbar from "../../components/Navbar";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Apadrina() {
  return (
    <div>
      <Navbar />
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
          actual de risc d'incendi ho requereix. El Forest es troba en una zona
          de perímetre de protecció prioritària per la prevenció d'incendis
          forestals, un territori amb un gran perill d'incendi que, a causa de
          la continuïtat de la massa forestal, es pot convertir en un gran
          incendi forestal. Per tal de poder obtenir els recursos necessaris per
          seguir amb les accions de restauració forestal, prevenció d'incendis i
          regeneració de pastura, hem engegat la campanya «Apadrina una
          hectàrea». Tothom qui vulgui col·laborar podrà apadrinar una o més
          hectàrees de manera simbòlica, a través d’una aportació mensual de 10
          euros per ha. que aniran destinats a poder gestionar l'espai on
          l'Associació actua. Amb aquesta aportació dones suport a poder
          invertir en les tasques de restauració forestal i prevenció d'incendis
          que es duen a terme al nostre entorn natural en les que el Forest
          forma part. Si vols sumar-te a aquesta acció pels nostres boscos i
          col·laborar en la neteja del bosc, omple el formulari que hi ha a
          continuació. De part del Forest: moltes gràcies per formar part de la
          solució!
        </p>
      </main>
      <Footer />
    </div>
  );
}
