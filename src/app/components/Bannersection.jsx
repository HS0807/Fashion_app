import React from 'react'
import Image from 'next/image'

export default function Bannersection() {
    return (
        <section className='bg-[#E0C340] p-4 sm:p-6 md:p-8'>
            <div className='max-w-7xl mx-auto flex flex-col md:flex-row items-stretch gap-6 sm:gap-8 md:min-h-[520px]'>
                <div className='w-full md:w-1/2 h-[260px] sm:h-[320px] md:h-full'>
                    <Image src='/assets/girl1.png' alt='Banner' width={1200} height={900} className='w-full h-full object-cover rounded-2xl' />
                </div>

                <div className='w-full md:w-1/2 flex flex-col justify-center space-y-4 sm:space-y-6 text-black'>
                    <div className='font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl space-y-2 sm:space-y-4 leading-tight'>
                        <h1 className='inline-flex items-center bg-white px-3 sm:px-5 py-2 rounded'>PAYDAY</h1>
                        <h1 className='block'>SALE NOW</h1>
                    </div>
                    <p className='text-base sm:text-lg md:text-xl'>Spend minimal $100 get 30% off<br />
                        voucher code for your next purchase</p>
                    <h3 className='font-black text-sm sm:text-base md:text-lg'>1 June - 10 June 2021</h3>
                    <p className='text-base sm:text-lg md:text-[20px] text-regular'>*Terms & Conditions apply</p>
                    <button className='bg-black text-white px-4 sm:px-5 py-2 sm:py-3 rounded mt-4 sm:mt-5 hover:bg-gray-800 transition self-start'>SHOP NOW</button>
                </div>
            </div>
        </section>
    )
}
