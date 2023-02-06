import React from "react";
import Form from 'react-bootstrap/Form'
import Stack from 'react-bootstrap/Stack';


function CarritoCompra(props) {
  const { cartItems, setCartItems, onAdd } = props;

  const onRemove = (item) => {
    const exist = cartItems.find((x) => x.id ===item.id);
    if (exist.quantity === 1) {
      setCartItems(cartItems.filter((x) => x.id !== item.id));
    } else {
      setCartItems (
        cartItems.map((x) =>
        x.id === item.id ? {...exist, quantity: exist.quantity -1 }:x
        )
      );
    }
  }

  const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.quantity, 0);
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
          <div className="cistella-buida">{cartItems.length === 0 && <div>La Cistella esta Buida</div>}</div>
          <div className="">
            <Stack direction="horizontal">
          {cartItems.map((item) => (
            
            <Stack  direction="horizontal" gap={2} className="d-frex align-items-right col-md-4" key={item.id}>
              <img className="cistella-image" src={item.image.image_1} alt={item.product} />
              <div className="me-auto">
                {item.product}
              </div>
              <div className="me-auto">
                {item.quantity_stock} quedan en stock
              </div>
              <div>
                <button onClick={() => onAdd(item)} className="add">+</button>
                <Form.Control className="input_quantitat" type="number" placeholder="1" value={item.quantity} />
                <button onClick={() => onRemove(item)} className="remove">-</button>
              </div>
              <div>
                {/* toFixed no acepta string hay q tranformarlo en Number, (2) precio con 2 decimales */}
                {item.quantity} x € {Number(item.price).toFixed(2)}
              </div>
              <div className="block col-1 text-right">
                {item.quantity * Number(item.price).toFixed(2)}€
              </div>
            </Stack>
            
          ))}
          {cartItems.length !== 0 && (
            <aside>
              <div className="row">
                <div className="col-2">Items Price</div>
                <div className="col-1 text-right">€{Number(itemsPrice).toFixed(2)}</div>
              </div>
              <div className="row">
                <div className="col-2">Tax Price</div>
                <div className="col-1 text-right">€{Number(taxPrice).toFixed(2)}</div>
              </div>
              <div className="row">
                <div className="col-2">Shipping Price</div>                                                            
                <div className="col-1 text-right">€{Number(shippingPrice).toFixed(2)}</div>
              </div>
              <div className="row">
                <div className="col-2">Total Price</div>
                <div className="col-1 text-right"><strong>€{Number(totalPrice).toFixed(2)}</strong></div>
              </div>
              <hr />
              <div className="row">
                <button onClick={() => alert('Implement Checkout')}>Comprar</button>
              </div>
            </aside>
          )}
          </Stack>
          </div>
      </main>
    

    </div>
  );
}

export default CarritoCompra;