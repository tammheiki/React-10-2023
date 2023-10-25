import React, { useState } from 'react'

function Seaded() {
  const[keel, muudaKeel] = useState ((localStorage.getItem) ("keel") || "ee ");
 
  

    const uuendaKeelEE = () => {
    muudaKeel("ee");
    localStorage.setItem("keel", "ee");
  } 

    const uuendaKeelEN = () => {
      muudaKeel("en");
      localStorage.setItem("keel", "en")
    }
    const uuendaKeelES =() => {
        muudaKeel("es")
        localStorage.setItem("keel", "es")
    }
       

  return (
    <div>
      {keel === "ee" && <div>Leht on eesti keelne</div>}
      {keel === "en" &&  <div>Page is in English</div>}
      {keel === "es" &&  <div>La pagina esta en español</div>}
      <button className= {keel === "ee" ? "aktiivne" : undefined }  onClick={uuendaKeelEE}>Estonian</button>
      <button className= {keel === "en" ? "aktiivne" : undefined }  onClick={uuendaKeelEN}>English</button>
      <button className= {keel === "es" ? "aktiivne" : undefined }  onClick={uuendaKeelES}>Spanish</button>
    </div>
  )
}

export default Seaded