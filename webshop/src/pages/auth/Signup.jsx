import React from 'react'
import { useTranslation } from 'react-i18next';

function Signup() {
  const { t, } = useTranslation();
  return (
    <div>
      <label>{t("email")}</label> <br />
      <input type="text" /> <br />
      <label>{t("password")}</label> <br />
      <input type="text" /> <br />
      <button>{t("registreeru")}</button>
    </div>
  )
}

export default Signup