import React from 'react'
import Image from 'next/image';

const Navbar = () => {
  return (
    <div className='mx-auto flex justify-between p-4'>
      <h2 className="font-bold bg-white text-green-500 text-3xl">Splash <span className="text-black">Fusion</span></h2>
      <ul>
        <li className='font-semibold text-xl '>Explore</li>
      </ul>
    </div>
  )
}

export default Navbar;