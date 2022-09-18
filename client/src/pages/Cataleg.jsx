import React from "react";
import { Card, Col, Row } from "react-bootstrap";

import storeItems from "../data/products.json";
//import StoreItem from "../components/StoreItem";
import { useEffect } from "react";
import { useState } from "react";
//import axios from 'axios';



export default function Cataleg() {
  const [ items, setItems ] = useState([])
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
                    <Card.Img className='' variant="top" src={item.image} alt={item.product} />
                    <Card.Body>
                      <button>Afegir al cistell</button>
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

  