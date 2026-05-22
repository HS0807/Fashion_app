import React from 'react'
import Image from 'next/image'
import { FaArrowRight } from "react-icons/fa6";


export default function Card() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-4 pt-6 justify-items-center sm:justify-items-start">
            <figure className="overflow-hidden bg-white w-full max-w-[280px] sm:max-w-[320px] md:max-w-[300px] min-h-[520px] sm:min-h-[520px] md:min-h-[580px] rounded-[28px] shadow-sm">
                <div className="relative w-full h-[340px] sm:h-[320px] md:h-[360px] lg:h-[440px]">
                    <Image className="rounded-t-[28px] object-top sm:object-cover" src="/assets/card1.png" alt="" fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                </div>
                <div className="p-5">
                    <div className="flex items-center justify-between gap-4 mt-2">
                        <div>
                            <h2 className='font-medium text-base sm:text-lg'>Hoodies & Sweetshirt</h2>
                            <p className='mt-2 text-xs sm:text-sm text-[#7F7F7F]'>Explore Now!</p>
                        </div>
                        <button className='text-[#7F7F7F] rounded-full p-2 hover:bg-gray-100 flex items-center justify-center'>
                            <FaArrowRight className='w-4 h-4' />
                        </button>
                    </div>
                </div>
            </figure>

            <figure className="overflow-hidden bg-white w-full max-w-[280px] sm:max-w-[320px] md:max-w-[300px] min-h-[520px] sm:min-h-[520px] md:min-h-[580px] rounded-[28px] shadow-sm">
                <div className="relative w-full h-[340px] sm:h-[320px] md:h-[360px] lg:h-[440px]">
                    <Image className="rounded-t-[28px] object-top sm:object-cover" src="/assets/card2.png" alt="" fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                </div>
                <div className="p-5">
                    <div className="flex items-center justify-between gap-4 mt-2">
                        <div>
                            <h2 className='font-medium text-base sm:text-lg'>Coats & Parkas</h2>
                            <p className='mt-2 text-xs sm:text-sm text-[#7F7F7F]'>Explore Now!</p>
                        </div>
                        <button className='text-[#7F7F7F] rounded-full p-2 hover:bg-gray-100 flex items-center justify-center'>
                            <FaArrowRight className='w-4 h-4' />
                        </button>
                    </div>
                </div>
            </figure>

            <figure className="overflow-hidden bg-white w-full max-w-[280px] sm:max-w-[320px] md:max-w-[300px] min-h-[520px] sm:min-h-[520px] md:min-h-[580px] rounded-[28px] shadow-sm">
                <div className="relative w-full h-[340px] sm:h-[320px] md:h-[360px] lg:h-[440px]">
                    <Image className="rounded-t-[28px] object-top sm:object-cover" src="/assets/card3.png" alt="" fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                </div>
                <div className="p-5">
                    <div className="flex items-center justify-between gap-4 mt-2">
                        <div>
                            <h2 className='font-medium text-base sm:text-lg'>Tees & T-Shirt</h2>
                            <p className='mt-2 text-xs sm:text-sm text-[#7F7F7F]'>Explore Now!</p>
                        </div>
                        <button className='text-[#7F7F7F] rounded-full p-2 hover:bg-gray-100 flex items-center justify-center'>
                            <FaArrowRight className='w-4 h-4' />
                        </button>
                    </div>
                </div>
            </figure>
        </div>
    )
}
