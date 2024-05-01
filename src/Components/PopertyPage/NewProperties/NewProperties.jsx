import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { RiGalleryFill } from 'react-icons/ri';
import { MdArrowBackIos, MdArrowForwardIos, MdOutlineLocationOn } from 'react-icons/md';
import img7 from '../../../assets/property/img7.png'
import img8 from '../../../assets/property/img8.png'
import img9 from '../../../assets/property/img9.png'
const NewProperties = () => {
  return (
    <div id='Popular' className='container mx-auto pt-10'>
    <div className='between-center'>
        <h3 className='text-[32px] font-semibold text-[#111827]'>New Listed Properties</h3>
        <Link className='text-[#0059B1] text-lg font-semibold'>See all propeety</Link>
    </div>
    <div className='py-8 sliderWidht mx-auto'>
        <Swiper
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            modules={[Navigation]}
            slidesPerView={3}
            navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }}
            pagination={{ clickable: true }}
            breakpoints={{
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                767: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                600: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                },
            }}
            className="mySwiper">
            <SwiperSlide>
                <div>
                    <div className='w-full h-auto relative '>
                        <img src={img7} alt="" />
                        <span className='absolute center-center left-4 bottom-4 bg-white py-1 px-3 gap-2 font-bold rounded-md'>
                            <RiGalleryFill className='text-orange-500' />20
                        </span>
                    </div>
                    <div className=' between-center mt-3 border-b pb-2'>
                        <button className='text-sm py-1 px-3 text-[#00254A] bg-[#C5E2FF]'>Apartment </button>
                        <p className='ready-to-move'>Ready to Move</p>
                    </div>
                    <h4 className='text-[20px] text-[#111827] font-semibold text-left mt-2'>SunnySlope Suites</h4>
                    <span className='start-center gap-2 font-semiboldbold text-lg pb-4 mt-2'>
                        <MdOutlineLocationOn className='text-orange-400 text-2xl' /> <p>Meadowshire Park, Greenfield, USA</p>
                    </span>
                    <p className='text-[24px] text-[#111827] font-semibold text-left mt-3'>$ 250000</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div>
                    <div className='w-full h-auto relative '>
                        <img src={img8} alt="" />
                        <span className='absolute center-center left-4 bottom-4 bg-white py-1 px-3 gap-2 font-bold rounded-md'>
                            <RiGalleryFill className='text-orange-500' />20
                        </span>
                    </div>
                    <div className=' between-center mt-3 border-b pb-2'>
                        <button className='text-sm py-1 px-3 text-[#00254A] bg-[#C5E2FF]'>Apartment </button>
                        <p className='ready-to-move'>Ready to Move</p>
                    </div>
                    <h4 className='text-[20px] text-[#111827] font-semibold text-left mt-2'>SunnySlope Suites</h4>
                    <span className='start-center gap-2 font-semiboldbold text-lg pb-4 mt-2'>
                        <MdOutlineLocationOn className='text-orange-400 text-2xl' /> <p>Meadowshire Park, Greenfield, USA</p>
                    </span>
                    <p className='text-[24px] text-[#111827] font-semibold text-left mt-3'>$ 250000</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div>
                    <div className='w-full h-auto relative '>
                        <img src={img9} alt="" />
                        <span className='absolute center-center left-4 bottom-4 bg-white py-1 px-3 gap-2 font-bold rounded-md'>
                            <RiGalleryFill className='text-orange-500' />20
                        </span>
                    </div>
                    <div className=' between-center mt-3 border-b pb-2'>
                        <button className='text-sm py-1 px-3 text-[#00254A] bg-[#C5E2FF]'>Apartment </button>
                        <p className='ready-to-move'>Ready to Move</p>
                    </div>
                    <h4 className='text-[20px] text-[#111827] font-semibold text-left mt-2'>SunnySlope Suites</h4>
                    <span className='start-center gap-2 font-semiboldbold text-lg pb-4 mt-2'>
                        <MdOutlineLocationOn className='text-orange-400 text-2xl' /> <p>Meadowshire Park, Greenfield, USA</p>
                    </span>
                    <p className='text-[24px] text-[#111827] font-semibold text-left mt-3'>$ 250000</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div>
                    <div className='w-full h-auto relative '>
                        <img src={img7} alt="" />
                        <span className='absolute center-center left-4 bottom-4 bg-white py-1 px-3 gap-2 font-bold rounded-md'>
                            <RiGalleryFill className='text-orange-500' />20
                        </span>
                    </div>
                    <div className=' between-center mt-3 border-b pb-2'>
                        <button className='text-sm py-1 px-3 text-[#00254A] bg-[#C5E2FF]'>Apartment </button>
                        <p className='ready-to-move'>Ready to Move</p>
                    </div>
                    <h4 className='text-[20px] text-[#111827] font-semibold text-left mt-2'>SunnySlope Suites</h4>
                    <span className='start-center gap-2 font-semiboldbold text-lg pb-4 mt-2'>
                        <MdOutlineLocationOn className='text-orange-400 text-2xl' /> <p>Meadowshire Park, Greenfield, USA</p>
                    </span>
                    <p className='text-[24px] text-[#111827] font-semibold text-left mt-3'>$ 250000</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div>
                    <div className='w-full h-auto relative '>
                        <img src={img8} alt="" />
                        <span className='absolute center-center left-4 bottom-4 bg-white py-1 px-3 gap-2 font-bold rounded-md'>
                            <RiGalleryFill className='text-orange-500' />20
                        </span>
                    </div>
                    <div className=' between-center mt-3 border-b pb-2'>
                        <button className='text-sm py-1 px-3 text-[#00254A] bg-[#C5E2FF]'>Apartment </button>
                        <p className='ready-to-move'>Ready to Move</p>
                    </div>
                    <h4 className='text-[20px] text-[#111827] font-semibold text-left mt-2'>SunnySlope Suites</h4>
                    <span className='start-center gap-2 font-semiboldbold text-lg pb-4 mt-2'>
                        <MdOutlineLocationOn className='text-orange-400 text-2xl' /> <p>Meadowshire Park, Greenfield, USA</p>
                    </span>
                    <p className='text-[24px] text-[#111827] font-semibold text-left mt-3'>$ 250000</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div>
                    <div className='w-full h-auto relative '>
                        <img src={img9} alt="" />
                        <span className='absolute center-center left-4 bottom-4 bg-white py-1 px-3 gap-2 font-bold rounded-md'>
                            <RiGalleryFill className='text-orange-500' />20
                        </span>
                    </div>
                    <div className=' between-center mt-3 border-b pb-2'>
                        <button className='text-sm py-1 px-3 text-[#00254A] bg-[#C5E2FF]'>Apartment </button>
                        <p className='ready-to-move'>Ready to Move</p>
                    </div>
                    <h4 className='text-[20px] text-[#111827] font-semibold text-left mt-2'>SunnySlope Suites</h4>
                    <span className='start-center gap-2 font-semiboldbold text-lg pb-4 mt-2'>
                        <MdOutlineLocationOn className='text-orange-400 text-2xl' /> <p>Meadowshire Park, Greenfield, USA</p>
                    </span>
                    <p className='text-[24px] text-[#111827] font-semibold text-left mt-3'>$ 250000</p>
                </div>
            </SwiperSlide>
            <div className="swiper-button-prev bg-blue-600 rounded-full  p-2 pl-3"><MdArrowBackIos className='text-white' /></div>
            <div className="swiper-button-next bg-blue-600 rounded-full p-2"><MdArrowForwardIos className='text-white' /></div>
        </Swiper>
    </div>
</div>
  )
}

export default NewProperties