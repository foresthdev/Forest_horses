import React from "react";
import "../../App.css";
import Header from "../../components/Header";
import Novetats from "../../components/Novetats";

function Home() {
  return (
    <div className="Home">
      <Header />
      <main>
        <Novetats />
        <div className="section3-grid">
          <section className="apadrina">
            <h2>Apadrina una hectàrea</h2>
          </section>
          <section className="img-grid">
            <img
              src="https://i.imgur.com/wfNCHWw.jpg"
              alt="caballo en la montaña"
              className="img-caballo"
            />
          </section>
          <section className="donacio">
            <h2>Donació</h2>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Home;
