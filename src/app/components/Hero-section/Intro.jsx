import React from 'react'
import Image from 'next/image'

export default function Intro() {
    return (
        <section className='bg-[#F4F6F5] p-4 sm:p-6 md:p-8 m-4 sm:m-6 md:m-12 md:min-h-[520px] rounded-2xl'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center'>
                <div>
                    <div className='font-black text-3xl sm:text-4xl md:text-6xl lg:text-7xl space-y-2 sm:space-y-3 md:space-y-4 leading-tight'>
                        <h1 className='inline-flex items-center bg-white px-3 sm:px-5 md:px-8 py-1.5 sm:py-2 md:py-3 rounded'>LET&apos;S</h1>
                        <h1 className='block'>EXPLORE</h1>
                        <h1 className='inline-flex items-center bg-[#EBD96B] px-3 sm:px-5 md:px-6 py-1.5 sm:py-2 md:py-3 rounded'>UNIQUE</h1>
                        <h1 className='block'>CLOTHES.</h1>
                    </div>
                    <p className='text-sm sm:text-base md:text-lg mb-4 sm:mb-5 mt-4 text-gray-700'>Live for Influential and Innovative fashion!</p>
                    <button className='bg-black text-white px-4 sm:px-5 py-2 sm:py-3 text-sm sm:text-base rounded hover:bg-gray-800 transition'>SHOP NOW</button>
                </div>

                <div className='flex justify-center items-center'>
                    <div className='w-full max-w-md md:max-w-none'>
                        <Image src="/assets/home-image.png" alt="Hero Image" width={700} height={500} className='w-full h-[260px] sm:h-[320px] md:h-[420px] lg:h-[520px] object-cover rounded-lg' />
                    </div>
                </div>
            </div>
        </section>
    )
}
