import React from 'react'
import Image from 'next/image';

const Navbar = () => {
  return (
    <div className='mx-auto flex justify-between p-4'>
      <Image src={'/vercel.svg'} width={100} height={100} alt={'Logo'} />
      <ul>
        <li className='font-semibold text-xl '>Explore</li>
      </ul>
    </div>
  )
}

export default Navbar;