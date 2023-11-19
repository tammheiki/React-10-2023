import React from 'react'
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Nav from 'react-bootstrap/Nav';

function HomePage() {

  const { t, } = useTranslation();


  return (
    <div>

      <Nav.Link as={Link} to="/">{t("nav.homepage")}</Nav.Link>
    </div>
  )
}

export default HomePage