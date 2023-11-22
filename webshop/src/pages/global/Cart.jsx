import React, { useState } from 'react'
import productsFromFile from "../../data/products.json"


function Cart() {
  
  const [cart, setCart] = useState(productsFromFile);

  const removeFromCart = (index) => {
    productsFromFile.splice(index, 1)
    setCart(productsFromFile.slice());
    
  }

  const emptyCart = () => {
    productsFromFile.splice(0)
    setCart(productsFromFile.slice());
       
  }


  const calculateCartSum = () => {
    let amount = 0;
    productsFromFile.forEach(productsFromFile => amount = amount + productsFromFile.price)
    return amount;

  }



  return (
    <div>
      
      <div>Total Sum: {calculateCartSum()}€  
        <br /> 
        Total {cart.length} product(s) 
      </div>
     
        {productsFromFile.length > 0 && 
        <button onClick={emptyCart} >Empty</button>}

        {cart.length === 0 && 
          <div> 
            <img 
              className='cartpicture' 
              src="https://cdn3.iconfinder.com/data/icons/shopping-and-ecommerce-29/90/empty_cart-512.png" 
              alt="" /> 
          </div>}

      {productsFromFile.map((product, index) =>
        <div key={product} >
          <img src={product.image} alt="" />
          <div> {product.id} </div>
          <div> {product.name} </div>
          <div> {product.price} </div>
          <div> {product.description} </div>
          <div> {product.category} </div>
          <div> {product.active + 0} </div>
          <button onClick={() => removeFromCart(index)} >X</button>
        </div>)}
    </div>
  )
}

export default Cart

  // 1. kuvage ostukorvi sisu Failist HTMLs välja - tehtud, kuvab kõik,peab refreshi tegema ,et summat n2itax
  // 2. võimaldage ostukorvist kustutada - tehtud
  // 3. võimaldage ostukorvi tühjendada - tehtud
  // 4. Arvutage ostukorvi kogusumma - tehtud
  // 5. Näidake ostukorvis asuvate toodete hulka numbrina - tehtud
  // 6. Kui ostukorv on tühi, siis peitke osad kohad ära - ? &&
  // 7. öelge, et ostukorv on tühi VÕI pange mingi pilt, et ostukorv on tühi - tehtud

  // 1. Pange Firebase üles
  // 2. SingleProduct vastavalt kommentaaridele
  // 3. AddProduct vastavalt kommentaaridele
  // 4. MaintainProducts failis kustutamine - tehtud
  // 5. HomePages sorteerimised:
  //         nimi A-Z ja Z-A
  //         hind kasvavalt ja kahanevalt
  // 6. Ostukorvi lisamine HomePagest cart.json faili - ?
  // 7. Cart lehe tegemine
  // 8. Filtreerimine HomePage lehel category järgi - tehtud
  //      näidake mitu toodet on avalehel nähtavad

  // 1. Suunake HomePage lehelt SingleProduct URL-le, saates kaasa ID -tehtud
  // 2. App.js sees võimaldage panna ID URLi sisse - -tehtud
  // 3. SingleProductis võtke selle saadetud ID - -tehtud
  // 4. Otsige selle ID alusel toode üles - -tehtud
  // 5. Muutke see saadud ID numbriks, sest URLst tulevad ainult sõnad - -tehtud
  // 6. Kui ei leitud, siis tehke varajane return - -tehtud
  // 7. Kuvage välja HTMLs see leitud toote (kui leiti ehk läks varajasest returnist üle)--tehtud

  // 8. Tehke 7 erinevat labelit ja inputi - -tehtud
  // 9. Tehke 7 erinevat useRefi, mille panime ükshaaval inputi sisse - -tehtud
  // 10. Tehke nupp, mis siduge ära funktsiooniga --tehtud
  // 11. Kõikide toodete hulka lisage see toode, 
  //          vastavalt mis oli refide current valuede sees - -tehtud
  // 12. HTMLs numbritele type "number" ja funktsioonis numbritele Number(),--tehtud 
  //        booleanitele checked
  // Vaadake nii EditProducti kui ka eesti keelset projekti

  // KODUS
      // refreshiga tuleb tagasi
      // mine vaata ka avalehele, kas on kustunud
      // peab kustutama failist, mitte products useState muutujast