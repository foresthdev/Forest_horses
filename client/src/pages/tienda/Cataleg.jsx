import React from "react";
import { Card, Col, Row } from "react-bootstrap";

import storeItems from "../../data/products.json";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
//import axios from 'axios';



export default function Cataleg() {
  const [ items, setItems ] = useState([]);
  const [carItems, setCartItems ] = useState([]);
  
  const onAdd =(item) => {
    const exist = carItems.find((x) => x.id === item.id);
    if (exist) {
      setCartItems (
        carItems.map((x) =>
        x.id === item.id ? {...exist, qty: exist.qty +1 }:x
        )
      );
      
    } else {
      setCartItems([...carItems, {...item, qty: 1}]);
    }
  };
  //const [carItems, setCartItems ] = useState([]);
  useEffect(() =>{

    const getItems = new Promise(resolve => {
      setTimeout (() => {
        resolve(storeItems);
      }, 1000)
    });
    getItems.then(res => setItems(res))

    // axios.get({
    //   storeItems
    // })
    // .then( res => setGetItems(res.data.getAllItems))

      }, []);
  
    return (
      <div className="cataleg">
        
        <header className="Header">
        <div className="header-title" > {/*background image con parallax*/}
            <h1>Catàleg</h1>
        </div>
   
        </header>

        <main className="">
            <h1>Articles</h1>
            <section className="g-4">
              <Row md={2} xs={1} lg={4} className="cataleg_grid">
                {items.map(item => (
                  <Col key={item.id}>
                    <Card>
                    <Card.Img className='' variant="top" src={item.image.image_1} alt={item.product} />
                    <Card.Body>
                      <Link to={`/detalle/${item.id}`}><button>Mas detalle</button></Link>
                      <button onClick={onAdd}>Afegir al cistell</button>
                      <div className="card_text">
                      <Col>
                        <div>{item.product}</div>
                      </Col>
                      <Col>
                        <div>{item.price}</div>
                      </Col>
                      </div>
                    </Card.Body>
                    </Card>
                    
                  </Col>
                ))}
              </Row>

            </section>
            
        </main>

        
      </div>
    );
  }
  //typscript
  // import React from "react";
  // import { Col, Row } from "react-bootstrap";
  // import storeItems from "../data/products.json";
  // import StoreItem from "../components/StoreItem";
  
  // export default function Cataleg() {
  //     return (
  //       <div className="cataleg">
          
  //         <header className="Header">
  //         <div className="header-title" > {/*background image con parallax*/}
  //             <h1>Catàleg</h1>
  //         </div>
     
  //         </header>
  
  //         <main className="">
  //             <h1>Articles</h1>
  //             <section className="g-4">
  //               <Row md={2} xs={1} lg={4} className="cataleg_grid">
  //                 {storeItems.map(item => (
  //                   <Col key={item.id}>
  //                     <StoreItem {...item} />
  //                   </Col>
  //                 ))}
  //               </Row>
  
  //             </section>
              
  //         </main>
  
          
  //       </div>
  //     );
  //   }

  