import React from 'react'
import Image from 'next/image'

export default function Brands() {
  return (
    <div className='bg-[#EBD96B] px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10'>
      <div className='mx-auto max-w-7xl'>
        <div className='flex items-center justify-between gap-4 sm:gap-6 md:gap-12 lg:gap-16 xl:gap-20'>
          <Image src="/assets/brand1.png" alt="Brand 1" width={100} height={100} className='w-10 sm:w-16 md:w-24 lg:w-28 xl:w-32 h-auto' />
          <Image src="/assets/brand2.png" alt="Brand 2" width={100} height={100} className='w-10 sm:w-16 md:w-24 lg:w-28 xl:w-32 h-auto' />
          <Image src="/assets/brand3.jpg" alt="Brand 3" width={100} height={100} className='w-10 sm:w-16 md:w-24 lg:w-28 xl:w-32 h-auto' />
          <Image src="/assets/brand4.png" alt="Brand 4" width={100} height={100} className='w-10 sm:w-16 md:w-24 lg:w-28 xl:w-32 h-auto' />
          <Image src="/assets/brand5.png" alt="Brand 5" width={100} height={100} className='w-10 sm:w-16 md:w-24 lg:w-28 xl:w-32 h-auto' />
          <Image src="/assets/brand6.png" alt="Brand 6" width={100} height={100} className='w-10 sm:w-16 md:w-24 lg:w-28 xl:w-32 h-auto' />
        </div>
      </div>
      </div>
    
  )
}
