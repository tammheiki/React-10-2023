import React from 'react';
import { useState } from 'react';


function Meist() {

  const [kontakt, n2itaKontakt] = useState("");
  const tootajad = [

    { nimi: "Arvo", ala: "Uudisklipid", telefon: "+372111111" },
    { nimi: "Kelly", ala: "Reporter", telefon: "+37222222" },
    { nimi: "Edward", ala: "Kujundaja", telefon: "+37233333" },
    { nimi: "Kerli", ala: "Spetsialist", telefon: "+3744444" },
    { nimi: "Heiki", ala: "Õpilane", telefon: "+37255555" }
  ]

  const [valitud, uuendaValitud] = useState("");

  const v6taYhendust = (tootaja) => {
    n2itaKontakt(tootaja.telefon);
    uuendaValitud(tootaja.nimi);
  }


  return ( <div>
    <br />
    <div>Meie töötajad:</div> <br />
    <div>Kontakt: {kontakt}</div>
    <div>Valitud töötaja: {valitud} </div>
    <br />
    {tootajad.map(tootaja =>
      <div className={tootaja.nimi === valitud ? "valitud" : undefined}>
        <div> {tootaja.nimi}</div>
        <div> {tootaja.ala}</div>
        <button onClick={() => v6taYhendust(tootaja)} >Võta ühendust</button>
      </div>)}
    <br /><br />



  </div>)
}

export default Meist