import React, { useRef, useState } from 'react'
import poedFailist from "../data/poed.json"
import { Link } from 'react-router-dom';

function Poed() {


  const [poed, muudaPoed] = useState(poedFailist.slice());
  const poodViide = useRef();


  const originaali = () => {
    muudaPoed(poedFailist.slice())

  }

  const sorteeriAZ = () => {
    poed.sort((a,b) => a.nimi.localeCompare(b.nimi))
    muudaPoed(poed.slice()); //slice kustutab ära mälukoha
   }

  const sorteeriZA =() => {
    poed.sort((a,b) => b.nimi.localeCompare (a.nimi))
    muudaPoed(poed.slice());
  }

  const filtreeriEgaLoppevad = () => {
    const vastus = poedFailist.filter(yksPood => yksPood.nimi.endsWith("e"))
    muudaPoed(vastus);

  }

  const sorteeriTahedKasvavalt = () => {
    poed.sort((a,b) => a.length - b.nimi.length ); //sorteerimiseks
    muudaPoed(poed.slice());//htmli muutmiseks
    
  }

  const sorteeriTahedKahanevalt = () => {
    poed.sort((a,b) => b.length - a.nimi.length ); 
    muudaPoed(poed.slice());
    
  }

  const sorteeriKolmandaTaheJargi = () => {
    poed.sort((a,b) => a.nimi[2].localeCompare (b.nimi[2]) ); 
    muudaPoed(poed.slice());
    
  }

  const filtreeriKesSisaldabIsLyhendit = () => {
    const vastus = poedFailist.filter (yksPood => yksPood.nimi.includes("is"));
    muudaPoed(vastus);
  }

  const sorteeriSonadeArvuJargi = () => {
    poed.sort((a,b) => a.nimi.split(" ").lenght - b.nimi.split(" ").length ); 
    muudaPoed(poed.slice());
  }
    

  const filtreeriKellelOn9Tahte = () => {
    const vastus = poedFailist.filter(yksPood => yksPood.nimi.length === 9)
    muudaPoed(vastus);
  }

  const filtreeriKellelOnVahemalt7Tahte = () => {
    const vastus = poedFailist.filter(yksPood => yksPood.nimi.length >= 7)
    muudaPoed(vastus);
  }

  const filtreeriKellelOnKolmasTahtI = () => {
    const vastus = poedFailist.filter(yksPood => yksPood.nimi[2] === "i" )
    muudaPoed(vastus);
  }

  const filtreeriKellelOnRohkemKui1Sona = () => {
    const vastus = poedFailist.filter(yksPood => yksPood.nimi.split (" ") > 1 )
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
      <div> {poed.length} tk </div>

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
      <div key={yksPood.nimi} className='pood'> 
      {yksPood.nimi} 
      <button onClick={ () => kustuta (yksPood) }>X</button>
      
      <Link to={"/yksik-pood/" + index}>
        <button>Vaata detailsemalt</button>
      </Link>

      </div> )}
    </div>
  )
}

export default Poed