'use client'
import React, { use, useState } from 'react'

export default function Community() {
    const [email, setEmail] = useState('')

    return (
        <section className='bg-[#E5C643] flex justify-center items-center flex-col py-12 sm:py-16 md:py-20 px-4'>
            <div className='text-[#FFFFFF] text-center space-y-3 sm:space-y-4'>
                <h1 className='font-bold text-xl sm:text-2xl md:text-3xl'>JOIN SHOPPING COMMUNITY TO</h1>
                <h1 className='font-bold text-xl sm:text-2xl md:text-3xl'>GET MONTHLY PROMO</h1>
                <p className='text-regular text-base sm:text-lg md:text-[23px]'>Type your email down below and be young wild generation</p>

                <div className='mt-4 sm:mt-6 w-full max-w-[420px] mx-auto relative'>
                    <input
                        type='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder='Enter your email'
                        className='w-full rounded border border-white/80 bg-white/90 px-4 sm:px-5 py-2 sm:py-3 pr-24 sm:pr-28 text-sm sm:text-base text-black focus:border-white focus:outline-none focus:ring-2 focus:ring-white/60'
                    />
                    <button
                        type='button'
                        className='absolute right-1 top-1/2 -translate-y-1/2 rounded bg-black px-3 sm:px-5 py-1.5 sm:py-2 text-regular text-sm sm:text-xl text-white transition hover:bg-gray-900'
                        onClick={() => console.log('Send clicked:', email)}>SEND</button>
                </div>
            </div>
        </section>
    )
}