import React, { useState } from 'react'
import tegevusedFailist from "../data/tegevused.json"



function Tegevused() {
    const [tegevused, uuendaTegevused] = useState(tegevusedFailist);

    const n2itaKautajaYks = () => {
        const vastus = tegevused.filter( element => element.userId === 1 );
        uuendaTegevused(vastus.slice());
    }

    const n2itaKautajaKaks = () => {
        const vastus = tegevused.filter( element => element.userId === 2 );
        uuendaTegevused(vastus.slice());
    }

    const n2itaKautajaKolm = () => {
        const vastus = tegevused.filter( element => element.userId === 3 );
        uuendaTegevused(vastus.slice());
    }

    const valmisTegevused = () => {
        const vastus = tegevused.filter( element => element.completed === true );
        uuendaTegevused(vastus.slice());
    }

    const mitteValmisTegevused = () => {
        const vastus = tegevused.filter( element => element.completed === false );
        uuendaTegevused(vastus.slice());
    }

    const algabTt2hega = () => {
        const vastus = tegevusedFailist.filter(element => element.title.startsWith("t"))
        uuendaTegevused(vastus.slice());

    }

    const rohkemKui30 = () => {
        const vastus = tegevusedFailist.filter(element => element.title.length > 20)
        uuendaTegevused(vastus.slice());

    }

   

    const n2itaK6iki = () => {
        uuendaTegevused (tegevusedFailist.slice());
    }

    const kustuta = (indeks) => {
        tegevusedFailist.splice(indeks,1)
        uuendaTegevused(tegevusedFailist.slice())
           
      }


  return ( <div>

    <br />
    <div>Kogu tegevuse arv: {tegevused.length} </div>
    
    <button className='nupp' onClick={() => n2itaKautajaYks() } >Kuva kõik kasutaja ID 1 tegevused</button>
    <button className='nupp' onClick={() => n2itaKautajaKaks() } >Kasutaja ID 2 tegevused</button>
    <button className='nupp' onClick={() => n2itaKautajaKolm() } >Kasutaja ID 3 tegevused</button>
    <button className='nupp' onClick={() => valmisTegevused() } >Valmis tegevused</button>
    <button className='nupp' onClick={() => mitteValmisTegevused() } >Mittevalmis tegevused</button>
    <button className='nupp' onClick={() => algabTt2hega()} >Kõik "t" tähega algavad</button>
    <button className='nupp' onClick={() => rohkemKui30() } >Tähemärke rohkem kui 20 </button>
    <button className='nupp' onClick={() => n2itaK6iki() } >Tegevused tagasi </button>
   


    {tegevused.map(element =>
    <div> 
                
          <div>  {element.userId} </div>
          <div>  {element.id} </div>
          <div>  {element.title} </div>
          <div>  {element.completed} </div>
          <br />
          <button className='kustutaja' onClick={() => kustuta() } >X </button>
        </div>)}
    </div>
  )
}

export default Tegevused