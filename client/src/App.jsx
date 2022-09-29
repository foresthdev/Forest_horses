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



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
            <Route path="/apadrina" element={<Apadrina/>} />
            <Route path="/donacions" element={<Donacio/>} />
            <Route path="/enviament" element={<Enviament/>} />
            <Route path="/detalle/:id" element={<DetalleProducto/>} />
            <Route path="/pagament" element={<Pagament/>} />
            <Route path="/cataleg" element={<Cataleg/>} />
            <Route path="/carrito" element={<Carrito/>} />
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
 