import Image from 'next/image'
import Navbar from './src/components/Navbar'
import Search from './src/components/Search'
import Photos from './src/components/Photos'

export default function Home() {
  return (
    <div className='font-sans'>
      <div className='max-w-[1200px] mx-auto'>
        <Navbar />
        <Search />
        <Photos />
      </div>
    </div>
  )
}
