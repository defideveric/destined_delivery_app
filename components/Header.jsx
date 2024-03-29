import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { UserButton } from '@clerk/nextjs';

export default function Header() {
  const headerMenu = [
    {
      id: 1,
      name: 'Ride',
      icon: '/car.png',
    },
    {
      id: 2,
      name: 'Package',
      icon: '/clothes.png',
    },
  ];

  return (
    <div className='p-4 pb-3 pl-10 border-b-[4px] border-gray-200 flex items-center justify-between'>
      <div className='flex gap-24 items-center'>
        <Link href='https://www.wearedestined.com'>
          <Image src='/destinednavy.png' width={130} height={100} alt='Logo' />
        </Link>
        <div className='flex gap-6 items-center'>
          {headerMenu.map((item) => (
            <div key={item.id} className='flex gap-2 items-center'>
              <Image src={item.icon} width={17} height={17} />
              <h2 className='text-[11px] font-medium mr-5'>{item.name}</h2>
            </div>
          ))}
        </div>
      </div>
      <UserButton />
    </div>
  );
}
