import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Footer from './components/Footer'
import Home from './pages/Nav/Home';
import Apadrina from './pages/Nav/Apadrina';
import Donacio from './pages/Nav/Donacions'
import Enviament from './pages/Footer/Enviament';
import Pagament from './pages/Footer/Pagament'
import DetalleProducto from './pages/tienda/DetalleProductoUser';
import Cataleg from './pages/tienda/Cataleg';
import Carrito from './pages/tienda/CarritoCompra';
import Nologin from './pages/ERROR/No';
import Login from "./pages/login/Login";
import Mevesdades from "./pages/login/Mevesdades";
import { useState } from "react";



function App() {
  const [cartItems, setCartItems ] = useState([]);
  
  const onAdd =(item) => {
    const existItem = cartItems.find(product => product.id === item.id); //encuentra el producto que coincida 
    if (existItem) {// si existe
      setCartItems (
        cartItems.map((product) =>//mapea los productos del cartItems
        product.id === item.id ? {...existItem, quantity: existItem.quantity +1 }:product //añade 1
        )
      );
      
    } else {
      setCartItems([...cartItems, {...item, quantity: 1}]);// de otra manera pon 1
    }
  };
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
            <Route path="/apadrina" element={<Apadrina/>} />
            <Route path="/donacions" element={<Donacio/>} />
            <Route path="/enviament" element={<Enviament/>} />
            <Route path="/detalle/:id" element={<DetalleProducto authed={true} />} cartItems={cartItems} onAdd={onAdd} />
            <Route path="/pagament" element={<Pagament/>} />
            <Route path="/cataleg" element={<Cataleg authed={true} />} cartItems={cartItems} onAdd={onAdd} />
            <Route path="/carrito" element={<Carrito authed={true} />} cartItems={cartItems} onAdd={onAdd} />
            <Route path="/login" element={<Login/>} />
            <Route path="/lesmevesdades" element={<Mevesdades/>} />
            <Route path="/" exact element={<Home/>} />
            <Route path="*" element={<Nologin/>}/>
          </Routes>
        <Footer />
        
      </div>
      </BrowserRouter>
  );
}

export default App;