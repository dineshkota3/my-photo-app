import React, { useRef } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Story from './Story';
import constants from './constants.json';
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import {Icon} from 'leaflet'


class SimpleMap extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          markers: constants.markers,
          mapRef: React.createRef()
        };
      }

      handleMarkerClick = (variable, positionValue) => {
        document.getElementById(variable).scrollIntoView({behavior: 'smooth',block: 'center',
        inline: 'center'});
        this.state.mapRef.current.flyTo(positionValue, 13);
      };

  render() {

    return ( 
        <div className='rowC'>
            <MapContainer
      center={[51.505, -0.09]}
      zoom={13}
      style={{ height: '100vh', width:"50%" }}
      ref={this.state.mapRef}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {this.state.markers.map((marker) => (
        <Marker
          key={marker.key}
          icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})}
          position={marker.position}
          eventHandlers={{
            click: () => this.handleMarkerClick(marker.key,marker.position)
          }}
        >
        </Marker>
      ))}
    </MapContainer>
        <Story map={this.state.mapRef}/>
        </div>      
    );
  };
}
  export default SimpleMap;