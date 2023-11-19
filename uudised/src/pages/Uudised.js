import React from 'react'
import { useTranslation } from 'react-i18next';




function Uudised() {
  const { t, } = useTranslation();


  return ( <div>
    <br />

    <h3>{t("uudist pole")}</h3>


 </div> );
}

export default Uudised