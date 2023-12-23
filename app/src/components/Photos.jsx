import Image from 'next/image';
import React from 'react'

const Photos = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">My Photo Gallery</h1>
      <div className="grid grid-cols-3 justify-center  mb-4 gap-6">
        <div className="">
          <Image src="/nature.jpg" alt="Photo 1" width={400} height={300} objectFit="contain" />
        </div>
        <div className="">
          <Image src="/nature.jpg" alt="Photo 2" width={400} height={300} objectFit="contain" />
        </div>
        <div className="">
          <Image src="/nature.jpg" alt="Photo 3" width={400} height={300} objectFit="contain" />
        </div>
        <div className="">
          <Image src="/nature.jpg" alt="Photo 3" width={400} height={300} objectFit="contain" />
        </div>
        <div className="">
          <Image src="/nature.jpg" alt="Photo 3" width={400} height={300} objectFit="contain" />
        </div>
        <div className="">
          <Image src="/nature.jpg" alt="Photo 3" width={400} height={300} objectFit="contain" />
        </div>
        <div className="">
          <Image src="/nature.jpg" alt="Photo 3" width={400} height={300} objectFit="contain" />
        </div>
        <div className="">
          <Image src="/nature.jpg" alt="Photo 3" width={400} height={300} objectFit="contain" />
        </div>
        <div className="">
          <Image src="/nature.jpg" alt="Photo 3" width={400} height={300} objectFit="contain" />
        </div>
      </div>
    </div>
    )    
}

export default Photos;