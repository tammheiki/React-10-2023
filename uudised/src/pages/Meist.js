import React from 'react'
import { useState } from 'react';


function Meist() {

  const [kontakt, n2itaKontakt] = useState("");

  return ( <div>
    <br />
    <div>Meie töötajad:</div>
    <br />
    <div>Arvo</div>
    <div>Uudiskilpid</div>
    <button onClick={() => n2itaKontakt ('+372111111')}>Võta ühendust</button>
    <br /><br />
   
   
    <div>Kelly</div>
    <div>Reporter</div>
    <button onClick={() => n2itaKontakt ('+372222222')}>Võta ühendust</button>
    <br /><br />
    
    
    <div>Edward</div>
    <div>Kujundaja</div>
    <button onClick={() => n2itaKontakt ('+372333333')}>Võta ühendust</button>
    <br /><br />
    
    
    <div>Kerli</div>
    <div>Spetsialist</div>
    <button onClick={() => n2itaKontakt ('+372444444')}>Võta ühendust</button>
    <br /><br />
    <div>Kontakt: {kontakt}</div>
  
    
  </div>)
}

export default Meist