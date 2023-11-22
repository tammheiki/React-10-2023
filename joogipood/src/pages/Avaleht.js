import React, { useState } from 'react'
import tootedFailist from "../pages/data/joogid.json"

function Avaleht() {
  const [joogid, uuendaJoogid] = useState(tootedFailist)

  const kustuta = (index) => {
    tootedFailist.splice(index, 1)
    uuendaJoogid(tootedFailist.slice())
  }

  return (
    <div>

    {joogid.map((n2ita, index) => <div key={n2ita}> <div> {n2ita} </div> <button onClick={() => kustuta(index)} >X</button>
    
    </div> )}
      
    </div>
  )
}

export default Avaleht