import React, { useRef, useState } from 'react'
import poedFailist from "../data/poed.json"

function Poed() {


  const [poed, muudaPoed] = useState(poedFailist);
  const poodViide = useRef();


  const originaali = () => {
    muudaPoed(poedFailist.slice())

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

  const lisa = () => {
  poedFailist.push(poodViide.current.value)
  muudaPoed(poedFailist.slice());

  }

  const kustuta = (jrknr) => {
    poed.splice(jrknr,1)
    muudaPoed(poed.slice())
       
  }



  return (
    <div>

    <label> Pood </label> <br />
    <input ref={poodViide} type="text" /> <br />

    <div className="button-container">


      <button onClick={lisa}className='sort-button'>Lisa</button>
      <button onClick={originaali} className='sort-button' >Tagasi originaali</button> 
      <button onClick={sorteeriAZ} className='sort-button' >Sorteeri A-Z</button> 
      <button onClick={sorteeriZA} className='sort-button'>Sorteeri Z-A</button>
      <button onClick={sorteeriSonadeArvuJargi}className='sort-button'>Sorteeri sõna arvu järgi</button>
      <button onClick={sorteeriTahedKasvavalt}className='sort-button'>Sorteeri tähe arv kasvavalt</button>
      <button onClick={sorteeriTahedKahanevalt}className='sort-button'>Sorteeri kahanevalt</button>
      <button onClick={sorteeriKolmandaTaheJargi}className='sort-button'>Kolmanda tähe jargi</button>
      <button onClick={filtreeriEgaLoppevad}className='sort-button'>Filtreeri E-ga lõppevad</button>
      <button onClick={filtreeriKesSisaldabIsLyhendit}className='sort-button'>Filtreeri 'is' lühend</button>
      <button onClick={filtreeriKellelOn9Tahte}className='sort-button'>Filtreeri vähemlat kus on 9 tähte</button>
      <button onClick={filtreeriKellelOnVahemalt7Tahte}className='sort-button'>Filtreeri vähemalt kus on 7 tähte</button>
      <button onClick={filtreeriKellelOnKolmasTahtI}className='sort-button'>Filtreeri kolmas täht "i"</button>
      <button onClick={filtreeriKellelOnRohkemKui1Sona}className='sort-button'>Filtreeri rohkem kui kus on 1 täht</button>

      </div>

      {poed.map((yksPood,index) => 
      <div key={yksPood} className='pood'> 
      {yksPood} 
      <button onClick={() => kustuta(index) }>x</button>
      </div> )}
    </div>
  )
}

export default Poed