import React from "react";
import "../../App.css";
import Header from "../../components/Header";
import CatalegHome from "../../components/CatalegHome";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

function Home() {
  return (
    <div className="Home">
        <Header />
        <main>
          <CatalegHome />
          <div className="section3-grid">
            <section className="apadrina">
              <Link className="link" to="apadrina">
                <h2>Apadrina una hectàrea</h2>
              </Link>
              <p className="text-home">Col·labora amb nosaltres.</p>
              <Button variant="outline-light">Informa't</Button>
            </section>
            <section className="img-grid">
              <img
                src="https://i.imgur.com/wfNCHWw.jpg"
                alt="caballo en la montaña"
                className="img-caballo"
              />
            </section>
            <section className="donacio">
              <Link className="link" to="donacio">
                <h2>Donacions</h2>
              </Link>
              <p>Col·labora amb nosaltres.</p>
              <Button variant="outline-light">Informa't</Button>
            </section>
          </div>
        </main>
    </div>
  );
}

export default Home;
