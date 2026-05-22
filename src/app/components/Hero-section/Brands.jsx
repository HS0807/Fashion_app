import React from 'react'
import Image from 'next/image'

export default function Brands() {
  return (
    <div className='bg-[#EBD96B] px-3 py-3 sm:px-4 sm:py-4 md:px-6 md:py-6'>
      <div className='mx-auto max-w-6xl'>
        <div className='flex items-center justify-between gap-3 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-10'>
          <Image src="/assets/brand1.png" alt="Brand 1" width={100} height={100} className='w-7 sm:w-11 md:w-15 lg:w-19 xl:w-23 h-auto' />
          <Image src="/assets/brand2.png" alt="Brand 2" width={100} height={100} className='w-7 sm:w-11 md:w-15 lg:w-19 xl:w-23 h-auto' />
          <Image src="/assets/brand3.jpg" alt="Brand 3" width={100} height={100} className='w-9 sm:w-13 md:w-17 lg:w-21 xl:w-25 h-auto' />
          <Image src="/assets/brand4.png" alt="Brand 4" width={100} height={100} className='w-9 sm:w-13 md:w-17 lg:w-21 xl:w-25 h-auto' />
          <Image src="/assets/brand5.png" alt="Brand 5" width={100} height={100} className='w-9 sm:w-13 md:w-17 lg:w-21 xl:w-25 h-auto' />
          <Image src="/assets/brand6.png" alt="Brand 6" width={100} height={100} className='w-9 sm:w-13 md:w-17 lg:w-21 xl:w-25 h-auto' />
        </div>
      </div>
    </div>
  )
}
