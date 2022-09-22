import './App.css';
import Navbar from './components/Navbar';
import Routes from './Routes';
import {BrowserRouter} from "react-router-dom";
import Footer from './components/Footer'



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
