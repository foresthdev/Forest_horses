import './App.css';
import Navbar from './components/Navbar';
import Routes from './Routes';
import {BrowserRouter} from "react-router-dom";
import Footer from './components/Footer'
import Mevesdades from './pages/login/Mevesdades';
import Login from './pages/login/Login'


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes />
        <Footer />
        <Mevesdades />
        <Login />
      </div>
    </BrowserRouter>
  );
}

export default App;
 