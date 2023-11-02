
import React, { useState } from 'react'

function Avaleht() {

   
const [kogus, muudaKogus] = useState(localStorage.getItem("kogus") || 0 );
const [laigitud, uuendaLaigitud] = useState(false);
const [ sonum, m22raSonum] = useState("muuda kogust!");

function nulli () {
    m22raSonum("Nullitud!");
    muudaKogus (0);
    localStorage.setItem("kogus", 0 );
}



function vahenda () {
    m22raSonum("Vähendatud!");
    muudaKogus (kogus - 1);
    localStorage.setItem("kogus", kogus - 1);
}


function suurenda () {
    m22raSonum("Suurendatud!");
    muudaKogus (kogus + 1);
    localStorage.setItem("kogus", kogus + 1);
}

  return (
    <div>
      <div> {sonum} </div>

       {laigitud === true && kogus < 10 && <img src='/laigitud.svg' alt='' onClick={()=> m22raSonum("Punane süda - vähem kui 10") } />}
       {laigitud === false && <img src='/mittelaigitud.svg' alt=''onClick={()=> m22raSonum("Roheline süda - rohkem kui 10") } />}
       {laigitud === true && kogus > 10 && <img src='/legendaarne.svg' alt=''onClick={()=> m22raSonum("Kollane süda - rohkem kui 10") } />}
       <button onClick={() => uuendaLaigitud (!laigitud)}>Muuda laigitut</button>
       <br />
        <button disabled={kogus ===0} onClick={() => vahenda()}>-</button>
        <span className={kogus >=10 ? "kuldne" : undefined } > Kokku: {kogus} tk</span>
        <button onClick={() => suurenda()}>+</button>
        <button disabled={kogus === 0} onClick={() => nulli()}>Nulli</button>
       <br />
       <br />   
       
      
      
        
    </div>
  )
}

export default Avaleht