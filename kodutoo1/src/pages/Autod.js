import React, {useState} from 'react'

function Autod() {
  const [Lisa, muudaLisa] = useState(0)

 
  
  
  return (
    <div>


    <button onClick={() => muudaLisa(Lisa - 1) }>-</button>
    <button> {Lisa} </button>
    <button onClick={() => muudaLisa(Lisa + 1) } >+</button>
    
        
        
      



    </div>
  )
}

export default Autod