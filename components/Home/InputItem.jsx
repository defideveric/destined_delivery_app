import React from 'react';
import Image from 'next/image';

const InputItem = ({type}) => {
  return (
    <div className='bg-slate-200 p-3 rounded-lg mt-3 flex item-center gap-4'>
        <Image src={type == 'source' ? "/source.png" : '/dest.png'} width={30} height={15}/>
        <input type='text' placeholder={ type == 'source' ? 'Pickup Location' : 'DropOff Location'} className='bg-transparent w-full outline-none'/>
    </div>
  )
}

export default InputItem