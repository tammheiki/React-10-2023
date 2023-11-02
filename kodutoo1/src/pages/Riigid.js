import React, {useState} from 'react'

function Riigid() {
    const [riigid, uuendaRiigid] = useState([
    "Albania","Belgium","Canada","Estonia","Greece",
    "Ireland","Latvia","Norway","Thailand","Ukraine", ]);

  
    const sorteeriZA = () => {
        riigid.sort((a,b) => a.localeCompare(b))
        uuendaRiigid(riigid.slice());
    }
  


    const lisaRiik = () => {
      const uuedRiigid = ["Australia", "Japan", "Korea", "New-Zealand"];
      const sortedRiigid = [...riigid, ...uuedRiigid].sort((a, b) => a.localeCompare(b));
      uuendaRiigid(sortedRiigid);
      
      
  }
    
  
  return (
    <div>
    <button onClick={sorteeriZA}>SorteeriZA</button>
    <button onClick={lisaRiik}>Lisa riik</button>
   
    {riigid.map(riik => <div> {riik} </div>)}
    

    </div>
  )
}

export default Riigid