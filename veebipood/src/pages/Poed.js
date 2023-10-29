import React, { useState } from 'react'
import poedFailist from "../data/poed.json"

function Poed() {
  const [poed, muudaPoed] = useState(poedFailist);


  const originaali = () => {
    muudaPoed(poedFailist)

  }

  const sorteeriAZ = () => {
    poed.sort((a,b) => a.localeCompare(b))
    muudaPoed(poed.slice()); //slice kustutab ära mälukoha
   }

  const sorteeriZA =() => {
    poed.sort((a,b) => b.localeCompare (a))
    muudaPoed(poed.slice());
  }

  const filtreeriEgaLoppevad = () => {
    const vastus = poedFailist.filter(yksPood => yksPood.endsWith("e"))
    muudaPoed(vastus);

  }

  const sorteeriTahedKasvavalt = () => {
    poed.sort((a,b) => a.length - b.length ); //sorteerimiseks
    muudaPoed(poed.slice());//htmli muutmiseks
    
  }

  const sorteeriTahedKahanevalt = () => {
    poed.sort((a,b) => b.length - a.length ); 
    muudaPoed(poed.slice());
    
  }

  const sorteeriKolmandaTaheJargi = () => {
    poed.sort((a,b) => a[2].localeCompare (b[2]) ); 
    muudaPoed(poed.slice());
    
  }

  const filtreeriKesSisaldabIsLyhendit = () => {
    const vastus = poedFailist.filter (yksPood => yksPood.includes("is"));
    muudaPoed(vastus);
  }

  const sorteeriSonadeArvuJargi = () => {
    poed.sort((a,b) => a.split(" ").lenght - b.split(" ").lenght ); 
    muudaPoed(poed.slice());
  }
    

  const filtreeriKellelOn9Tahte = () => {
    const vastus = poedFailist.filter(yksPood => yksPood.length === 9)
    muudaPoed(vastus);
  }

  const filtreeriKellelOnVahemalt7Tahte = () => {
    const vastus = poedFailist.filter(yksPood => yksPood.length >= 7)
    muudaPoed(vastus);
  }

  const filtreeriKellelOnKolmasTahtI = () => {
    const vastus = poedFailist.filter(yksPood => yksPood[2] === "i" )
    muudaPoed(vastus);
  }

  const filtreeriKellelOnRohkemKui1Sona = () => {
    const vastus = poedFailist.filter(yksPood => yksPood.split (" ") > 1 )
    muudaPoed(vastus);
  }


  
  return (
    <div>
      <button onClick={originaali}>Tagasi originaali</button> <br />
      <button onClick={sorteeriAZ}>Sorteeri A-Z</button> 
      <button onClick={sorteeriZA}>Sorteeri Z-A</button>
      <button onClick={sorteeriSonadeArvuJargi}>Sorteeri sõna arvu järgi</button>
      <button onClick={sorteeriTahedKasvavalt}>Sorteeri tähe arv kasvavalt</button>
      <button onClick={sorteeriTahedKahanevalt}>Sorteeri kahanevalt</button>
      <button onClick={sorteeriKolmandaTaheJargi}>kolmanda tähe jargi</button>
      <br /><br />
      <button onClick={filtreeriEgaLoppevad}>filtreeri e-ga lõppevad</button>
      <button onClick={filtreeriKesSisaldabIsLyhendit}>Filtreeri 'is' lühend</button>
      <button onClick={filtreeriKellelOn9Tahte}>9 tähte</button>
      <button onClick={filtreeriKellelOnVahemalt7Tahte}>Filtreeri vähemalt 7 tähte</button>
      <button onClick={filtreeriKellelOnKolmasTahtI}>Filtreeri kolmas täht i</button>
      <button onClick={filtreeriKellelOnRohkemKui1Sona}>Filtreeri rohkem kui 1 täht</button>
      
      {poed.map(yksPood => <div className='pood'> {yksPood} </div> )}
    </div>
  )
}

export default Poed