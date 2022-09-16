// import './App.css';
import Home from './pages/Home';
import Navbar from "./components/Navbar";
import Footer from './components/Footer';
import Section3 from './components/Section3';
import ProductCard from './components/ProductCard';


function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Home />
      <Section3 />
      <Footer /> */}
      <ProductCard />
      
    </div>
  );
}

export default App;
