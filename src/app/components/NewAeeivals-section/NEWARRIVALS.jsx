import React from 'react'
import Card from './Card'

export default function NEWARRIVALS() {
  return (
    <section className='bg-transparent px-4 sm:px-6 md:px-12 lg:px-16 py-8 sm:py-10 md:py-12'>
      <div className='max-w-7xl mx-auto'>
        <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-6 md:mb-8 text-left'>New Arrivals</h1>

        <div className='mt-6'>
          <Card />
        </div>
      </div>
    </section>
  )
}
