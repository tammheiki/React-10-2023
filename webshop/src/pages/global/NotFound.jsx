import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (

<div>

    <h2>404 Not Found</h2>
    
    <img className='notFound' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdN_Dqw7F5lTMdaLCTSQ4zq9xpYzA2-4UDkS3Ccbp1421MBF2r-D5dD7xtcjYtxK7Q6bQ&usqp=CAU" alt="" />
    <Link to="/"> <br />
    <button>Back to Homepage</button> 
    </Link>

</div>
  )
}

export default NotFound