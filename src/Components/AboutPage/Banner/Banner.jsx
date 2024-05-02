import { FaArrowDown } from 'react-icons/fa'
import banner2 from '../../../assets/banner/banner2.jpg'
import { Link } from 'react-router-dom'
import {  IoTriangleSharp } from 'react-icons/io5'

const Banner = () => {
    return (
        <>
            <img className='w-full' src={banner2} alt="" />
            <div className='container mx-auto sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6 my-16 '>
                <div className='bg-[#FDF0E7] p-4 relative'>
                    <h5 className='text-[#D95D0F] text-[40px] font-bold'>2k+</h5>
                    <p className='pb-6'>New Flat Listed</p>
                    <Link className='text-[#D95D0F] underline'>View all</Link>
                    <span className='p-1 absolute bottom-5 right-5 cursor-pointer rounded-full text-xl text-[#D95D0F] border border-[#D95D0F] inline-block'>
                        <FaArrowDown />
                    </span>
                </div>
                <div className='bg-[#ECF5FF] p-4 relative'>
                    <h5 className='text-[#0051A1] text-[40px] font-bold'>2k+</h5>
                    <p className='pb-6'>New Flat Listed</p>
                    <Link className='text-[#0051A1] underline'>View all</Link>
                    <span className='p-1 absolute bottom-5 right-5 cursor-pointer rounded-full text-xl text-[#0051A1] border border-[#0051A1] inline-block'>
                        <FaArrowDown />
                    </span>
                </div>
                <div className='bg-[#FDF0E7] p-4 relative'>
                    <h5 className='text-[#D95D0F] text-[40px] font-bold'>2k+</h5>
                    <p className='pb-6'>New Flat Listed</p>
                    <Link className='text-[#D95D0F] underline'>View all</Link>
                    <span className='p-1 absolute bottom-5 right-5 cursor-pointer rounded-full text-xl text-[#D95D0F] border border-[#D95D0F] inline-block'>
                        <FaArrowDown />
                    </span>
                </div>
                <div className='bg-[#ECF5FF] p-4 relative'>
                    <h5 className='text-[#0051A1] text-[40px] font-bold'>2k+</h5>
                    <p className='pb-6'>New Flat Listed</p>
                    <Link className='text-[#0051A1] underline'>View all</Link>
                    <span className='p-1 absolute bottom-5 right-5 cursor-pointer rounded-full text-xl text-[#0051A1] border border-[#0051A1] inline-block'>
                        <FaArrowDown />
                    </span>
                </div>
            </div>
        </>
    )
}

export default Banner