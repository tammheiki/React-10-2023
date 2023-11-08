import React from 'react'
import { useParams } from 'react-router-dom'
import nimedFailist from "../data/nimed.json"

function YksikTagasisideAndja() {

    const {andja_index} = useParams()
    const leitudNimi = nimedFailist[andja_index]


    if(leitudNimi === undefined) {

    return (<div> <img className='eiLeitud' src="https://w3-lab.com/wp-content/uploads/2022/09/FOR-WEB-404-astronaut.jpg" alt="" /> </div>)

}


  return (
    <div>
        <div>Järjekorra number: {andja_index} </div>
        <div>Nimi: {leitudNimi} </div>
    </div>
  )
}

export default YksikTagasisideAndja