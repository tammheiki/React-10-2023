import React, { useState } from 'react'
import ostukorvFailist from "../data/ostukorv.json";
import tootedFailist from "../data/tooted.json";
import{Link} from "react-router-dom"



function Tooted() {
  
  const [tooted, uuendaTooted] = useState (tootedFailist);

  
  const lisaOstukorvi = (lisatav) => {
    ostukorvFailist.push(lisatav);
  }

  const sorteeriHindKasvavalt = () => {
    tooted.sort((a,b) => a.hind - b.hind);
    uuendaTooted(tooted.slice())

  }

  const sorteeriHindKahanevalt = () => {
    tooted.sort((a,b) => b.hind - a.hind);
    uuendaTooted(tooted.slice())
  }
  const sorteeriAZ = () => {
    tooted.sort((a,b) => a.nimi.localeCompare(b.nimi))
    uuendaTooted(tooted.slice());
   }

 
   const sorteeriZA =() => {
    tooted.sort((a,b) => b.nimi.localeCompare (a.nimi))
    uuendaTooted(tooted.slice());
  }

  const filteeriNimiB = () => {
    const vastus = tooted.filter(toode => toode.nimi.startsWith("B"))
    uuendaTooted(vastus.slice());
  } 

  const filteeriNimiN = () => {
    const vastus = tooted.filter(toode => toode.nimi.startsWith("N"))
    uuendaTooted(vastus.slice());

  } 

  const filteeriNimiT = () => {
    const vastus = tooted.filter(toode => toode.nimi.startsWith("T"))
    uuendaTooted(vastus.slice());

  } 


  return (
    <div>

      <button onClick={sorteeriHindKasvavalt} >Sorteeri hind kasvavalt </button>
      <button onClick={sorteeriHindKahanevalt} >Sorteeri hind kahanevalt </button>
      <button onClick={sorteeriAZ} >Sorteeri nimi AZ </button>
      <button onClick={sorteeriZA} >Sorteeri nimi ZA  </button>
      <button onClick={filteeriNimiB} >Sorteeri nimi ZA  </button>
      <button onClick={filteeriNimiN} >Sorteeri nimi ZA  </button>
      <button onClick={filteeriNimiT} >Sorteeri nimi ZA  </button>

    { 
      tooted.map((toode,indeks) =>
      <div key={indeks}>
         <img className={ toode.pilt === true ?  "pilt" : "pilt-mitte-aktiivne"} src={toode.pilt} alt="" />
        <div>{toode.nimi}</div>
        <div>{toode.hind} €</div>
       
        
      
      { toode.aktiivne === true ? 
      <button onClick={() => lisaOstukorvi(toode) } >Lisa ostukorvi</button> : 
      <span>Toode mitteaktiivne</span>  }
      
      
      
        <Link to={"/yksik-toode/" + indeks} >
          <button>Vaata detailsemalt!</button>
        </Link>
      </div> ) 
    }
    
    </div>

  )
}

export default Tooted