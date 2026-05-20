import React from 'react'
import Image from 'next/image'
import { FaArrowRight } from "react-icons/fa6";


export default function Favouritesection() {
    return (
        <section className='px-4 sm:px-6 md:px-10 lg:px-14 py-8 sm:py-10 md:py-12'>
            <div className='max-w-7xl mx-auto'>
                <div className='mb-8'>
                    <h1 className='text-2xl sm:text-3xl md:text-4xl font-black'>Young&apos;s Favourite</h1>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8'>
                    <div className="space-y-4 bg-white rounded-3xl overflow-hidden shadow-sm">
                        <Image className="rounded-t-3xl w-full h-[260px] sm:h-[300px] md:h-[340px] object-cover" src="/assets/fav1.png" alt="" width={700} height={500} />
                        <div className='p-5 md:p-6'>
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

                    <div className="space-y-4 bg-white rounded-3xl overflow-hidden shadow-sm">
                        <Image className="rounded-t-3xl w-full h-[260px] sm:h-[300px] md:h-[340px] object-cover" src="/assets/fav2.png" alt="" width={700} height={500} />
                        <div className='p-5 md:p-6'>
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
