import React from 'react'
import Card from './Card'
import Image from 'next/image'

export default function NEWARRIVALS() {
  return (
    <section className='bg-transparent py-8 sm:py-10 md:py-12'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-10'>
        <h1 className='text-[20px] sm:text-2xl md:text-2xl lg:text-[28px] font-black mb-6 md:mb-8 text-left'>NEW ARRIVALS</h1>

        <div className='mt-6'>
          <Card />
        </div>
      </div>
    </section>
  )
}
