import React, { useState } from 'react'
import{ Link } from "react-router-dom"
import ostuKorvFailist from "../data/ostukorv.json"

function Ostukorv() {
  const [ostukorv, uuendaOstukorv] = useState (ostuKorvFailist);
  
  
  const lisa = (uus) => {
    ostukorv.push (uus)
    uuendaOstukorv(ostukorv.slice())

  }

  const kustuta = (jrknr) => {
    ostukorv.splice(jrknr,1)
    uuendaOstukorv(ostukorv.slice())
       
  }

  const tyhjenda = () => {
    ostukorv.splice(0)
    uuendaOstukorv(ostukorv.slice())
       
  }

  const arvutaKogusumma = () => {
    let summa = 0;
    ostukorv.forEach(toode => summa = summa + toode.hind)
    return summa;
  }




  return (
    <div>

    <div>Kokku {ostukorv.length} toode(t) </div>

    {ostukorv.length > 0 && <div> Kokku {ostukorv.lenght}Toodet(t)</div> }
    {ostukorv.length > 0 && <button onClick={tyhjenda} >Tühjenda</button> }

    {ostukorv.map((toode, indeks) => 
    <div key={indeks}> 
    <img className='pilt'  src={toode.pilt} alt="" />
    <div>{toode.nimi} </div>
    <div>{toode.hind} </div>
   
    
    <button onClick={ () => lisa (toode) }>Lisa</button> 
    <button onClick={ () => kustuta(indeks)} >Kustuta</button>
    </div> ) }
      
        
   <Link to="/tooted">
   </Link>
      { ostukorv.lenght === 0 &&  <div>ostukorv on tühi</div>}
      <button>Lisa mõni toode toode</button>

      <div>{arvutaKogusumma ()} € </div>
    </div>
    
  )
}

export default Ostukorv