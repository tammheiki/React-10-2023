import React, { useState } from 'react'


export default function Leiunurk() {

    const[n2ita, uuendeaN2ita] = useState(["shoes", "shirts", "socks", "sweaters", "pigs","goats", "sheep", "spray", "limit", "elite","destruction", "present", " March", "Jan", "Feb", "Dec"])

    const kustuta = (index) => {
        n2ita.splice(index, 1)
        uuendeaN2ita(n2ita.slice())
    }
    

    const tyhjenda = () => {
        n2ita.splice(0)
       uuendeaN2ita(n2ita.slice())
           
      }

    const sorteeriAZ = () => {
        n2ita.sort((a,b) => b.localeCompare (a))
        uuendeaN2ita(n2ita.slice());
    }

    const rohkemKuiNeli = () => {
        const vastus = n2ita.filter(n2itamime => n2itamime.length > 4 )
        uuendeaN2ita(vastus.slice())
    }

    const lisaJuurde = () => {
       n2ita.push ("cats", "dogs", "chickens")
        uuendeaN2ita(n2ita.slice())
      }


  return (
    <div> <br />
       <span>Kokku:{n2ita.length} Asja</span>
       <br /><br />
       <button onClick={tyhjenda} >Tühjenda</button>
       <button onClick={sorteeriAZ} >AZ</button>
       <button onClick={rohkemKuiNeli} >Rohkem kui 4</button>
       <button onClick={lisaJuurde} >Lisa Juurde</button>
        {n2ita.map(asjad =>  <div key={asjad}> {asjad} <button onClick={kustuta}>X</button>  </div> )}
    </div>
  )
}
