import React, { useState } from 'react'
import kasutajadFailist from "../data/kasutajanimed.json"





function Kasutajad() {

  const [kasutaja, uuendaKasutaja] = useState(kasutajadFailist);

  const originaali = () => {
    uuendaKasutaja(kasutajadFailist.slice())
  }

  const rohkemKui10 = () => {
    const vastus = kasutajadFailist.filter(element => element.username.length > 10)
    uuendaKasutaja(vastus.slice())
  }

  const kustuta = (index) => {
    const vastus = kasutajadFailist.splice(index, 1)
    uuendaKasutaja(vastus.slice())
  }

  const leiaEmail = () => {
    const index = kasutajadFailist.findIndex(element => element.email === "Lucio_Hettinger@annie.ca" )
   console.log(index)
  }

  const algabC = () => {
    const vastus = kasutajadFailist.find(element => element.name.substring (0,1) === "C")
    console.log(vastus)

  }

  
  




  return (
    <div>
      <div> Kokku on: {kasutaja.length} 
      </div> <br />
      <button onClick={() => originaali() } >Originaali</button>
      <button onClick={() => rohkemKui10() } >Rohkem kui 10</button>
      <button onClick={() => leiaEmail() } >Email</button>
      <button onClick={() => algabC() } >C</button>
      
      
      {kasutajadFailist.map(element =><div> <br />
      <div> {element.id} </div> 
      <div> {element.name} </div>
      <div> {element.username} </div>
      <div> {element.email} </div>
      <div> {element.address.street} </div>
      <div> {element.address.suite} </div>
      <div> {element.address.city} </div>
      <div> {element.address.zipcode} </div>
      <div> {element.address.geo.lat} </div>
      <div> {element.address.geo.lng} </div>
      <div> {element.phone} </div>
      <div> {element.website} </div>
      <div> {element.company.name} </div>
      <div> {element.company.catchPhrase} </div>
      <div> {element.company.bs} </div>
      <button onClick={() => kustuta() } >X</button>
      




      </div> )}

    </div>
  )
}

export default Kasutajad