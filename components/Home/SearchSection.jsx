"use client"
import React, { useContext, useState } from 'react';
import InputItem from './InputItem';
import { DestinationContext } from '/context/DestinationContext';
import { SourceContext } from '/context/SourceContext';
import CarListOptions from './CarListOptions';

export default function SearchSection() {
  const {source, setSource} = useContext(SourceContext);
  const {destination, setDestination} = useContext(DestinationContext);
  const [distance, setDistance] = useState();

  const flatRate = 20;


  const calculateDistance = () => {
      console.log()
    const dist = google.maps.geometry.spherical.computeDistanceBetween(
      {lat: parseFloat(source.lat), lng: parseFloat(source.lng)},
      {lat: parseFloat(destination.lat), lng: parseFloat(destination.lng)}
    )

    console.log(dist*0.000621374);
    setDistance(dist*0.000621374);
  }

  {/* 
  useEffect(() => {
    if(source) 
    {
      console.log(source)
    }
    if(destination) {
      console.log(destination)
    }
  }, [source, destination])

*/}


  return (
    <div>

      <div className='ml-5 p-2 md:p-5 border-[2px] rounded-xl'>
          <p className='text-[20px] font-bold'>Get a ride</p>
          <InputItem type="source"/>
          <InputItem type="destination"/>
          <p className='text-center text-xs text-red-700 p-2'>DISCLAIMER: Always set drop off location to Destined Headquarters 1244 E 7th St. Los Angeles, CA 90021</p>

          <button className='p-3 bg-black w-full mt-5 text-white rounded-lg'
            onClick={() =>calculateDistance()}>
            Search
          </button>
      </div>
      {distance ? <CarListOptions distance={distance} flatRate={flatRate}/> : null}
    </div>
  )
}

