import React from 'react'
import Image from 'next/image'

export default function Bannersection() {
    return (
        <section className='bg-[#E0C340] py-8 sm:py-10 lg:py-0.5'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 flex flex-col-reverse md:flex-row items-stretch gap-6 sm:gap-8 md:min-h-[520px]'>
                <div className='w-full md:w-1/2 h-[320px] sm:h-[420px] md:h-[520px] lg:h-[680px]'>
                    <Image src='/assets/girl1.png' alt='Banner' width={1200} height={1500} className='w-full h-full object-cover rounded-2xl' />
                </div>

                <div className='w-full md:w-1/2 flex flex-col justify-center text-black gap-5 sm:gap-6'>
                    <div className='font-black text-[48px] sm:text-[56px] md:text-[70px] lg:text-[75px] space-y-2 sm:space-y-4 leading-tight'>
                        <h1 className='inline-flex items-center bg-white sm:px-5 -rotate-2'>
                            <span className='inline-block rotate-3'>PAYDAY</span>
                        </h1>
                        <h1 className='block'>SALE NOW</h1>
                    </div>
                    <p className='text-base sm:text-lg md:text-[20px] font-medium'>Spend minimal $100 get 30% off<br />
                        voucher code for your next purchase</p>
                    <div className='space-y-1'>
                        <h3 className='font-black text-base md:text-[22px]'>1 June - 10 June 2021</h3>
                        <p className='text-base sm:text-lg md:text-[20px]'>*Terms & Conditions apply</p>
                    </div>
                    <button className='bg-black text-white px-5 py-2 sm:px-5 sm:py-3 rounded mt-2 hover:bg-gray-800 transition self-start text-sm font-medium'>SHOP NOW</button>
                </div>
            </div>
        </section>
    )
}
