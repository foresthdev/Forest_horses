import React from "react";
import Form from 'react-bootstrap/Form'


function CarritoCompra(props) {
  const { cartItems, setCartItems, onAdd } = props;

  const onRemove = (item) => {
    const exist = cartItems.find((x) => x.id ===item.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== item.id));
    } else {
      setCartItems (
        cartItems.map((x) =>
        x.id === item.id ? {...exist, qty: exist.qty -1 }:x
        )
      );
    }
  }

  const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
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
          {/*cuando cartItems este vacio dará el mensage de "La Cistella esta Buida si no renderizará la lista del carrito" */}
          <div>{cartItems.length === 0 && <div>La Cistella esta Buida</div>}</div>
          {cartItems.map((item) => (
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
                {item.qty} x € {item.price.toFixed(2)}
              </div>
              <div className="block col-1 text-right">
                {item.qty} x €{item.price.toFixed}
              </div>
            </stack>
            
          ))}
          {cartItems.length !== 0 && (
            <aside>
              <div className="row">
                <div className="col-2">Items Price</div>
                <div className="col-1 text-right">€{itemsPrice.toFixed(2)}</div>
              </div>
              <div className="row">
                <div className="col-2">Tax Price</div>
                <div className="col-1 text-right">€{taxPrice.toFixed(2)}</div>
              </div>
              <div className="row">
                <div className="col-2">Shipping Price</div>                                                            
                <div className="col-1 text-right">€{shippingPrice.toFixed(2)}</div>
              </div>
              <div className="row">
                <div className="col-2">Total Price</div>
                <div className="col-1 text-right"><strong>€{totalPrice.toFixed(2)}</strong></div>
              </div>
              <hr />
              <div className="row">
                <button onClick={() => alert('Implement Checkout')}>Comprar</button>
              </div>
            </aside>
          )}
          
      </main>
    

    </div>
  );
}

export default CarritoCompra;