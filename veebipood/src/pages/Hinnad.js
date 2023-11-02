import React, { useState } from 'react'

function Hinnad() {
  const [hinnad, uuendaHinnad] = useState([11,22,55,44,8,123,23,3,9]);

  const sorteeriKasvavalt = () => {
    hinnad.sort((a,b) => a - b );
    uuendaHinnad(hinnad.slice());
  }

  const filtreeriSuuremadKui30 = () => {
  const vastus = hinnad.filter (hind => hind > 30);
    uuendaHinnad(vastus);
  }

  const lisaHind = () => {
    hinnad.push(1234)
    uuendaHinnad(hinnad.slice ());
  }

  const kustuta = (jrknr) => {
    hinnad.splice(jrknr, 1)
    uuendaHinnad(hinnad.slice());
  }

  
  

  return (
    <div>

      <button onClick={sorteeriKasvavalt}>Sorteeri kasvavalt</button>
      <button onClick={filtreeriSuuremadKui30}>Jäta alles suuremad kui 30</button>
      <button onClick={lisaHind} >lisa</button>
      {hinnad.map((hind, jrknr) => 
      <div key={jrknr}>{hind} 
      < button onClick={() => kustuta(jrknr) }>x</button>
      </div>)} 
      


        
    </div>
  )
}

export default Hinnad