import React from "react";
import "../App.css";
import {Container , Row, Col} from 'react-bootstrap' 
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { useEffect, useState } from 'react';

const product = { id:1, image: "https://i.imgur.com/9NZV57d.jpg", product_name: "Tassa de ceràmica Al pas i amb calma", product_description: "Tassa de ceràmica Al pas i amb calma de mesures 8 (ample) x 9,5 cm (alt), de capacitat: 325 ml. Apta per a rentavaixella i per a microones.", product_price: "12"};

function DetalleProductoUser() {
  const [data, setData] = useState({});

  useEffect(() => {
    const getData = new Promise(resolve => {
      setTimeout (() => {
        resolve(product);
      }, 3000)
    });
    getData.then(res => setData(res))
  }, [])

  return (
    <div className="DetalleProductoUser">
      <Navbar />
      <section className="sectionDetalleUser">
        <div className="header-title" > 
            <h1>Detall Producte</h1>
        </div>

        <div className="detail_content">
          <Container className="detail_image_container">
            <Row>
              <Col>
                <img className="prime_detail_image" src={data.image} alt="" />
              </Col>
            </Row>
            <Row>
              <Col>
                <img className="detail_image" src={data.image} alt="" />
              </Col>
              <Col>
                <img className="detail_image" src={data.image} alt="" />
              </Col>
              <Col>
                <img className="detail_image" src={data.image} alt="" />
              </Col>
            </Row>
          </Container>

            
            <div detail_text>
              <p>Producte:</p>
              <p>{data.product}</p>
              <p>Nom del producte:</p>
              <p>{data.product_name}</p>
              <p>Descripció</p>
              <p>{data.product_description}</p>
              <p>Preu</p>
              <p>{data.product_price} €</p>
              <button>Afegir al cistell</button>
            </div>
        </div>

      </section>
      <Footer />
    </div>
  );
}

export default DetalleProductoUser;