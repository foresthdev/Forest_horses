import './App.css';
import Navbar from './components/Navbar';
import Routes from './Routes';
import {BrowserRouter} from "react-router-dom";
import Footer from './components/Footer'
import Registrados from './pages/login/Registrados';
import Mevesdades from './pages/login/Mevesdades';
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
        <Routes />
        <Footer />
        <Registrados />
        <Mevesdades />
        
      </div>
    </BrowserRouter>
  );
}

export default App;