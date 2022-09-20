// import './App.css';
import Home from './pages/Home';
import Navbar from "./components/Navbar";
import Footer from './components/Footer';
import Section3 from './components/Section3';
import Registrados from './pages/Registrados';
import Mevesdades from './pages/Mevesdades';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Section3 />
      <Footer />
      <Mevesdades />
      <Registrados />
     
      
    </div>
  );
}

export default App;
