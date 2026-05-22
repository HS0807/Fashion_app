import React from 'react'
import Card from './Card'
import Image from 'next/image'

export default function NEWARRIVALS() {
  return (
    <section className='bg-transparent py-8 sm:py-10 md:py-12'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-10'>
        <h1 className='text-[20px] sm:text-2xl md:text-2xl lg:text-[28px] font-black mb-6 md:mb-8 text-left'>
          <span>NEW A</span>
          <span className='relative z-0 inline-block'>
            <Image src='/assets/Vector.png'  alt=''  width={126}  height={18} className='absolute left-0 top-[72%] z-0 h-[0.48em] w-full -translate-y-1/2' aria-hidden='true'/>
            <span className='relative z-10'>RRIVALS</span>
          </span>
        </h1>

        <div className='mt-6'>
          <Card />
        </div>
      </div>
    </section>
  )
}
