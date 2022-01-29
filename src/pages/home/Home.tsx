import './home.scss'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { breweries } from '../../data/breweries'

import L from 'leaflet';

const iconPerson = new L.Icon({
  iconUrl: require('./logo192.png'),
  iconRetinaUrl: require('./logo192.png'),
  iconSize: new L.Point(30, 30),
  className: 'icon-class'
});

export const Home = () => (
  <div className='home'>
    <MapContainer center={[53.58635225929025, -7.483886954938723]} zoom={8} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      {breweries.map(({name, location}) => (
        <Marker icon={iconPerson} position={[location.latitude, location.longitude]}>
          <Popup>
            {name}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  </div>

)