import React from 'react'
import { Link } from "react-router-dom"

function VaataArvuteid() {

 



  return (


    <div>
      
      <img className='arvuti' src="https://ksd-images.lt/display/onea_ee/uploads/ca/119/699dcfb5.jpg" alt="" /> <br />
      <Link to={"/ostukorv"}>
      <button >Lisa ostukorvi</button>
      </Link>


    </div>
  )
}

export default VaataArvuteid