import { Link, Routes, Route } from "react-router-dom";
import './App.css';
import HomePage from "./pages/global/HomePage";
import Cart from "./pages/global/Cart";
import ContactUs from "./pages/global/ContactUs";
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
import NavDropdown from 'react-bootstrap/NavDropdown';

// Favicon
// Rakenduse tabi nimi muuta --- public/index-- title
// Font muuta
// Not Found leht tekitada
// Firebase-i üles panna täpselt samamoodi nagu me varasemalt teinud oleme







function App() {
  return (

  <div className="App">


      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>


      <Link></Link>

      <Routes>
        <Route path="/" element= {<HomePage/>} />
        <Route path="/Cart" element= {<Cart/>} />
        <Route path="/ContactUs" element= {<ContactUs/>} />
        <Route path="/Shops" element= {<Shops/>} />
        <Route path="/SingleProduct" element= {<SingleProduct/>} />
        <Route path="/admin/add" element= {<AddProduct/>} />
        <Route path="/admin/home" element= {<AdminHome/>} />
        <Route path="/admin/edit" element= {<EditProduct/>} />
        <Route path="/admin/maintain" element= {<MaintainCategories/>} />
        <Route path="/admin/maintain-product" element= {<MaintainProducts/>} />
        <Route path="/admin/shop" element= {<MaintainShops/>} />
        <Route path="/auth/login" element= {<Login/>} />
        <Route path="/auth/signup" element= {<Signup/>} />
      </Routes>
    
    </div>
  );
}

export default App;
