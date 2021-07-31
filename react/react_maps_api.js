import React from 'react'
import {GoogleMap, useJsApiLoader} from '@react-google-maps';
import { func } from 'prop-types';

const containerStyle = {
    width: '400px',
    height: '400px'
  };
  
  const center = {
    lat: -3.745,
    lng: -38.523
  };

function Map_API(){
    const { isLoaded } = useJsApiLoader({
        id: '',
        googleMapApiKey: "AIzaSyDh2BkK23_KbpbNx0ccK30ETddsmt66ikQ"
    })

    const [map, setMap] = React.useState(null)

    const onLoad = React.useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds();
        map.fiBounds(bounds);
        setMap(map)
    }, [])
    
    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
      }, [])

      return isLoaded ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
          onLoad={onLoad}
          onUnmount={onUnmount}
        >
          { }
          <></>
        </GoogleMap>
    ) : <></>
}
export default React.memo(Map_API)