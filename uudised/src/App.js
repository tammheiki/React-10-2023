
import './App.css';
import{ Link, Route, Routes} from "react-router-dom"
import Avaleht from './pages/Avaleht';
import Uudised from './pages/Uudised';
import Kontakt from './pages/Kontakt';
import Meist from './pages/Meist';
import Ostukorv from './pages/Ostukorv';

function App() {
  return (

    <div className="App">
      

      <Link to="/">
      <button>Avaleht</button>
  {/* { <img className="pilt" src="https://cdn.tasteatlas.com/images/regions/9b6037559326448ea3551c187a13f202.jpg?m=facebook" alt="" /> } */}
      </Link>
      
      <Link to="/Uudised">
      <button>Uudised</button>
      </Link>

      <Link to="/Kontakt">
      <button>Kontakt</button>
      </Link>

      <Link to="/Meist">
      <button>Info Meist</button>
      </Link>

      <Link to="/Ostukorv">
      <button>Ostukorv</button>
      </Link>
      
      
      <Routes>
        < Route path="" element={<Avaleht />} />
        < Route path="Uudised" element={<Uudised />} />
        < Route path="kontakt" element={<Kontakt />} />
        < Route path="meist" element={<Meist />} />
        < Route path="ostukorv" element={<Ostukorv/>} />
        </Routes>
        
    </div>
  )
}

export default App;
