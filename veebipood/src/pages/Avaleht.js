//tumesinine - javascriptis määratlus, function,const, let
//html-is <div> <a> <p> <button>
//javascriptis reserveeritud sõnad: false,true, undefnied, null
//tavaline sinine- javascripti muutujad - oleme need ise loonud
//helesinine - JS sissekirjutatud muutujad console.log() localStorage.getItem()
//kollane - funktsioon,sulud käivad lõppu(), mida on võimalik korduvalt välja kutsuda
//oranz/punane - jutumärkides sõnad
//heleroheline - numbrilised väärtused
//tumeroheline-kommentaar
//valged - märgid, htmlis väljanäidatav tekst
//lillad - tegevused,import,export,return,if,else


// loogelised sulud {} - JavaScript: koodiblokk    function {}  if() {} else {}
//                        HTML: JavaScript ehk dünaamika koodiblokk
//                      on useBLABLA ees kui muutujate arv on valikuline
// tavalised sulud - funktsiooni väljakutse      Avaleht()     muudaKogus(5)    if () <-- kontroll
// kandilised sulud - useState juures, sellepärast et meil läheb TÄPSELT kahte vaja: muutujat ja funktsiooni
// ; - semikoolon kui rea lõpetaja, pole kohustuslik, aga suur osa ettevõtetest paneb kohustuslikuks
// = - väärtuse andja, = useState, disabled={}, onClick={}
// === - vasak ja parem pool on võrdsed
// >   <   <=   >=    suurem, väiksem, väiksem võrdne, suurem võrdne
// && - kui vasakul pool on tõde, siis on parem pool nähtav
// ! - keerab väärtust tagurpidi
// () =>   funktsiooni tähis HTMLs kui tehakse onClick




import React, { useState } from 'react'

function Avaleht() {

  //vasakpoolne sõna(muutuja) läheb htmli loogeliste sulgude sisse
  //parempoolne sõna(funktsiooni) abil uuendatakse vasakpoolset ja HTMLi korraga
const [kogus, muudaKogus] = useState(8);
const [laigitud, uuendaLaigitud] = useState(false);
const [ sonum, m22raSonum] = useState("muuda kogust!");

function nulli () {
    m22raSonum("Nullitud!");
    muudaKogus (kogus + 1);
}



function vahenda () {
    m22raSonum("Vähendatud!");
    muudaKogus (kogus - 1);
}


function suurenda () {
    m22raSonum("Suurendatud!");
    muudaKogus (kogus + 1);
}

  return (
    <div>
        <div> {sonum} </div>

       {laigitud === true && kogus < 10 && <img src='/laigitud.svg' alt='' onClick={()=> m22raSonum("Punane süda - vähem kui 10") } />}
       {laigitud === false && <img src='/mittelaigitud.svg' alt=''onClick={()=> m22raSonum("Roheline süda - rohkem kui 10") } />}
       {laigitud === true && kogus > 10 && <img src='/legendaarne.svg' alt=''onClick={()=> m22raSonum("Kollane süda - rohkem kui 10") } />}
        <button onClick={() => uuendaLaigitud (!laigitud)}>Muuda laigitut</button>
        {/* {kogus > 0 && <button onClick={() => muudaKogus(0)}>Nulli-</button>} */}
            
        <button disabled={kogus ===0} onClick={() => nulli(0)}>Nulli</button>
         <br />
        {kogus > 0 && <button onClick={() => muudaKogus(kogus - 1)}>-</button>}
        <br />
        <button disabled={kogus ===0} onClick={() => vahenda()}>-</button>

        <span className={kogus >=10 ? "kuldne" : undefined } > Kokku: {kogus} tk</span>
        <button onClick={() => suurenda()}>+</button>
        
    </div>
  )
}

export default Avaleht