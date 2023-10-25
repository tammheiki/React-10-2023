//import logo from './logo.svg';
import './App.css';
import{ Link, Route, Routes} from "react-router-dom"
import Avaleht from './pages/Avaleht';
import LisaToode from './pages/LisaToode';
import Ostukorv from './pages/Ostukorv';
import MitteLeitud from './pages/MitteLeitud';
import { useState } from 'react';
import Poed from './pages/Poed';
import Seaded from './pages/Seaded';
import Hinnad from './pages/Hinnad';
import Tooted from './pages/Tooted';


function App() {
  const [stiil, uuendaStiil] = useState(localStorage.getItem("stiil")||"hele" );

  const stiilTumedaks = () => {
    uuendaStiil ("tume")
    localStorage.setItem("stiil", "tume");
  }

  const stiilHeledaks = () => {
    uuendaStiil ("hele")
    localStorage.setItem("stiil", "hele");
  }


  return (
    <div className={stiil}>
      <button onClick={stiilTumedaks}>Tumedaks</button>
      <button onClick={stiilHeledaks}>Heledaks</button>
    


      <Link to="/"> 
        <img className="pilt" src="https://estonia.ee/wp-content/uploads/nobe_netist_4.jpg" alt="" />
      </Link>

      <Link to="/ostukorv">
        <button className='nupu-stiil'>Ostukorvi</button>
      </Link>
      
      <Link to="/lisa">
        <button className='nupu-stiil'>Lisa toode</button>
      </Link>

      <Link to="/seaded">
        <button className='nupu-stiil'>Seaded</button>
      </Link>

      <Link to="/poed">
        <button className='nupu-stiil'>Poed</button>
      </Link>

      <Link to="/hinnad">
        <button className='nupu-stiil'>Hinnad</button>
      </Link>

      <Link to="/tooted">
        <button className='nupu-stiil'>Tooted</button>
      </Link>
      
     
      <Routes>
      <Route path=""element={ <Avaleht /> } />
      <Route path='ostukorv' element={ <Ostukorv /> } />
      <Route path='lisa' element={ <LisaToode />} />
      <Route path='poed' element={ <Poed />} />
      <Route path='seaded' element={ <Seaded />} />
      <Route path='hinnad' element={ <Hinnad />} />
      <Route path='tooted' element={ <Tooted />} />
      <Route path='*' element={ <MitteLeitud />} />
      </Routes>
  
    </div>
  );
}

export default App;
