import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Nav from 'react-bootstrap/Nav';
import productsFromFile from "../../data/products.json"



function HomePage() {
  const { t, } = useTranslation();
  const [products, setProducts] = useState(productsFromFile);
  

  const addToCart = (add) => {
    products.push (add)
    setProducts(products.slice());

  }

  const sortAZ = () => {
    productsFromFile.sort((a,b) => a.name.localeCompare(b.name));
    setProducts(productsFromFile.slice());
  }

  const sortZA = () => {
    productsFromFile.sort((a,b) => b.name.localeCompare(a.name));
    setProducts(productsFromFile.slice());
  }

  const sortPricesAsc = () => {
    productsFromFile.sort((a,b) => a.price - b.price);
    setProducts(productsFromFile.slice());
  }

  const sortPricesDesc = () => {
    productsFromFile.sort((a,b) => b.price - a.price);
    setProducts(productsFromFile.slice());
  }

  const filterByFigure = () => {
    const filteredProducts = productsFromFile.filter (product => product.name.toLowerCase().includes("figure"));
    setProducts(filteredProducts);
  }

  const filterByLego = () => {
    const filteredProducts = productsFromFile.filter (product => product.name.toLowerCase().includes("lego"));
    setProducts(filteredProducts);
  }

  const filterByStarWars = () => {
    const filteredProducts = productsFromFile.filter (product => product.name.toLowerCase().includes("star wars"));
    setProducts(filteredProducts);
  }

 

  return (
    <div>
      <div>Total {products.length} product(s) </div>
        <button onClick={sortAZ} >SortAZ</button>
        <button onClick={sortZA} >SortZA</button>
        <button onClick={sortPricesAsc} >Sort price Asc</button>
        <button onClick={sortPricesDesc} >Sort price Desc</button>
        <button onClick={filterByLego} >Lego</button>
        <button onClick={filterByStarWars} >Starwars</button>
        <button onClick={filterByFigure} >Figure</button>
  
      {products.map(product =>  
        <div key={product}> 
        <img src={product.image} alt="" />
        <div> {product.name} </div>
        <div> {product.price} </div>

        <Link to={"/cart"} >
          <button onClick={ () => addToCart (products) }>Add to Cart</button> 
        </Link>

        <Link to={"/product/" + product.id} >
          <button>View Product</button>
        </Link>

      </div>)}
        <Nav.Link as={Link} to="/">{t("nav.homepage")}</Nav.Link>
    </div>
  )
}

export default HomePage






        // {/* <div> {product.description} </div> */}
        // {/* <div> {product.category} </div> */}
        // {/* <div> {product.active} </div> */}
        // {/* <div> {product.id} </div> */}

 