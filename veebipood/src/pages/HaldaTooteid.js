

import { Link } from "react-router-dom"
import tootedFailist from "../data/tooted.json"
import { useState } from "react"


function HaldaTooteid() {

  const [halda, uuendaHalda] = useState (tootedFailist)

  const kustuta = (jrknr) => {
    halda.splice(jrknr,1)
    uuendaHalda(halda.slice())

  }


  return (
    <div>
     
      {halda.map((n2itatooteid, indeks) =>
      <div key={indeks} className={ n2itatooteid.aktiivne === true ? "aktiivne-toode" : "mitteaktiivne"} >
        <div>{n2itatooteid.nimi}</div> 
       <div>{n2itatooteid.hind}</div>
       <div>{n2itatooteid.pilt}</div>
        <button onClick={() => kustuta(indeks) } >X</button>
        <Link to={"/muuda-toode/" + indeks} >
        <button>Muuda</button>
        </Link>

      </div> ) 
    }
     
    
    </div>
  )
}

export default HaldaTooteid








// import React from 'react'
// // 1. impordi tooted failist

// function HaldaTooteid() {
//   // 2. kuva kõik tooted .map() alusel HTMLs välja (Tooted.js failis on näide)

//   // 3.(ei ole oluline) võimalda toodet failist kustutada (Ostukorv.js failis on näide)

//   // 4. kustutamise nupu kõrvale nagu "vaata detailsemalt" nupp, aga tekstiks
//   //   "muuda", mis viib aadressile:
//   //  <Route path="muuda-toode/:toote_jrknr" element={<MuudaToode />} />



