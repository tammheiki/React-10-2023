import React, {useRef} from 'react'
import productsFromFile from "../../data/products.json"
import {useNavigate, useParams } from 'react-router-dom'

function SingleProduct() {
  const {single_product} = useParams();
  const found = productsFromFile.find(product => product.id === Number(single_product));
  const idRef = useRef();
  const nameRef = useRef();
  const priceRef = useRef();
  const imageRef = useRef();
  const categoryRef = useRef();
  const descriptionRef = useRef();
  const activeRef = useRef();
  const navigate = useNavigate();

  
  const edit = () => {
    const index = productsFromFile.findIndex(product => product.id === Number(single_product));

    productsFromFile[index] = {

      "id": Number(idRef.current.value),
      "name": nameRef.current.value,
      "price": Number(priceRef.current.value),
      "image": imageRef.current.value,
      "category": categoryRef.current.value,
      "description": descriptionRef.current.value,
      "active": activeRef.current.checked
  }
  navigate("/");
}




if ( found === undefined) {
  return <div>Not found</div>
}
  return (
    <div>

      <label>ID:</label>
      <input ref={idRef} type="number" defaultValue={found.id} /> <br />

      <label>Name:</label>
      <input ref={nameRef} type="text" defaultValue={found.name} /> <br />

      <label>Price:</label>
      <input ref={priceRef} type="number" defaultValue={found.price} /> <br />

      <label>Image:</label>
      <input ref={imageRef} type="text" defaultValue={found.image} /> <br />

      <label>Category:</label>
      <input ref={categoryRef} type="text" defaultValue={found.category} /> <br />

      <label>Description:</label>
      <input ref={descriptionRef} type="text" defaultValue={found.description} /> <br />

      <label>Active:</label>
      <input ref={activeRef} type="checkbox" defaultValue={found.active} /> <br />

      <button onClick={edit} >Change</button>

    </div>
  )
}

export default SingleProduct


//// label ja inputi pole vaja -  lihtsalt toote andmed, mida välja kuvada


// 1. Suunake HomePage lehelt SingleProduct URL-le, saates kaasa ID
// 2. App.js sees võimaldage panna ID URLi sisse
// 3. SingleProductis võtke selle saadetud ID
// 4.a impordi kõik tooted
// 4. Otsige selle ID alusel toode üles
// 5. Muutke see saadud ID numbriks, sest URLst tulevad ainult sõnad
// 6. Kui ei leitud, siis tehke varajane return
// 7. Kuvage välja HTMLs see leitud toode (kui leiti ehk läks varajasest returnist üle)