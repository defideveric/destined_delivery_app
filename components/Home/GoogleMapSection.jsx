"use client"
import React, { useContext, useEffect, useState } from 'react';
import { GoogleMap, MarkerF, OverlayViewF, OverlayView, DirectionsRenderer } from '@react-google-maps/api';
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
  const [directionRoutePoints, setDirectionRoutePoints] = useState();

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

    if(source.length!=[]&&destination.length!=[])
    {
      directionRoute();
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

    if(source.length!=[]&&destination.length!=[])
    {
      directionRoute();
    }
  }, [destination])


  const directionRoute=() => {
    const DirectionService = new google.maps.DirectionsService();

    DirectionService.route({
      origin: {lat: source.lat, lng:source.lng},
      destination: {lat: destination.lat, lng:destination.lng},
      travelMode: google.maps.TravelMode.DRIVING
    }, (result, status) => {
      if(status === google.maps.DirectionsStatus.OK) 
      {
        setDirectionRoutePoints(result)
      } else {
        console.error('Error')
      }
    });
  }


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
        {source.length!=[]? 
        <MarkerF 
          position={{lat:source.lat, lng:source.lng}}
            icon={{
              url:"/source.png",
              scaledSize: {
              width:20,
              height:20
              }
            }}>

            <OverlayViewF
              position={{lat:source.lat, lng:source.lng}}
              mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
              >
              <div className='p-2'>
                <p className='text-black text-[18px]'>{source.label}</p>
              </div>
            </OverlayViewF>
        </MarkerF>:null}

           {destination.length!=[]? 
        <MarkerF 
          position={{lat:destination.lat, lng:destination.lng}}
            icon={{
              url:"/dest.png",
              scaledSize: {
              width:20,
              height:20
              }
            }}>

            <OverlayViewF
              position={{lat:destination.lat, lng:destination.lng}}
              mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
              >
              <div className='p-2'>
                <p className='text-black text-[18px]' >{destination.label}</p>
              </div>
            </OverlayViewF>
        </MarkerF>:null}

        <DirectionsRenderer
          directions={directionRoutePoints}
          options={{
            polylineOptions: {
              strokeWeight: 5,
              strokeColor: '#000'
            },
            suppressMarkers: true,
          
          }}
        />
      </GoogleMap>
  )
}

