import React from 'react';
import Image from 'next/image';
import { HiUser } from "react-icons/hi2";

export default function CarListItem({ car, distance, flatRate }) {
  return (
    <div>
        <div className='flex items-center justify-between mt-5'>
        <div className='flex items-center gap-15'>
            <Image src={car.image}
                width={100} height={100}/>
                <div>
                    <h2 className='font-semibold text-[18px] flex gap-3 items-center'>
                        {car.name}

                        <span className='flex gap-2 items-center font-normal text-[14px]'>
                            <HiUser/>{car.seat}
                        </span>
                    </h2>
                    <p className='font-light'>{car.desc}</p>
                </div>
        </div>
                <h2 className='text-[18px] font-semibold flex flex-col'>${(car.amount*distance+flatRate).toFixed(2)}</h2>
        </div>
    </div>
  )
}

