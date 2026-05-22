import React from 'react'
import Image from 'next/image'
import { FaArrowRight } from "react-icons/fa6";


export default function Favouritesection() {
    return (
        <section className='px-4 sm:px-6 md:px-10 lg:px-14 py-10 sm:py-10 md:py-22'>
            <div className='max-w-7xl mx-auto'>
                <div className='mb-8'>
                    <h1 className='text-[20px] sm:text-2xl md:text-2xl lg:text-[28px] font-black mb-6 md:mb-8 text-left pl-2 sm:pl-3 md:pl-5 lg:pl-1'>
                        <span>Young&apos;s Fa</span>
                        <span className='relative z-0 inline-block'>
                            <Image src='/assets/Vector.png'  alt='' width={126} height={18} className='absolute left-0 top-[72%] z-0 h-[0.48em] w-full -translate-y-1/2'aria-hidden='true'/>
                            <span className='relative z-10'>vourite</span>
                        </span>
                    </h1>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8'>
                    <div className="space-y-4 bg-white rounded-3xl overflow-hidden ">
                        <Image className="rounded-t-3xl w-full h-[320px] sm:h-[360px] md:h-[420px] object-cover" src="/assets/fav1.png" alt="" width={700} height={500} />
                        <div className='pl-3 pr-5 py-5 md:pl-4 md:pr-6 md:py-6'>
                            <div className="flex items-center justify-between gap-4">
                                <div>
                                    <h2 className='font-medium text-base sm:text-lg md:text-xl'>Trending on instagram</h2>
                                    <p className='text-[#7F7F7F] text-sm sm:text-base'>Explore Now!</p>
                                </div>
                                <button className='text-[#7F7F7F] rounded-full p-2 sm:p-3 hover:bg-gray-100 transition'>
                                    <FaArrowRight className='w-4 h-4 sm:w-5 sm:h-5' />
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4 bg-white rounded-3xl overflow-hidden">
                        <Image className="rounded-t-3xl w-full h-[320px] sm:h-[360px] md:h-[420px] object-cover" src="/assets/fav2.png" alt="" width={700} height={500} />
                        <div className='pl-3 pr-5 py-5 md:pl-4 md:pr-6 md:py-6'>
                            <div className="flex items-center justify-between gap-4">
                                <div>
                                    <h2 className='font-medium text-base sm:text-lg md:text-xl'>All Under $40</h2>
                                    <p className='text-[#7F7F7F] text-sm sm:text-base'>Explore Now!</p>
                                </div>
                                <button className='text-[#7F7F7F] rounded-full p-2 sm:p-3 hover:bg-gray-100 transition'>
                                    <FaArrowRight className='w-4 h-4 sm:w-5 sm:h-5' />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
