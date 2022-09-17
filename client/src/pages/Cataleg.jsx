import React from "react";

import Navbar from "../components/Navbar";
import Footer from '../components/Footer';

export default function Cataleg() {
    return (
      <div className="cataleg">
        <Navbar />
        <div className="Header">
        <div className="header-title" > {/*background image con parallax*/}
            <h1>Catàleg</h1>
        </div>
   
        </div>

        <section>
            <h1>Articles</h1>
        </section>

        <Footer />
        
      </div>
    );
  }
