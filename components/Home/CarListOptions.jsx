"use client"
import { CarListData } from '/utils/CarListData';
import React, { useState } from 'react';
import CarListItem from './CarListItem';
import { useRouter } from 'next/navigation';


export default function CarListOptions({ distance, flatRate }) {
  const [activeIndex, setActiveIndex] = useState();
  const [selectedCar, setSelectedCar] = useState();
  const router = useRouter();


  return (
    <div className='mt-5 p-5 overflow-auto h-[250px]'>
      <h2 className='text-[22px] font-bold'>Recommended</h2>
      {CarListData.map((item, index) => (
          <div className={`cursor-pointer p-2 rounded-medium border-black px-4
            ${activeIndex==index?'border-[3px]':null}`}
            onClick={()=>{setActiveIndex(index)
            setSelectedCar(item)}}
            >
            <CarListItem car={item} distance={distance} flatRate={flatRate} />
          </div>
      ))}

     {selectedCar?.name ? <div className='flex justify-between fixed bottom-5 bg-white p-2 shadow-xl w-full md:w-[30%] border-[1px] items-center rounded-lg'>
        <h2>Make Payment For</h2>
        <button className='p-3 bg-black text-white rounded-lg text-center'
          onClick={() => router.push('/payment?amount=' + (selectedCar.amount*distance+flatRate).toFixed(2)) 
          }>
          Request {selectedCar.name}
        </button>
      </div> : null }
    </div>
  )
}