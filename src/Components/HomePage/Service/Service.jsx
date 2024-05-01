import React from 'react'
import { TbSmartHome } from 'react-icons/tb'

const Service = () => {
    return (
        <div className='container mx-auto mb-16'>
            <h3 className='section-heading pb-16'>Other Services</h3>
            <div className='md:grid grid-cols-2 lg:grid-cols-3 gap-4'>
                <div className='grid grid-cols-8 gap-4 bg-[#ECF5FF] p-6 rounded-md '>
                    <div className='py-7'>
                        <span className='bg-[#EE6611] flex justify-center items-center py-3 rounded-lg'>
                            <TbSmartHome className='text-2xl text-white' />
                        </span>
                    </div>
                    <div className='col-span-7 p-6'>
                        <h4 className='text-2xl font-medium text-[#111827] pb-4'>Advanced Property Search</h4>
                        <p>Effortlessly find your dream property with advanced search filters.</p>
                    </div>
                </div>
                <div className='grid grid-cols-8 gap-4 bg-[#ECF5FF] p-6 rounded-md '>
                    <div className='py-7'>
                        <span className='bg-[#EE6611] flex justify-center items-center py-3 rounded-lg'>
                            <TbSmartHome className='text-2xl text-white' />
                        </span>
                    </div>
                    <div className='col-span-7 p-6'>
                        <h4 className='text-2xl font-medium text-[#111827] pb-4'>Virtual Tours and Multimedia</h4>
                        <p>Explore properties through immersive virtual tours and HD photos.</p>
                    </div>
                </div>
                <div className='grid grid-cols-8 gap-4 bg-[#ECF5FF] p-6 rounded-md '>
                    <div className='py-7'>
                        <span className='bg-[#EE6611] flex justify-center items-center py-3 rounded-lg'>
                            <TbSmartHome className='text-2xl text-white' />
                        </span>
                    </div>
                    <div className='col-span-7 p-6'>
                        <h4 className='text-2xl font-medium text-[#111827] pb-4'>Secure Online Transactions</h4>
                        <p>Ensure secure transactions and e-sign documents seamlessly online.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Service