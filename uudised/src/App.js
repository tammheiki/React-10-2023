
import './App.css';
import{ Link, Route, Routes} from "react-router-dom"
import Avaleht from './pages/Avaleht';
import Uudised from './pages/Uudised';
import Kontakt from './pages/Kontakt';
import Meist from './pages/Meist';
import Ostukorv from './pages/Ostukorv';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Mitteleitud from './pages/Mitteleitud';
import { useTranslation } from 'react-i18next';




function App() {
    const { t, i18n } = useTranslation();

  const changeLangEn = () => {
    i18n.changeLanguage("en");
    localStorage.setItem("language", "en")
  }

  const changeLangEe = () => {
    i18n.changeLanguage("ee");
    localStorage.setItem("language", "ee")
  }

  const changeLangEs = () => {
    i18n.changeLanguage("es");
    localStorage.setItem("language", "es")
  }


  return (

    <div className="App">

      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>

        <Navbar.Brand as={Link} to="/" >{t("eesti uudised")} <img className='uudisepilt' src="https://uueduudised.ee/wp-content/uploads/2023/08/uu-logo.png" alt="" /> </Navbar.Brand>
        <img className="lang" src="/english.png" onClick={changeLangEn} alt="" />
        <img className="lang" src="/estonia.png" onClick={changeLangEe} alt="" />
        <img className="lang" src="/spanish.png" onClick={changeLangEs} alt="" />

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            
          <Nav.Link as={Link} to="/uudised" >{t("uudised")}</Nav.Link>
          <Nav.Link as={Link} to="/kontakt" >{t("kontakt")}</Nav.Link>
          <Nav.Link as={Link} to="/meist" >{t("meist")}</Nav.Link>
          <Nav.Link as={Link} to="/Ostukorv" >{t("ostukorv")}</Nav.Link>
          
          
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

      
      <Routes>
        < Route path="" element={<Avaleht />} />
        < Route path="uudised" element={<Uudised />} />
        < Route path="kontakt" element={<Kontakt />} />
        < Route path="meist" element={<Meist />} />
        < Route path="ostukorv" element={<Ostukorv/>} />
        < Route path="*" element={<Mitteleitud />} />

        </Routes>

        
        
    </div>
  )
}

export default App;
