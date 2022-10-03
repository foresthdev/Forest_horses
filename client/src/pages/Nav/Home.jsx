import React from "react";
import "../../App.css";
import Header from "../../components/Header";
import CatalegHome from "../../components/CatalegHome";
import {Link} from "react-router-dom"

function Home() {
  return (
    <div className="Home">
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
    </div>
  );
}

export default Home;
