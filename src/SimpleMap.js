import React, { useRef } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from 'leaflet';
import Story from './Story';
import constants from './constants.json';

class SimpleMap extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
          markers: constants.markers,
          mapRef: React.createRef()
        };
        L.Icon.Default.imagePath='img/'
      }

      handleMarkerClick = (variable, positionValue) => {
        document.getElementById(variable).scrollIntoView({behavior: 'smooth',block: 'center',
        inline: 'center'});
        this.state.mapRef.current.panTo(positionValue);
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
      // Make sure you set the height and width of the map container otherwise the map won't show
      
    );
  };
}
  export default SimpleMap;