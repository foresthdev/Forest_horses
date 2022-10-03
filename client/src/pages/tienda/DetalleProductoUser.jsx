import React from "react";
import "../../App.css";
import {Container , Row, Col} from 'react-bootstrap' 
import Form from 'react-bootstrap/Form';
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom"
import axios from "axios";


function DetalleProductoUser() {
  const { id } =useParams();
  const [data, setData] = useState([id]);
  //const [onAdd ] = props;
  

  useEffect(() => {
    const getData = axios.get("../../data/products.json");
    //const getData = axios.get(`http://localhost:3000/detalle/${id}`);
    getData
    .then((response) => {
      console.log(response);
      setData(response.data[0]);
    })""
    .catch((error) => {
      console.log(error.response.data);  
      console.log(error.response.status);  
      console.log(error.response.headers);
    });
  }, []);

  return (
    <div className="DetalleProductoUser">
      <header className="Header">
        <div className="header-title" > 
            <h1>Detall Producte</h1>
        </div>
      
      </header>

        <main className="detail_content">
          {/* <Container className="detail_image_container">
            <Row className="up_detail_image_row">
              <Col>
                <img className="prime_detail_image" src={data.image.image_1} alt="" />
              </Col>
            </Row>
            <Row className="sub_detail_image_row">
              <Col>
                <img className="detail_image" src={data.image.image_1} alt="" />
              </Col>
              <Col>
                <img className="detail_image" src={data.image.image_2} alt="" />
              </Col>
              <Col>
                <img className="detail_image" src={data.image.image_3} alt="" />
              </Col>
            </Row>
          </Container> */}

<Container className="detail_image_container" >
            <Row className="up_detail_image_row">
              <Col>
                <img className="prime_detail_image" src={data.image} alt="" />
              </Col>
            </Row>
            <Row className="sub_detail_image_row">
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

            
            <div detail_text="true">
              <p>Producte:</p>
              <p>{data.product}</p>
              <p>Nom del producte:</p>
              <p>{data.product_name}</p>
              <p>Descripció</p>
              <p>{data.product_description}</p>
              <Row className="preu_quantitat">
                <Col className="preu_col">
                  <p>Preu</p>
                  <p>{data.product_price} €</p></Col>
                <Col className="quantiat_col">
                  <Form.Label>Quantitat</Form.Label>
                  <Form.Control className="input_quantitat" type="number" placeholder="1" />
                </Col>
              </Row>
              {/* <button onClick={onAdd}>Afegir al cistell</button> */}
            </div>
        </main>

    </div>
  );
}

export default DetalleProductoUser;