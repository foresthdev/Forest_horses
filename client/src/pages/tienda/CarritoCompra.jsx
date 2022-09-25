import React from "react";
import Form from 'react-bootstrap/Form'


function CarritoCompra(props) {
  const { carItems, setCartItems, onAdd } = props;

  const onRemove = (item) => {
    const exist = carItems.find((x) => x.id ===item.id);
    if (exist.qty === 1) {
      setCartItems(carItems.filter((x) => x.id !== item.id));
    } else {
      setCartItems (
        carItems.map((x) =>
        x.id === item.id ? {...exist, qty: exist.qty -1 }:x
        )
      );
    }
  }

  const itemsPrice = carItems.reduce((a,c) => a+c.price * c.qty, 0);
  const taxPrice = itemsPrice * 0.14;
  const shippingPrice = itemsPrice > 2000 ? 0 : 50;
  const totalPrice = itemsPrice +taxPrice + shippingPrice;
  
  return (
    <div className="CarritoCompra">
      
      <header className="Header">
        <div className="header-title" > {/*background image con parallax*/}
            <h1>Cistella</h1>
        </div>
      </header>

      <main>
          <div>{carItems.length === 0 && <div>La Cistella esta Buida</div>}</div>
          {carItems.map((item) => (
            <stack  direction="horizontal" gap={2} className="d-frex align-items-center" key={item.id}>
              <img className="" src={item.image.image_1} alt={item.product} />
              <div className="me-auto">
                {item.product}
              </div>
              <div>
                <button onClick={() => onAdd(item)} className="add">+</button>
                <Form.Control className="input_quantitat" type="number" placeholder="1" />
                <button onClick={() => onRemove(item)} className="remove">-</button>
              </div>
              <div>
                {item.qty} x {item.price.toFixed(2)}
              </div>
            </stack>
          ))}
          <aside className="block col-1">

          </aside>
      </main>
    

    </div>
  );
}

export default CarritoCompra;