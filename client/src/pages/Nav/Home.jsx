import React from "react";
import '../../App.css';
import Header from "../../components/Header";
import CatalegHome from "../../components/CatalegHome";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

function Home() {
  return (
    <div className="Home">
<<<<<<< HEAD
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
=======
      <Header />
      <main>
        <CatalegHome />
        <div className="section3-grid">
          <section className="apadrina" >
            <Link to="apadrina" style={{textDecoration: "none", color: "#173A3A", fontWeight: "800"}}><h2>Apadrina una hectàrea</h2></Link>
          </section>
          <section className="img-grid">
            <img
              src="https://i.imgur.com/wfNCHWw.jpg"
              alt="caballo en la montaña"
              className="img-caballo"
            />
          </section>
          <section className="donacio">
          <Link to="donacio" style={{textDecoration: "none", color: "#939745", fontWeight: "800"}} ><h2>Donació</h2></Link>
          </section>
        </div>
      </main>
>>>>>>> 9cff4a9ca04965e6fc3d73bd890ef91440cbc979
    </div>
  );
}

export default Home;
