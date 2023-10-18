import React, { useState } from 'react'

function Avaleht() {
const [kogus, muudaKogus] = useState(8);
const [laigitud, uuendaLaigitud] = useState(false);
const [ sonum, m22raSonum] = useState("muuda kogust!")

function nulli () {
    m22raSonum("Nullitud!");
    muudaKogus (kogus + 1);
}



function vahenda () {
    m22raSonum("Vähendatud!");
    muudaKogus (kogus - 1);
}


function suurenda () {
    m22raSonum("Suurendatud!");
    muudaKogus (kogus + 1);
}

  return (
    <div>
        <div> {sonum} </div>

        {laigitud === true && kogus < 10 && <img src='/laigitud.svg' alt='' onClick={()=> m22raSonum("Punane süda - vähem kui 10") } />}
       {laigitud === false && <img src='/mittelaigitud.svg' alt=''onClick={()=> m22raSonum("Roheline süda - vähem kui 10") } />}
       {laigitud === true && kogus > 10 && <img src='/legendaarne.svg' alt=''onClick={()=> m22raSonum("Kollane süda - rohkem kui 10") } />}
        <button onClick={() => uuendaLaigitud (!laigitud)}>Muuda laigitut</button>
        {/* {kogus > 0 && <button onClick={() => muudaKogus(0)}>Nulli-</button>} */}
            
        <button disabled={kogus ===0} onClick={() => nulli(0)}>Nulli</button>
         <br />
        {/* {kogus > 0 && <button onClick={() => muudaKogus(kogus - 1)}>-</button>} */}
        <br />
        <button disabled={kogus ===0} onClick={() => vahenda()}>-</button>

        <span>Kokku: {kogus} tk</span>
        <button onClick={() => suurenda()}>+</button>
        
    </div>
  )
}

export default Avaleht