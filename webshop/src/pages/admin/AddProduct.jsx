import React, { useRef, useState } from 'react'
import productsFromFile from "../../data/products.json"

function AddProduct() {

  const [newProduct, setNewProduct] = useState(""); //muuda newproduct teisele nimle
  const idRef = useRef();
  const nameRef = useRef();
  const priceRef = useRef();
  const imageRef = useRef();
  const categoryRef = useRef();
  const descriptionRef = useRef();
  const activeRef = useRef();

  const addProduct = () => {
    setNewProduct("Product added!")
    productsFromFile.push({
      "id": Number(idRef.current.value),
      "name": nameRef.current.value,
      "price": Number(priceRef.current.value),
      "image": imageRef.current.value,
      "category": categoryRef.current.value,
      "description": descriptionRef.current.value,
      "active": activeRef.current.checked
    } )


    idRef.current.value = "";
    nameRef.current.value = "";
    priceRef.current.value = "";
    imageRef.current.value = "";
    categoryRef.current.value = "";
    descriptionRef.current.value = "";
    activeRef.current.checked = false
    

  }


  


  return (
    <div>
      <div> {newProduct} </div>
      <label>ID:</label>
      <input ref={idRef} type="number" /> <br />

      <label>Name:</label>
      <input ref={nameRef} type="text" /> <br />

      <label>Price:</label>
      <input ref={priceRef} type="number" /> <br />

      <label>Image:</label>
      <input ref={imageRef} type="text" /> <br />

      <label>Category:</label>
      <input ref={categoryRef} type="text" /> <br />

      <label>Description:</label>
      <input ref={descriptionRef} type="text" /> <br />

      <label>Active:</label>
      <input ref={activeRef} type="checkbox" /> <br />

      <button onClick={addProduct} >Add product</button>
    </div>
  )
}

export default AddProduct


