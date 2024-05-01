import React from 'react'
import { IoSearch, IoTriangleSharp } from 'react-icons/io5'
import img from '../../../assets/property/img.png'
import img2 from '../../../assets/property/img2.png'
import img3 from '../../../assets/property/img3.png'
import img4 from '../../../assets/property/img4.png'
import img5 from '../../../assets/property/img5.png'
import img6 from '../../../assets/property/img6.png'
const Property = () => {
    return (
        <div className='container mx-auto py-20'>
            <div className='md:grid grid-cols-2 gap-8 center-center flex-col py-6'>
                <div className='w-full relative'>
                    <button className='p-4 rounded-full left-[66%] top-[210px] bg-blue-600 absolute text-white rotate-90 w-fit center-center '>
                    <IoTriangleSharp className='text-xl' />
                    </button>
                    <img className='w-[70%] h-[400px] rounded-lg object-cover' src={img} alt="" />
                    <img className='w-[70%] object-cover h-[270px] rounded-lg -mt-48 ml-28' src={img2} alt="" />
                </div>
                <div className='w-full'>
                    <p className='top-heading'>Property buying</p>
                    <h2 className='heading'>Efficient and Transparent Home Buying Solutions</h2>
                    <p className='pt-2 pb-10'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    <span className='py-2 button w-fit px-4 rounded-sm start-center gap-2 cursor-pointer'>
                        <IoSearch />
                        <button >
                            Find Property
                        </button>
                    </span>
                </div>
            </div>
            <div className='md:grid grid-cols-2 gap-8 center-center flex-col py-6'>
                <div className='w-full'>
                    <p className='top-heading'>Property buying</p>
                    <h2 className='heading'>Efficient and Transparent Home Buying Solutions</h2>
                    <p className='pt-2 pb-10'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    <span className='py-2 button w-fit px-4 rounded-sm start-center gap-2 cursor-pointer'>
                        <IoSearch />
                        <button >
                            Find Property
                        </button>
                    </span>
                </div>
                <div className='w-full relative'>
                    <button className='p-4 rounded-full left-[66%] z-50 top-[210px] bg-blue-600 absolute text-white rotate-90 w-fit center-center '>
                    <IoTriangleSharp className='text-xl' />
                    </button>
                    <img className='w-[70%] object-cover h-[270px] rounded-lg z-[2] relative -mb-48 ml-28' src={img3} alt="" />
                    <img className='w-[70%] h-[400px] rounded-lg relative -z-[2] object-cover' src={img4} alt="" />
                </div>  
            </div>
            <div className='md:grid grid-cols-2 gap-8 center-center flex-col py-6'>
                <div className='w-full relative'>
                    <button className='p-4 rounded-full left-[66%] top-[210px] bg-blue-600 absolute text-white rotate-90 w-fit center-center '>
                    <IoTriangleSharp className='text-xl' />
                    </button>
                    <img className='w-[70%] h-[400px] rounded-lg object-cover' src={img5} alt="" />
                    <img className='w-[70%] object-cover h-[270px] rounded-lg -mt-48 ml-28' src={img6} alt="" />
                </div>
                <div className='w-full'>
                    <p className='top-heading'>Property buying</p>
                    <h2 className='heading'>Efficient and Transparent Home Buying Solutions</h2>
                    <p className='pt-2 pb-10'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    <span className='py-2 button w-fit px-4 rounded-sm start-center gap-2 cursor-pointer'>
                        <IoSearch />
                        <button >
                            Find Property
                        </button>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Property