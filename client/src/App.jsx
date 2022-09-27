import './App.css';
import Navbar from './components/Navbar';
import Routes from './Routes';
import {BrowserRouter} from "react-router-dom";
import Footer from './components/Footer'
import Registrados from './pages/login/Registrados';
import Mevesdades from './pages/login/Mevesdades';
import { ShoppingCartProvider } from './context/ShoppingCartContex'

function App() {
  return (
    <BrowserRouter>
    <ShoppingCartProvider>
      <div className="App">
        <Navbar />
        <Routes />
        <Footer />
        <Registrados />
        <Mevesdades />
        
      </div>
      </ShoppingCartProvider>
    </BrowserRouter>
  );
}

export default App;