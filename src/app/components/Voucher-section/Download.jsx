import React from 'react'
import Image from 'next/image'

export default function Download() {
    return (
        <section>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 px-4 sm:px-6 md:px-12 py-8 md:py-12 items-center'>
                <div className='w-full'>
                    <div>
                        <h2 className='text-3xl sm:text-4xl md:text-[3rem] font-black pb-1.5'>DOWNLOAD APP &</h2>
                        <h2 className='text-3xl sm:text-4xl md:text-[3rem] font-black'>GET THE VOUCHER!</h2>
                        <p className='text-sm sm:text-base md:text-lg text-[#7C7C7C] pb-8 mt-4'>Get 30% off for first transaction using<br />
                            Rondovision mobile app for now.</p>
                    </div>
                    <div className='flex flex-wrap gap-4 sm:gap-6'>
                        <div className='w-[120px] sm:w-[140px]'>
                            <Image src="/assets/p2.png" alt="" width={140} height={140} className='w-full h-auto' />
                        </div>
                        <div className='w-[120px] sm:w-[140px]'>
                            <Image src="/assets/p1.png" alt="" width={140} height={140} className='w-full h-auto' />
                        </div>
                    </div>
                </div>
                
                <div className='w-full flex justify-center md:justify-end'>
                    <div className='max-w-[220px] sm:max-w-[260px] md:max-w-[320px]'>
                        <Image src="/assets/Mobile.png" alt="" width={400} height={800} className='w-full h-auto' />
                    </div>
                </div>
            </div>
        </section>
    )
}

