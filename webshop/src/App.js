import { Link, Routes, Route } from "react-router-dom";
import './App.css';
import HomePage from "./pages/global/HomePage";
import Cart from "./pages/global/Cart";
import { ContactUs } from "./pages/global/ContactUs";
import Shops from "./pages/global/Shops";
import SingleProduct from "./pages/global/SingleProduct";
import AddProduct from "./pages/admin/AddProduct";
import AdminHome from "./pages/admin/AdminHome";
import EditProduct from "./pages/admin/EditProduct";
import MaintainCategories from "./pages/admin/MaintainCategories";
import MaintainProducts from "./pages/admin/MaintainProducts";
import MaintainShops from "./pages/admin/MaintainShops";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NotFound from "./pages/global/NotFound";
import { useTranslation } from 'react-i18next';




function App() {
  const { t, i18n } = useTranslation();

  const changeLangEn = () => {
    i18n.changeLanguage("en");
    localStorage.setItem("language", "en");
  }

  const changeLangEe = () => {
    i18n.changeLanguage("ee");
    localStorage.setItem("language", "ee");
  }

  const changeLangEs = () => {
    i18n.changeLanguage("es");
    localStorage.setItem("language", "es");
  }

  const changeLangNo = () => {
    i18n.changeLanguage("no");
    localStorage.setItem("language", "no");
  }


  return (

  <div className="App">


      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand as={Link} to="/">{t("webshop")}</Navbar.Brand>
            <img className="lang" src="/estonian.png" onClick={changeLangEe} alt="" />
            <img className="lang" src="/english.png" onClick={changeLangEn} alt="" />
            <img className="lang" src="/spanish.png" onClick={changeLangEs} alt="" />
            <img className="lang" src="/norsk.png" onClick={changeLangNo} alt="" />
            <Nav.Link as={Link} to="auth/login">{t("nav.login")}</Nav.Link>
            <Nav.Link as={Link} to="auth/signup">{t("nav.signup")}</Nav.Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/admin/home">{t("nav.admin")}</Nav.Link>
              <Nav.Link as={Link} to="/shops">{t("nav.shops")}</Nav.Link>
              <Nav.Link as={Link} to="/contact">{t("nav.contact")}</Nav.Link>
              <Nav.Link as={Link} to="/cart">{t("nav.cart")}</Nav.Link>
              <Nav.Link as={Link} to="/">{t("nav.homepage")}</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
      <Routes>
        <Route path="/" element= {<HomePage/>} />
        <Route path="Cart" element= {<Cart/>} />
        <Route path="Contact" element= {<ContactUs/>} />
        <Route path="Shops" element= {<Shops/>} />
        <Route path="product/:single_product" element= {<SingleProduct/>} />
        <Route path="admin/add" element= {<AddProduct/>} />
        <Route path="admin/home" element= {<AdminHome/>} />
        <Route path="admin/edit/:product_id" element= {<EditProduct/>} />
        <Route path="admin/maintain" element= {<MaintainCategories/>} />
        <Route path="admin/products" element= {<MaintainProducts/>} />
        <Route path="admin/shop" element= {<MaintainShops/>} />
        <Route path="auth/login" element= {<Login/>} />
        <Route path="auth/signup" element= {<Signup/>} />
        <Route path="*" element= {<NotFound/>} />
      </Routes>
    
    </div>
  );
}

export default App;



