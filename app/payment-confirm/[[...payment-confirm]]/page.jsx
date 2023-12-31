import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
  return (
    <div className='flex flex-row min-h-screen justify-center items-center'>
        <div>
            <div>
                <h1 className='text-center text-2xl mb-3'>Payment Confirmed!</h1>
                <Image src='' alt=''/>
                <p className='font-bold text-md'>Your Driver is Successfully Booked</p>

                <Link href='/sign-in'>
                    <button className='bg-blue-500 text-white mt-5 w-full rounded-lg p-3' onClick='/sign-in'>Back To Home</button>        
                </Link>
            </div>
            
        </div>
    </div>
  )
}

