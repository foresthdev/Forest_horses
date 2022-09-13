import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';
import Section3 from '../components/Section3';


function Home() {
  return (
    <div className="Home">
      <Navbar />
      <Header />
      <Section3 />
      <Footer />
    </div>
  );
}

export default Home;
