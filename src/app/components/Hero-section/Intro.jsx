import React from 'react'
import Image from 'next/image'

export default function Intro() {
    return (
        <section className='bg-[#F4F6F5] pt-8 sm:pt-10 md:pt-12 px-4 sm:px-6 md:px-8 mt-2 mx-3 sm:mx-4 md:mx-6 lg:mx-10 mb-6 md:min-h-[520px] rounded-2xl'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-start pl-4 sm:pl-6 md:pl-10 lg:pl-14 pr-4 sm:pr-6 md:pr-8 pt-12 pb-0'>
                <div>
                    <div className='font-black text-3xl sm:text-4xl md:text-6xl lg:text-7xl space-y-2 sm:space-y-3 md:space-y-4 leading-tight'>
                        <h1 className='inline-flex bg-white px-4 sm:pr-15 sm:px-5 md:px-6 -rotate-3'>
                            <span className='inline-block rotate-3'>LET&apos;S</span>
                        </h1>
                        <h1 className='block'>EXPLORE</h1>
                        <h1 className='inline-flex items-center bg-[#EBD96B] px-4  sm:px-5 md:px-6 -rotate-3'>
                            <span className='inline-block rotate-3'>UNIQUE</span>
                        </h1>
                        <h1 className='block'>CLOTHES.</h1>
                    </div>
                    <p className='text-sm sm:text-base md:text-lg mb-4 sm:mb-5 mt-4 text-[#191818] font-regular'>Live for Influential and Innovative fashion!</p>
                    <button className='bg-black text-white px-4 sm:px-5 py-2 sm:py-3 text-sm sm:text-base rounded hover:bg-gray-800 transition mb-10' >SHOP NOW</button>
                </div>

                <div className='flex justify-center md:justify-start items-center m'>
                    <div className='relative w-full max-w-[360px] sm:max-w-[460px] md:max-w-[560px] lg:max-w-[660px] h-[320px] sm:h-[380px] md:h-[460px] lg:h-[520px] rounded-[28px] overflow-hidden'>
                        <Image src='/assets/home-image.png' alt='Hero Image' fill className='object-cover' />
                    </div>
                </div>
            </div>

        </section>
    )
}
