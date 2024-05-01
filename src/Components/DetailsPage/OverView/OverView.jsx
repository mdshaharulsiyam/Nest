import React from 'react'
import { IoBedOutline } from 'react-icons/io5'
import { MdBathtub, MdOutlineBalcony, MdOutlineBedroomParent } from 'react-icons/md'
const OverView = () => {
    return (
        <div className='bg-[#F9FAFB] p-4 rounded-sm my-10'>
            <h4 className='text-[#000000] text-2xl font-semibold pt-5'>Overview</h4>
            <div className='grid grid-cols-2 md:grid-cols-4 bg-white border-b py-1 my-3'>
                <span className='py-2 w-fit px-4 start-center gap-2 cursor-pointer'>
                    <IoBedOutline className='text-2xl' />
                    <button >
                        <strong>2</strong> Beds
                    </button>
                </span>
                <span className='py-2 w-fit px-4 start-center gap-2 cursor-pointer'>
                    <MdBathtub className='text-2xl' />
                    <button >
                        <strong>2</strong> Bath
                    </button>
                </span>
                <span className='py-2 w-fit px-4 start-center gap-2 cursor-pointer'>
                    <MdOutlineBalcony className='text-2xl' />
                    <button >
                        <strong>2</strong> Balcony
                    </button>
                </span>
                <span className='py-2 w-fit px-4 start-center gap-2 cursor-pointer ml-auto'>
                    <MdOutlineBedroomParent className='text-2xl' />
                    <button >
                        <strong>2</strong> Fully Furnished
                    </button>
                </span>
            </div>
            <div className='grid lg:grid-cols-6 grid-cols-3 gap-10 flex-wrap pt-4 '>
                <div>
                    <p className=''>Carpet Area</p>
                    <p className='font-semibold text-black'>2000 sqft</p>
                    <p className=''>$ 225/sqft</p>
                </div>
                <div className='col-span-2'>
                    <p className=''>Floor</p>
                    <p className='font-semibold text-black'>Second (Out of 6th floor)</p>
                </div>
                <div className='col-span-2'>
                    <p className=''>Transaction Type</p>
                    <p className='font-semibold text-black'>Ready to move</p>
                </div>
                <div>
                    <p className=''>Lift</p>
                    <p className='font-semibold text-black'>1</p>
                </div>
                <div>
                    <p className=''>Facing</p>
                    <p className='font-semibold text-black'>North - East</p>
                </div>
                <div className='col-span-2'>
                    <p className=''>Additional Rooms</p>
                    <p className='font-semibold text-black'>1 servant room & 1 gust room</p>
                </div>
                <div className='col-span-2'>
                    <p className=''>Age of construction</p>
                    <p className='font-semibold text-black'>New Construction</p>
                </div>
                <div>
                </div>
            </div>
        </div>
    )
}

export default OverView