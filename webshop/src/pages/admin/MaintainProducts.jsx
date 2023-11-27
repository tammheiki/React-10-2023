import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom';

import productsFromFile from "../../data/products.json"



function MaintainProducts() {
  const searchRef = useRef();

  const [products, setProducts] = useState(productsFromFile);

  const deleteProduct = (index) => {
    productsFromFile.splice(index, 1)
    setProducts(productsFromFile.slice());

}

const searchFromProducts = () =>{
  const result = productsFromFile.filter(product =>
     product.name.toLocaleLowerCase().includes(searchRef.current.value.toLocaleLowerCase()));
  setProducts(result);

}

 


  return (
    <div>

      <div>Total {products.length} product(s) </div>
      <input ref={searchRef} onChange={searchFromProducts} type="text" />

      {products.map((product, index )=>  
      <div key={product.id} className={product.active ? "active" : "inactive"}>
        
        <img src={product.image} alt="" />
        <div> {product.id} </div>
        <div> {product.name} </div>
        <div> {product.price} </div>
        <div> {product.description} </div>
        <div> {product.category} </div>
        <div> {product.active + 0} </div>
        <button onClick={() => deleteProduct(index) } >Kustuta</button>

      <Link to={"/admin/edit/" + product.id} >
        <button>Muuda</button>
      </Link>
      </div> )}
    </div>
  )
}

export default MaintainProducts