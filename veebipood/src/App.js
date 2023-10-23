//import logo from './logo.svg';
import './App.css';
import{ Link, Route, Routes} from "react-router-dom"
import Avaleht from './pages/Avaleht';
import LisaToode from './pages/LisaToode';
import Ostukorv from './pages/Ostukorv';
import MitteLeitud from './pages/MitteLeitud';
import { useState } from 'react';


function App() {
  const [stiil, uuendaStiil] = useState("tume");


  return (
    <div className={stiil}>
      <button onClick={() => uuendaStiil ("tume")}>Tumedaks</button>
      <button onClick={() => uuendaStiil ("hele")}>Heledaks</button>
    


      <Link to="/"> 
        <img className="pilt" src="https://estonia.ee/wp-content/uploads/nobe_netist_4.jpg" alt="" />
      </Link>

      <Link to="/ostukorv">
        <button className='nupu-stiil'>Ostukorvi</button>
      </Link>
      
      <Link to="/lisa">
        <button className='nupu-stiil'>Lisa toode</button>
      </Link>
      
     
      <Routes>
      <Route path="npm start"
       element={ <Avaleht /> } />
      <Route path='ostukorv' element={ <Ostukorv /> } />
      <Route path='lisa' element={ <LisaToode />} />
      <Route path='*' element={ <MitteLeitud />} />
      </Routes>
  
    </div>
  );
}

export default App;
