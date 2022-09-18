// import './App.css';
import Navbar from './components/Navbar';
import Routes from './Routes';
import {BrowserRouter} from "react-router-dom";
import Cataleg from './pages/Cataleg';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Cataleg />

        <Routes />
      </div>
    </BrowserRouter>
  );
}

export default App;
