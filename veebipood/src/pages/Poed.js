import React, { useState } from 'react'

function Poed() {
  const [poed, muudaPoed] = useState(["Ülemiste", "Viimsi","Rocca al Mare", "Magistrali", "Vesse", "Kristiine","Järveotsa",]);

  const sorteeriAZ = () => {
    poed.sort((a,b) => a.localeCompare(b))
    muudaPoed(poed.slice()); //slice kustutab ära mälukoha
   }

  const sorteeriZA =() => {
    poed.sort((a,b) => b.localeCompare (a))
    muudaPoed(poed.slice());
  }

  const filtreeriEgaLoppevad = () => {
    const vastus = poed.filter(yksPood => yksPood.endsWith("e"))
    muudaPoed(vastus);

  }

  const filtreeriKesSisaldabIsLyhendit = () => {
    const vastus = poed.filter (yksPood => yksPood.includes("is"));
    muudaPoed(vastus);
  }

  const originaali = () => {
    muudaPoed(["Ülemiste", "Viimsi","Rocca al Mare", "Magistrali", "Vesse", "Kristiine","Järveotsa"],)

  }
  
  return (
    <div>
      <button onClick={originaali}>Tagasi originaali</button>
      <button onClick={sorteeriAZ}>Sorteeri A-Z</button>
      <button onClick={sorteeriZA}>Sorteeri Z-A</button>
      <button onClick={filtreeriEgaLoppevad}>filtreeri e-ga lõppevad</button>
      <button onClick={filtreeriKesSisaldabIsLyhendit}>Jäta alles kellel on 'is' lühend</button>
      {poed.map(yksPood => <div className='pood'> {yksPood} </div> )}
    </div>
  )
}

export default Poed