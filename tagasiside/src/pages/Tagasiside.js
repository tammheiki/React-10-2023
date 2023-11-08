import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom';


function Tagasiside() {
    const [tagasisided, m22ratagasisided] = useState ( ["Oli hea", "Huvitav", "Teistsugune", "Põnev"] );
    const tagasisideRef = useRef()

    function kustuta(index) {
        tagasisided.splice(index,1);
        m22ratagasisided(tagasisided.slice())        
    }
   

    function lisaUusTagasiside() {
        tagasisided.push(tagasisideRef.current.value);
        m22ratagasisided(tagasisided.slice())

    }



  return ( 

    <div>Tagasiside<div>

    </div> 

    <br />
    <label>Tagasiside:</label> 
    <input ref={tagasisideRef} type='text' ></input>

    <button onClick={lisaUusTagasiside}>Lisa</button>

    {tagasisided.map((feedback, index) => <div key={feedback} > {feedback} <button  onClick={ () => kustuta (index) }>X</button>
    
    <Link to={"/Yksik-andja/" + index }><button>Vaata detailsemalt</button> </Link>


    </div> )}

    


    </div>





    

    
    
  )
}

export default Tagasiside