import React from "react";
import Form from 'react-bootstrap/Form'
import { formatCurrency} from '../../utilities/formatCurrency'


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
                {item.qty} x {formatCurrency} {item.price.toFixed(2)}
              </div>
              <div className="block col-1 text-right">
                {item.qty} x {formatCurrency}{item.price.toFixed}
              </div>
            </stack>
            
          ))}
          {carItems.length !== 0 && (
            <aside>
              <div className="row">
                <div className="col-2">Items Price</div>
                <div className="col-1 text-right">{formatCurrency}{itemsPrice.toFixed(2)}</div>
              </div>
              <div className="row">
                <div className="col-2">Tax Price</div>
                <div className="col-1 text-right">{formatCurrency}{taxPrice.toFixed(2)}</div>
              </div>
              <div className="row">
                <div className="col-2">Shipping Price</div>                                                            
                <div className="col-1 text-right">{formatCurrency}{shippingPrice.toFixed(2)}</div>
              </div>
              <div className="row">
                <div className="col-2">Total Price</div>
                <div className="col-1 text-right"><strong>{formatCurrency}{totalPrice.toFixed(2)}</strong></div>
              </div>
              <hr />
              <div className="row">
                <button onClick={() => alert('Implement Checout')}>Comprar</button>
              </div>
            </aside>
          )}
          
      </main>
    

    </div>
  );
}

export default CarritoCompra;