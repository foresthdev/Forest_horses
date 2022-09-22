// import './App.css';
import Navbar from './components/Navbar';
// import Routes from './Routes';
import {BrowserRouter} from "react-router-dom";
import Cataleg from './pages/tienda/Cataleg';
import CarritoCompra from './pages/tienda/CarritoCompra';
import Nav from './components/Navbar';
import Home from './pages/Nav/Home';
import Apadrina from './pages/Nav/Apadrina';
import Registrados from '../pages/Registrados';
import Mevesdades from '../pages/Mevesdades';



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Cataleg />
        <CarritoCompra />
      <Home />
      <Apadrina />
      <Registrados />
      <Mevesdades />
      <Nav />

        {/* <Routes /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
