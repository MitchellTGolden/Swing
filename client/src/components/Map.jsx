import React from 'react'
import GoogleMapReact from 'google-map-react'
// import './map.css'
import Pin from "./Pin"

const Map = ({ location, zoomLevel }) => (
    <div className="map">
  
      <div className="google-map">
        <GoogleMapReact
        //   bootstrapURLKeys={{ key: "AIzaSyDLJWovObaXnmwWQfuZoOaxjrwZGhaOnhM" }}
          defaultCenter={location}
          defaultZoom={zoomLevel}
        >
        {/* <Pin
            lat={location.lat}
            lng={location.lng}
            text={location.address}
        /> */}
        </GoogleMapReact>
      </div>
    </div>
  )

export default Map