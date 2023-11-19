import { useState } from 'react'
import { useTranslation } from 'react-i18next';


function Kontakt() {
  const { t, } = useTranslation();


const [n2itaTelKristiine, muudaN2itaTelKristiine] = useState(false);
const [n2itaTelYlemiste, muudaN2itaYlemiste] = useState(true);
const [n2itaTelTasku, muudaN2itaTasku] = useState(true);

  return ( <div>
    <br />
    <div>{t("võta-ühendust")}:</div>
    <br />
    <button onClick={() => muudaN2itaTelKristiine  (!n2itaTelKristiine)}>Kristiine Keskus</button>
    {n2itaTelKristiine && <div>+372111111</div>}
    <div>Endla 45</div>
    <br />

    <button onClick={() => muudaN2itaYlemiste  (!n2itaTelYlemiste)}>Ülemiste Keskus</button>
    {n2itaTelYlemiste && <div>+372222222</div>}
    <div>Suur-sõjamäe 4</div>
    <br />

    <button onClick={() => muudaN2itaTasku  (!n2itaTelTasku)}>Tasku Keskus</button>
    {n2itaTelTasku && <div>+372333333</div>}
    <div>Turu 2</div>


  </div> );
}

export default Kontakt