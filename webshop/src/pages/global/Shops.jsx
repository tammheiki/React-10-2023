import React from 'react'
import { useState } from 'react';
import Map from '../../components/Map';
import Button from '@mui/material/Button';

function Shops() {
  const [coordinaates, setCoordinates] = useState({lngLat: [58.8866, 25.558], zoom: 7});

  return (<div>
    <Button onClick={() => setCoordinates({lngLat: [58.8866, 25.5581], zoom: 6})}>Kõik poed</Button>
    <Button onClick={() => setCoordinates({lngLat: [59.4378, 24.7574], zoom: 11})}>Kõik Tallinna poed</Button>
    <Button onClick={() => setCoordinates({lngLat: [59.4220, 24.7939], zoom: 13})}>Ülemiste</Button>
    <Button onClick={() => setCoordinates({lngLat: [59.4273, 24.7231], zoom: 13})}>Kristiine</Button>
    <Button onClick={() => setCoordinates({lngLat: [58.3780, 26.7308], zoom: 13})}>Tasku keskus</Button>
    <Button onClick={() => setCoordinates({lngLat: [58.3865, 24.5030], zoom: 13})}>Port artur</Button>
    <Button onClick={() => setCoordinates({lngLat: [60.1685, 24.9422], zoom: 13})}>Stockmann helsingi</Button>
    <Map mapCoordinaates={coordinaates}  />
  </div>)
}

export default Shops;

