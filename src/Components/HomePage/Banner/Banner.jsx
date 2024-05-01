import React from 'react'
import banner from '../../../assets/banner/banner.png'
import { IoSearch } from 'react-icons/io5'
const Banner = () => {
    return (
        <div style={{ backgroundImage: `url(${banner})`, backgroundColor: 'rgba(0, 0, 0, 0.1)', backgroundBlendMode: 'overlay', }} className={` bg-cover bg-no-repeat center-center flex-col py-28`}>
            <p className='text-white container mx-auto text-center'>Seamlessly connecting you to the heartbeat of India's prime properties.</p>
            <h1 className=' text-white text-center text-[64px] container mx-auto font-bold max-w-3xl 2xl:py-12 py-6 tracking-[-1.28px] leading-[72px]'>Your Portal to India's Exquisite Real Estate</h1>
            <span className='py-2 px-4 rounded-sm bg-[#0059B1] text-[#ECF5FF] start-center gap-2 cursor-pointer'>
                <IoSearch />
                <button >
                    Find Property
                </button>
            </span>
        </div>
    )
}

export default Banner