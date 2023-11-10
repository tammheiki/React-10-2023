import React, { useState } from 'react'

function Avaleht() {

  const tegelased = [ 
    
    {eesnimi: "Mikey", perenimi: "Mouse", elukoht: "Disneyland" }, 
    {eesnimi: "Minnie", perenimi: "Mouse", elukoht: "Disneyland" }, 
    {eesnimi: "Winnie", perenimi: "Pooh", elukoht: "Hundred Acre Wood" }, 
    {eesnimi: "Roo", perenimi: "Kangaroo", elukoht: "Hundred Acre Wood" }, 
    {eesnimi: "Scooby", perenimi: "Doo", elukoht: "Crystal Cove" }, 
  
  ]

  const [klikitudNimi, uuendaKlikitudnimi] = useState("");


  const kuvaNimi = (tegelane) => {
    uuendaKlikitudnimi(tegelane.eesnimi);


  }






  return (
    <div>
      <br />
      { klikitudNimi !== "" && <div>Tegelane {klikitudNimi} </div> }
      {tegelased.map(tegelane => <div> <br />
        <div>{tegelane.eesnimi} </div>
        <div>{tegelane.perenimi}</div> 
        <div>{tegelane.elukoht} </div>
        <button onClick={() => kuvaNimi (tegelane)  } >Eesnimi</button>
      </div>)}
      
    </div>

  )
}

export default Avaleht