'use client';

import Navbar from './src/components/Navbar'
import Search from './src/components/Search'
import Photos from './src/components/Photos'
import { useState } from "react";


export default function Home() {

  const [search, setSearch] = useState('nature');


  return (
    <div className='font-sans text-white'>
      <div className="min-h-[60vh] mb-20" style={{ backgroundImage: `url(./background.avif)` }}>
        <Navbar />
        <Search search={search} setSearch={setSearch} />
      </div>

      <Photos search={search} />

    </div>
  )
}
