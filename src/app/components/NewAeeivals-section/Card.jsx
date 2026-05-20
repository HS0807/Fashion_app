import React from 'react'
import Image from 'next/image'
import { FaArrowRight } from "react-icons/fa6";


export default function Card() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-6 pb-12 justify-items-center">
            <figure className="overflow-hidden bg-white w-full max-w-full sm:max-w-[360px] md:max-w-[320px] min-h-[440px] sm:min-h-[480px] md:min-h-[520px]">
                <Image className="rounded-lg w-full h-[220px] sm:h-[260px] md:h-[340px] object-cover" src="/assets/card1.png" alt="" width={700} height={500} />
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

            <figure className="overflow-hidden bg-white w-full max-w-full sm:max-w-[360px] md:max-w-[320px] min-h-[440px] sm:min-h-[480px] md:min-h-[520px]">
                <Image className="rounded-lg w-full h-[220px] sm:h-[260px] md:h-[340px] object-cover" src="/assets/card2.png" alt="" width={700} height={500} />
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

            <figure className="overflow-hidden bg-white w-full max-w-full sm:max-w-[360px] md:max-w-[320px] min-h-[440px] sm:min-h-[480px] md:min-h-[520px]">
                <Image className="rounded-lg w-full h-[220px] sm:h-[260px] md:h-[340px] object-cover" src="/assets/card3.png" alt="" width={700} height={500} />
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
