"use client"
import React, { useContext, useEffect, useState } from 'react';
import { GoogleMap, MarkerF } from '@react-google-maps/api';
import { DestinationContext } from '@/context/DestinationContext';
import { SourceContext } from '@/context/SourceContext';

export default function GoogleMapSection() {

  const containerStyle = {
    width: '100%',
    height: window.innerWidth*0.5
  };

  const {source, setSource} = useContext(SourceContext);
  const {destination, setDestination} = useContext(DestinationContext);
  
  const [center, setCenter] = useState({
    lat: -3.745,
    lng: -38.523
  });

  const [map, setMap] = React.useState(null);

  useEffect(() => {
    if(source?.length!=[]&&map)
    {
      map.panTo(
        {
        lat: source.lat,
        lng:source.lng
        }
      )
      setCenter({
        lat: source.lat,
        lng:source.lng
      })
    }
  }, [source])

  useEffect(() => {
    if(destination?.length!=[]&&map)
    {
      setCenter({
        lat: destination.lat,
        lng:destination.lng
      })
    }
  }, [destination])

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={{mapId: '34b94c1701e6dd39'}}
      >
        {source.length!=[]? <MarkerF 
          position={{lat:source.lat, lng:source.lng}}/>:null}
        <></>
      </GoogleMap>
  )
}

