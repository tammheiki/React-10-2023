import React from 'react'
import { useParams } from 'react-router-dom'
import poedFailist from "../data/poed.json"

function YksikPood() {
  const{poe_indeks} = useParams();
  const leitudPood = poedFailist[poe_indeks];
 

  if (leitudPood === undefined) {
    return (<div>Poodi ei leitud</div>)
}


  return (
    <div>
      <div>Järjekorranumber: {poe_indeks} </div>
      <div>Poed nimi:{leitudPood.nimi} </div>
      <div>Telefon:{leitudPood.tel}</div>
      <div>Aadress:{leitudPood.aadr}</div>

    
    </div>
  )
}

export default YksikPood

// hookid:
  // useState - andmete muutmiseks HTMLs
  // useRef - inputi seest väärtuste kättesaamiseks
  // useParams - URLst muutujate kättesaamiseks
  // useNavigate - navigeeri mitte HTMLs vaid JavaScripti poole peal uuele URL-le
  // useTranslation - tõlkimiseks
  // useEffect - API päringuteks ehk teistesse rakendustesse ligi pääsemiseks
  //             Omniva pakiautomaadid
  // useContext - andmete failide vahel saatmiseks

  // Hookide Reeglid:
  // 1. algavad use algusega, selle on React ise valinud
  // 2. peab importima
  // 3. neil peavad olema sulud lõpus
  // 4. nad ei tohi olla funktsiooni sees loodud
  // 5. nad ei tohi olla tingimuslikult loodud