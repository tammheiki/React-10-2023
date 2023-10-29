import './App.css';
import { Link, Routes, Route } from 'react-router-dom'
import Avaleht from './pages/Avaleht';
import Kontakt from './pages/Kontakt';
import Meist from './pages/Meist';
import Seaded from './pages/Seaded';
import { useState } from 'react';
import { useRef } from 'react';
import Leht from './pages/Leht';
import Loader from './pages/Loader';
import Books from './pages/Books';




function App() {
  const [sisselogitud, muudaSisseLogitud] = useState("ei");
  const [sonum, muudaSonum] = useState("");
  const kasutajaNimiRef = useRef("");
  const paroolRef = useRef();

  const logiSisse = () => {
    if (paroolRef.current.value === "123") {
       muudaSisseLogitud("jah");
    muudaSonum(kasutajaNimiRef.current.value + "Oled sisse logitud Heiki");
    } else {
      muudaSonum ("Vale parool!");
    }
   }

   const logiValja = () => {
    muudaSisseLogitud("ei");
    muudaSonum("oled sisselogitud")
  }

  return (

      <div className="App">
      <div> {sonum} </div>
      {sisselogitud === "ei" && <div>
      <label>Kasutajanimi</label> <br />
      <input ref= {kasutajaNimiRef} type="text" /> <br />
      <label>Parool</label> <br />
      <input ref={paroolRef} type="password" /> <br />
      </div>}


      {sisselogitud === "ei" && <button onClick={logiSisse}>Logi sisse</button>}
      {sisselogitud === "jah" &&  <button onClick={logiValja}>Logi välja</button>}
      <div>--SIIN ON VARASEM KODUTÖÖ--</div>
      
      <Link to="/">
        <button>Avaleht</button>
      </Link>

      <Link to="/kontakt">
        <button>Kontakt</button>
      </Link>

      <Link to="/meist">
        <button>Meist</button>
      </Link>

      <Link to="/seaded">
        <button>Seadetesse</button>
      </Link>

      <Link to="leht">
        <button>Leht</button>
      </Link>

      <Link to="loader">
        <button>Loader</button>
      </Link>

      <Link to="books">
        <button>Books</button>
      </Link>
      
      <Routes>
        <Route path='' element={<Avaleht />} />
        <Route path='kontakt' element={<Kontakt />} />
        <Route path='meist' element={<Meist />} />
        <Route path='seaded' element={<Seaded />} />
        <Route path='leht' element={<Leht />} />
        <Route path='loader' element={<Loader />} />
        <Route path='books' element={<Books />} />

      </Routes>
     
    </div>
  );
}

export default App;
