import { CarListData } from '@/utils/CarListata';
import React, { useState } from 'react';
import CarListItem from './CarListItem';

export default function CarListOptions({ distance, flatRate }) {

  const [activeIndex, setActiveIndex] = useState();

  return (
    <div className='mt-5 p-5 overflow-auto h-[250px]'>
      <h2 className='text-[22px] font-bold'>Recommended</h2>
      {CarListData.map((item, index) => (
          <div className={`cursor-pointer p-2 rounded-medium border-black px-4
            ${activeIndex==index?'border-[3px]':null}`}
            onClick={()=>setActiveIndex(index)}>
            <CarListItem car={item} distance={distance} flatRate={flatRate} />
          </div>
      ))}
    </div>
  )
}