import React from 'react'
import { IoBedOutline } from 'react-icons/io5'
import { MdBathtub, MdOutlineBalcony, MdOutlineBedroomParent } from 'react-icons/md'

const Amenities = () => {
    return (
        <div className='bg-[#ECF5FF] p-2 border rounded-md mb-16'>
            <h4 className='text-[#000000] text-2xl font-semibold pt-5'>Amenities</h4>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-7 py-1 my-3'>
                <span className='py-2 w-fit px-4 start-center gap-2 cursor-pointer'>
                    <IoBedOutline className='text-2xl' />
                    <button >
                        Power Back Up
                    </button>
                </span>
                <span className='py-2 w-fit px-4 start-center gap-2 cursor-pointer'>
                    <MdBathtub className='text-2xl' />
                    <button >
                    Lift
                    </button>
                </span>
                <span className='py-2 w-fit px-4 start-center gap-2 cursor-pointer'>
                    <MdOutlineBalcony className='text-2xl' />
                    <button >
                    Club House
                    </button>
                </span>
                <span className='py-2 w-fit px-4 start-center gap-2 cursor-pointer '>
                    <MdOutlineBedroomParent className='text-2xl' />
                    <button >
                    Gymnasium
                    </button>
                </span>
                <span className='py-2 w-fit px-4 start-center gap-2 cursor-pointer'>
                    <IoBedOutline className='text-2xl' />
                    <button >
                    Park
                    </button>
                </span>
                <span className='py-2 w-fit px-4 start-center gap-2 cursor-pointer'>
                    <MdBathtub className='text-2xl' />
                    <button >
                    Reserved Parking
                    </button>
                </span>
                <span className='py-2 w-fit px-4 start-center gap-2 cursor-pointer'>
                    <MdOutlineBalcony className='text-2xl' />
                    <button >
                    Security
                    </button>
                </span>
                <span className='py-2 w-fit px-4 start-center gap-2 cursor-pointer '>
                    <MdOutlineBedroomParent className='text-2xl' />
                    <button >
                    Water Storage
                    </button>
                </span>
                <span className='py-2 w-fit px-4 start-center gap-2 cursor-pointer'>
                    <IoBedOutline className='text-2xl' />
                    <button >
                    Private Terrace/Garden
                    </button>
                </span>
                <span className='py-2 w-fit px-4 start-center gap-2 cursor-pointer'>
                    <MdBathtub className='text-2xl' />
                    <button >
                    Vaastu Compliant
                    </button>
                </span>
                <span className='py-2 w-fit px-4 start-center gap-2 cursor-pointer'>
                    <MdOutlineBalcony className='text-2xl' />
                    <button >
                    Service/Goods Lift
                    </button>
                </span>
                <span className='py-2 w-fit px-4 start-center gap-2 cursor-pointer '>
                    <MdOutlineBedroomParent className='text-2xl' />
                    <button >
                    Visitor Parking
                    </button>
                </span>
                <span className='py-2 w-fit px-4 start-center gap-2 cursor-pointer'>
                    <IoBedOutline className='text-2xl' />
                    <button >
                    Intercom Facility
                    </button>
                </span>
                <span className='py-2 w-fit px-4 start-center gap-2 cursor-pointer'>
                    <MdBathtub className='text-2xl' />
                    <button >
                    Maintenance Staff
                    </button>
                </span>
                <span className='py-2 w-fit px-4 start-center gap-2 cursor-pointer'>
                    <MdOutlineBalcony className='text-2xl' />
                    <button >
                    Waste Disposal
                    </button>
                </span>
                <span className='py-2 w-fit px-4 start-center gap-2 cursor-pointer '>
                    <MdOutlineBedroomParent className='text-2xl' />
                    <button >
                    Laundry Service
                    </button>
                </span>
                <span className='py-2 w-fit px-4 start-center gap-2 cursor-pointer'>
                    <IoBedOutline className='text-2xl' />
                    <button >
                    Internet/Wi-Fi Connectivity
                    </button>
                </span>
                <span className='py-2 w-fit px-4 start-center gap-2 cursor-pointer'>
                    <MdBathtub className='text-2xl' />
                    <button >
                    DTH Television Facility
                    </button>
                </span>
                <span className='py-2 w-fit px-4 start-center gap-2 cursor-pointer'>
                    <MdOutlineBalcony className='text-2xl' />
                    <button >
                    Piped Gas
                    </button>
                </span>
                <span className='py-2 w-fit px-4 start-center gap-2 cursor-pointer '>
                    <MdOutlineBedroomParent className='text-2xl' />
                    <button >
                    Jogging and Strolling Track
                    </button>
                </span>
                <span className='py-2 w-fit px-4 start-center gap-2 cursor-pointer'>
                    <IoBedOutline className='text-2xl' />
                    <button >
                    Outdoor Tennis Courts
                    </button>
                </span>
                <span className='py-2 w-fit px-4 start-center gap-2 cursor-pointer'>
                    <MdBathtub className='text-2xl' />
                    <button >
                    Early Learning Centre
                    </button>
                </span>
                <span className='py-2 w-fit px-4 start-center gap-2 cursor-pointer'>
                    <MdOutlineBalcony className='text-2xl' />
                    <button >
                    Kids Play Area
                    </button>
                </span>
                <span className='py-2 w-fit px-4 start-center gap-2 cursor-pointer '>
                    <MdOutlineBedroomParent className='text-2xl' />
                    <button >
                    Indoor Squash & Badminton Courts
                    </button>
                </span>
            </div>
        </div>
    )
}

export default Amenities