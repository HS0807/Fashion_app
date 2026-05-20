import React from 'react'
import Image from 'next/image'

export default function Download() {
    return (
        <section>
        <div className='mx-auto flex flex-col items-start gap-8 w-full p-12'>
            <div>
                <h2 className='text-2xl font-black'>DOWNLOAD APP & <br />GET THE VOUCHER!</h2><br />
                <p className='text-medium'>Get 30% off for first transaction using <br />
                    Rondovision mobile app for now.</p><br />
            </div>

            <div className='flex flex-row gap-6'>
                <Image src="/assets/p1.png" alt="" width={120} height={120} />
                <Image src="/assets/p2.png" alt="" width={120} height={120} />
            </div>
        </div>
        
        </section>
    )
}
