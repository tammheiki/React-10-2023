import React, { useRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import tootedFailist from "../data/tooted.json"

function MuudaToode() {

  const {toote_jrknr} = useParams();
  const leitudToode = tootedFailist[toote_jrknr];

  const nimiViide = useRef()
  const piltViide = useRef()
  const hindViid = useRef()
  const aktiivneViide = useRef()
  const navigate = useNavigate()

  const muuda = () => {
    tootedFailist[toote_jrknr] = {
    "nimi" : nimiViide.current.value, 
    "hind" : Number (hindViid.current.value), 
    "aktiivne": aktiivneViide.current.checked, 
    "pilt": piltViide.current.value }

    navigate("/halda")

  }

 

  if (leitudToode === undefined) {
    return (<div>Toodet ei leitud</div>)
}


  return (

    
    <div>MuudaToode

      <div>Järjekorranumber: {toote_jrknr} </div>
      <br />
      {/* <div>Toote nimi: {leitudToode} </div> */}
      <label>Toote nimi</label> <br />
      <input ref={nimiViide} type="text" defaultValue={leitudToode.nimi} /> <br />

      <label>Toote pilt</label> <br />
      <input ref={piltViide} type="text" defaultValue={leitudToode.pilt} /> <br />

      <label>Toote hind</label> <br />
      <input ref={hindViid} type="number" defaultValue={leitudToode.hind} /> <br />

      <label>Toote aktiivsus</label> <br />
      <input ref={aktiivneViide} type="checkbox" defaultChecked={leitudToode.aktiivne} /> <br />


      <div>Toote pilt:</div>
      <div>Toote hind: </div>
      <button onClick={muuda} >Muuda</button> <br />

    </div>
    
  )
}

export default MuudaToode

  // 1. impordi tooted failist

  // 2. võta URLi muutuja useParams abiga

  // 3. loo mall HTMLi ehk tekstiväljad, kus sees on muutuvad kohad

  // 4. kuva välja järjekorranumber HTMLs

  // 5. leia toode üles

  // 6. kuva toode HTMLs

  // 7. kui ei leita, siis tee early return

  // muutmine ja kustutamine käivad mõlemad AINULT järjekorranumbri alusel

// VÕTMINE
// Get the value "Volvo" from the cars array.

// const cars = ["Saab", "Volvo", "BMW"];
// let x = cars[1];

// MUUTMINE
// Change the first item of cars to "Ford".


// const cars = ["Volvo", "Jeep", "Mercedes"];
// cars[0] = "Ford";

