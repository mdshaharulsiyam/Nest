import { CgSearch } from 'react-icons/cg'
import banner2 from '../../../assets/banner/banner2.jpg'
import { MdOutlineLocationOn } from 'react-icons/md'
import { RiHome5Line } from 'react-icons/ri'
import { BsCurrencyDollar } from 'react-icons/bs'
import { IoSearch } from 'react-icons/io5'
import { Link, useNavigate } from 'react-router-dom'
import { FaArrowDown } from 'react-icons/fa'

const Banner = () => {
    const navigate = useNavigate()
    const handelSearch =()=>{
        navigate('/search')
    }
    return (
        <>
            <img className='w-full' src={banner2} alt="" />
            <div className='container max-w-5xl mx-auto bg-white relative rounded-md py-6 -mt-40'>
                <div className='p-6'>
                    <div className='filter-button'>
                        <button className='inline-block p-2 mx-2 active'>Buy</button>
                        <button className='inline-block p-2 mx-2'>Rent</button>
                        <button className='inline-block p-2 mx-2'>PG</button>
                        <button className='inline-block p-2 mx-2'>Plot</button>
                        <button className='inline-block p-2 mx-2'>Commercial</button>
                    </div>
                    <div className='w-full relative border my-6'>
                        <CgSearch className='absolute left-5 top-[50%] translate-y-[-50%]' />
                        <input type="text" placeholder='Search properties' className='w-full border-none outline-none p-4 pl-10 text-base' />
                    </div>
                    <div className='md:grid md:grid-cols-2 lg:grid-cols-3 gap-3'>
                        <label htmlFor='location'>
                            <span className='start-center gap-2 font-semiboldbold text-lg pb-4'>
                                <MdOutlineLocationOn className='text-orange-400 text-2xl' /> Your Location
                            </span>
                            <div className=' bg-[#ECF5FF] p-4 py-3 rounded-md'>
                                <select name="location" className='w-full border-none outline-none bg-transparent text-orange-400' id="">
                                    <option></option>
                                    <option>Bangladesh</option>
                                    <option>Indea</option>
                                    <option>Pakistan</option>
                                </select>
                            </div>

                        </label>
                        <label htmlFor='property-type'>
                            <span className='start-center gap-2 font-semiboldbold text-lg pb-4'>
                                <RiHome5Line className='text-orange-400 text-2xl' /> Property Type
                            </span>
                            <div className=' bg-[#ECF5FF] p-4 py-3 rounded-md'>
                                <select name="property-type" className='w-full border-none outline-none bg-transparent text-orange-400' id="">
                                    <option></option>
                                    <option>plot</option>
                                    <option>pg</option>
                                    <option>Commercial</option>
                                </select>
                            </div>

                        </label>
                        <label htmlFor='budget'>
                            <span className='start-center gap-2 font-semiboldbold text-lg pb-4'>
                                <BsCurrencyDollar className='text-orange-400 text-2xl' /> Budget
                            </span>
                            <div className=' bg-[#ECF5FF] p-4 py-3 rounded-md'>
                                <input type="number" className='w-full bg-transparent border-none outline-none' name='budget' />
                            </div>

                        </label>
                    </div>
                </div>
                <div className='px-6'>
                    <span onClick={handelSearch} className='py-2 px-4 rounded-sm bg-[#0059B1] text-[#ECF5FF] center-center gap-2 cursor-pointer'>
                        <IoSearch />
                        <button >
                            Find Property
                        </button>
                    </span>
                </div>
            </div>
            <div className='container mx-auto sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16'>
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