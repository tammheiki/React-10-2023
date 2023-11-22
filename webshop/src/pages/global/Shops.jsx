import React from 'react'
import { useState } from 'react';
import Map from '../../components/Map';

function Shops() {
  const [coordinaates, setCoordinates] = useState({lngLat: [58.8866, 25.558], zoom: 7});

  return (<div>
    <button onClick={() => setCoordinates({lngLat: [58.8866, 25.5581], zoom: 7})}>Kõik poed</button>
    <button onClick={() => setCoordinates({lngLat: [59.4378, 24.7574], zoom: 11})}>Kõik Tallinna poed</button>
    <button onClick={() => setCoordinates({lngLat: [59.4220, 24.7939], zoom: 13})}>Ülemiste</button>
    <button onClick={() => setCoordinates({lngLat: [59.4273, 24.7231], zoom: 13})}>Kristiine</button>
    <button onClick={() => setCoordinates({lngLat: [58.3780, 26.7308], zoom: 13})}>Tasku keskus</button>
    <Map mapCoordinaates={coordinaates}  />
  </div>)
}

export default Shops;

//Kodus - helsinki ja pärnu pood