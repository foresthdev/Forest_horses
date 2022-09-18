import React from "react";
import { useState } from "react";


function CarritoCompra() {
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
  return (
    <div className="CarritoCompra">
      
      
      <header className="Header">
        <div className="header-title" > {/*background image con parallax*/}
            <h1>Cistella</h1>
        </div>
      </header>

      <main>
          <div>{carItems.length === 0 && <div>La Cistella esta Buida</div>}</div>
      </main>
    

    </div>
  );
}

export default CarritoCompra;