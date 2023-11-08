import React, { useRef, useState } from 'react'
import tootedFailist from "../pages/data/joogid.json"

function HaldaJooke() {
    const [joogid, UuendaJoogid] = useState(tootedFailist)
    const jookRef = useRef()
   
    


    const kustuta = (indeks) => {
        tootedFailist.splice(indeks,1)
        UuendaJoogid(tootedFailist.slice())
           
      }

      const lisaUusJook = () => {
        tootedFailist.push(jookRef.current.value)
        UuendaJoogid(tootedFailist.slice())

      }

   
  

  return (
    <div> 
        
        {joogid.map((element, indeks) => 
        <div key={element} > 
        <span>{element} </span>
        <button onClick={() => kustuta(indeks)} >X</button> 
        </div> ) }

        <label></label>
        <input ref={jookRef} type="text"/>
        <button onClick={lisaUusJook} >Lisa Jook</button>


    </div>

    
  )
}

export default HaldaJooke