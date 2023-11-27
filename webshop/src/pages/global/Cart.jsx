import React, { useState } from 'react'
// import cartFromFail from "../../data/cart.json"


function Cart() {
  
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || []);

  const removeFromCart = (index) => {
    cart.splice(index, 1)
    setCart(cart.slice());
    localStorage.setItem("cart", JSON.stringify(cart));
    
  }

  const emptyCart = () => {
    cart.splice(0)
    setCart(cart.slice());
    localStorage.setItem("cart", JSON.stringify(cart));
       
  }


  const calculateCartSum = () => {
    let amount = 0;
    cart.forEach(product => amount = amount + product.price)
    return amount.toFixed(2);

  }



  return (
    <div>
      <div>Total Sum: {calculateCartSum()}€
        <br />
        {cart.length > 0 && <div> Total {cart.length} Product(s)</div>}
      </div>
         {cart.length > 0 && <button onClick={emptyCart} >Empty</button>}
          {cart.length === 0 &&
         
          <img
            className='cartpicture'
            src="https://cdn3.iconfinder.com/data/icons/shopping-and-ecommerce-29/90/empty_cart-512.png"
            alt="" />
          }

      {cart.map((product, index) =>
        <div key={product} >
          <img src={product.image} alt="" />
          <div> {product.name} </div>
          <div> {product.price} </div>
          <button onClick={() => removeFromCart(index)} >X</button>
        </div>)}
    </div>
  )
}

export default Cart

  // 1. kuvage ostukorvi sisu Failist HTMLs välja - tehtud
  // 2. võimaldage ostukorvist kustutada - tehtud
  // 3. võimaldage ostukorvi tühjendada - tehtud
  // 4. Arvutage ostukorvi kogusumma - tehtud
  // 5. Näidake ostukorvis asuvate toodete hulka numbrina - tehtud
  // 6. Kui ostukorv on tühi, siis peitke osad kohad ära - tehtud
  // 7. öelge, et ostukorv on tühi VÕI pange mingi pilt, et ostukorv on tühi - tehtud

  // 1. Pange Firebase üles
  // 2. SingleProduct vastavalt kommentaaridele - tehtud, pilti ei kuva
  // 3. AddProduct vastavalt kommentaaridele
  // 4. MaintainProducts failis kustutamine - tehtud
  // 5. HomePages sorteerimised:
  //         nimi A-Z ja Z-A
  //         hind kasvavalt ja kahanevalt
  // 6. Ostukorvi lisamine HomePagest cart.json faili - tehtud
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