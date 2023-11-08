import React, { useState } from 'react'
import nimed from "../data/nimed.json"
import { useRef } from 'react'
import { Link } from 'react-router-dom'

function TagasisideAndjad() {
  const [andjad, uuendaAndjad] = useState(nimed)
  const lisaNimiRef = useRef()

  
  const sorteeriZA =() => {
    andjad.sort((a,b) => b.localeCompare (a))
    uuendaAndjad(andjad.slice());
  }

  const originaali = () => {
    uuendaAndjad(nimed.slice())

  }

  const algabM = () => {
    const vastus = nimed.filter(n2itamime => n2itamime.startsWith("M"))
    uuendaAndjad(vastus)
  }

  const kuuesT2ht = () => {
    const vastus = nimed.filter(n2itamime => n2itamime.length === 6 )
    uuendaAndjad(vastus)
      
  }

  const j2taYalles = () => {
    const vastus = nimed.filter(n2itamime => n2itamime.endsWith("y"))
    uuendaAndjad(vastus)
  }

  const lisaEst = () => {
    const vastus = andjad.map (n2itamime => "Est-" + n2itamime)
    uuendaAndjad(vastus)
  }

  const kustuta = (index) => {
    nimed.splice(index, 1)
    uuendaAndjad(nimed.slice())

  }

  const lisaNimi = () => {
    nimed.push(lisaNimiRef.current.value)
    uuendaAndjad(nimed.slice())

  }



  return (
  <div>
  

  
  <button onClick={ originaali} >Originaali</button>
  <button onClick={algabM} >Algab M Tähega</button>
  <button onClick={sorteeriZA} >ZA</button>
  <button onClick={kuuesT2ht} >Kuues täht</button>
  <button onClick={j2taYalles} >Filter Y</button>
  <button onClick={lisaEst} >Lisa EST</button>
  <br /> <br />
  <span> Kokku:{nimed.length} Nime</span> <br />

  <label>Lisa Nimi </label> 
  <input ref={lisaNimiRef} type="text" ></input>
  <button onClick={lisaNimi}>Lisa</button>

  <br /> <br />
  {andjad.map((n2itamime, index) => <div key={n2itamime} > {n2itamime} <button onClick={ () => kustuta (index)}>Kustuta</button> </div> )}

  





  </div>

  )
}

export default TagasisideAndjad