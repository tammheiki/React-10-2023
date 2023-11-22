import React, { useRef, useState } from 'react'
import{ useNavigate, useParams } from "react-router-dom"
import productsFromFile from "../../data/products.json"
import { ToastContainer, toast } from 'react-toastify'

function EditProduct() {
  const {product_id} = useParams();
  const found = productsFromFile.find(product => product.id === Number(product_id));
  const idRef = useRef();
  const nameRef = useRef();
  const priceRef = useRef();
  const imageRef = useRef();
  const categoryRef = useRef();
  const descriptionRef = useRef();
  const activeRef = useRef();
  const navigate = useNavigate();
  const [idUnique, setUnique] = useState(true);

  const edit = () => {

    if(idRef.current.value === "") {
      toast.error("ID pole täidetud!");
      return;
    }
    if(nameRef.current.value === "") {
      toast.error("Nimi pole täidetud!");
      return;
    }
    if(priceRef.current.value === "") {
      toast.error("Hind pole täidetud!");
      return;
    }

    if (Number(priceRef.current.value < 0)) {
      toast.error("Hind peab olema positiivne");
      return;
    }

    // if(nameRef.current.value[0] === nameRef.current.value[0].toLowerCase()) {
    //   toast.error("Väikse algusetähega või numbri või tähemärgiga ei saa alustada");
    //   return;
    // }

    if(nameRef.current.value[0] !== nameRef.current.value[0].toUpperCase()) {
      toast.error("Väikse algusetähega ei sa alustada");
      return;
    }



    const index = productsFromFile.findIndex(product => product.id === Number(product_id));

    productsFromFile[index] = {

      "id": Number(idRef.current.value),
      "image": imageRef.current.value,
      "name": nameRef.current.value,
      "price": Number(priceRef.current.value),
      "description": descriptionRef.current.value,
      "category": categoryRef.current.value,
      "active": activeRef.current.checked
  }
  navigate("/admin/products");
}

const checkIdUniquness = () => {
const result = productsFromFile.find(product => product.id === Number(idRef.current.value));

  if (result === undefined) {
    setUnique(true);

  } else {
    setUnique(false);
  }
}
  

  if ( found === undefined) {
    return <div>Ei leitud</div>
  }



  return (
    <div>
      { idUnique === false && <div>Sisetatud ID ei ole unikaalne!</div>}
      <label>ID:</label> 
      <input ref={idRef} onChange={checkIdUniquness} type="number" defaultValue={found.id} /> <br />

      <label>Name:</label> 
      <input ref={nameRef} type="text" defaultValue={found.name}/> <br />

      <label>Price:</label> 
      <input ref={priceRef} type="number" defaultValue={found.price}/> <br />

      <label>Image:</label> 
      <input ref={imageRef} type="text" defaultValue={found.image}/> <br />

      <label>Category:</label> 
      <input ref={categoryRef} type="text" defaultValue={found.category}/> <br />

      <label>Description:</label> 
      <input ref={descriptionRef} type="text" defaultValue={found.description} /> <br />

      <label>Active</label> 
      <input ref={activeRef} type="checkbox" defaultValue={found.active} /> <br />

      <button disabled={idUnique === false} onClick={edit} >Muuda</button>

      <ToastContainer
      theme='dark' 
      position='bottom-right'/>
    </div>
  )
}

export default EditProduct



