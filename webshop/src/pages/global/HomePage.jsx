import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import productsFromFile from "../../data/products.json"
import Button from '@mui/material/Button';

// import cartFromFail from "../../data/cart.json"


function HomePage() {

 
  const [products, setProducts] = useState(productsFromFile.slice());
  

  const addToCart = (product) => { 

    const cartFromLS = JSON.parse(localStorage.getItem("cart")) || [];
    cartFromLS.push (product)
    localStorage.setItem("cart", JSON.stringify(cartFromLS));

    // localStorage-sse pannes:
    // 1. võtta localStorage-st:   localStorage.getItem(VÕTI) || []
    // 2. võtta jutumärgid maha:   JSON.parse()
    // 3. lisada localStorage-st võetule üks juurde:    .push(UUS_ASI)
    // 4. panna jutumärgid tagasi: JSON.stringify()
    // 5. panna localStorage-sse tagasi:   localStorage.setItem(VÕTI, UUS_VÄÄRTUS)


   

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
    const filteredProducts = productsFromFile.filter (product => product.category.toLowerCase() === "figure");
    setProducts(filteredProducts);
  }

  const filterByLego = () => {
    const filteredProducts = productsFromFile.filter (product => product.category.toLowerCase() === "lego");
    setProducts(filteredProducts);
  }

  const filterByStarWars = () => {
    const filteredProducts = productsFromFile.filter (product => product.category.toLowerCase() === "star wars");
    setProducts(filteredProducts);
  }

 

  return (
    <div>
        <div>Total {products.length} product(s) </div> 
        <button onClick={sortAZ} >SortA-Z</button>
        <button onClick={sortZA} >SortZ-A</button>
        <button onClick={sortPricesAsc} >Sort price Asc</button>
        <button onClick={sortPricesDesc} >Sort price Desc</button>
        <button onClick={filterByLego} >Lego</button>
        <button onClick={filterByStarWars} >Starwars</button>
        <button onClick={filterByFigure} >Figure</button> 
  
        {products.map((product, index) =>  
        <div key={index}> 
          <img src={product.image} alt="" />
          <div> {product.name} </div>
          <div> {product.price} </div>

         
          <Button variant="contained" onClick={() => addToCart (product)}>Add to Cart</Button>
        

          <Link to={"/product/" + product.id} >
            <button>View Product</button>
          </Link>

        </div>)}
         
      </div>
  )
}

export default HomePage






        // {/* <div> {product.description} </div> */}
        // {/* <div> {product.category} </div> */}
        // {/* <div> {product.active} </div> */}
        // {/* <div> {product.id} </div> */}


          // 27.11   13. E localStorage-sse massiiv (array)  --->   KOJU suur hunnik kodutöid
          //          MUI kujundust
          // 29.11   14. K objekt ostukorvis ---> kogused ostukorvis iga toote juures
          //        K kujundus ostukorvis ---> KOJU ei saada
          // 02.12   15. L API päringud -> pakiautomaatide võtmine ---> KOJU saadan mõne faili
          // 06.12   16. K andmebaasi kõik meie kategooriad, tooted, poed jne.... ---> saadan proovitöö Nortali osas
          // 11.12   17.  Alamkomponendid, Context, vaatame proovitöö üle ---> saadan veel mõned proovitööd 2-3tk
          // 21.12   18. Lõpuprojekti esitlemine

 