import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import ChangeView from './ChangeView';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25,41], 
    iconAnchor: [12,41],
    popupAnchor: [2, -40],
  });
  L.Marker.prototype.options.icon = DefaultIcon;
  
  function Map(props) { 
  
    return (
    <div>
  
      <MapContainer className='map' center={props.mapCoordinaates.lngLat} zoom={props.mapCoordinaates.zoom} scrollWheelZoom={false}>
        <ChangeView center={props.mapCoordinaates.lngLat} zoom={props.mapCoordinaates.zoom} />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[59.4220, 24.7939]}>
          <Popup>
            Ülemiste keskus. <br /> Avatud 9-20
          </Popup>
        </Marker>
        <Marker position={[59.4273, 24.7231]}>
          <Popup>
            Kristiine keskus. <br /> Avatud 10-21
          </Popup>
        </Marker>
        <Marker position={[58.3780, 26.7308]}>
          <Popup>
            Tasku keskus. <br /> Avatud 10-21
          </Popup>
        </Marker>
        <Marker position={[58.3865, 24.5030]}>
          <Popup>
            Port artur. <br /> Avatud 10-21
          </Popup>
        </Marker>
        <Marker position={[60.1685, 24.9422]}>
          <Popup>
            Stockmann helsingi. <br /> Avatud 10-21
          </Popup>
        </Marker>
      </MapContainer>
    </div>)
  }
  
  export default Map; 