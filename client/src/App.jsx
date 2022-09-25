import './App.css';
import Navbar from './components/Navbar';
import Routes from './Routes';
//import {BrowserRouter} from "react-router-dom";
import Footer from './components/Footer'
import Registrados from './pages/login/Registrados';
import Mevesdades from './pages/login/Mevesdades';


function App() {
  return (
    
      <div className="App">
        <Navbar />
        <Routes />
        <Footer />
        <Registrados />
        <Mevesdades />
        
      </div>
  );
}

export default App;
 