
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import avater1 from '../../../assets/avater/avater1.png'
import avater2 from '../../../assets/avater/avater2.png'
import avater3 from '../../../assets/avater/avater3.png'
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';
const OurTeam = () => {
    return (
        <div className='container mx-auto'>
            <div className='start-center gap-1'><p className='w-10 h-[2px] bg-[#EE6611]'></p><p className='top-heading'>Our Teem</p></div>
            <h2 className='heading'>Discover the Faces Behind Our Success</h2>
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
                        <div className='h-[500px] w-full box-border '>
                            <img src={avater1} className='w-full h-full object-cover' alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='h-[500px] w-full box-border '>
                            <img src={avater2} className='w-full h-full object-cover' alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='h-[500px] w-full box-border '>
                            <img src={avater3} className='w-full h-full object-cover' alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='h-[500px] w-full box-border '>
                            <img src={avater1} className='w-full h-full object-cover' alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='h-[500px] w-full box-border '>
                            <img src={avater2} className='w-full h-full object-cover' alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='h-[500px] w-full box-border '>
                            <img src={avater3} className='w-full h-full object-cover' alt="" />
                        </div>
                    </SwiperSlide>
                    <div className="swiper-button-prev bg-blue-600 rounded-full  p-2 pl-3"><MdArrowBackIos className='text-white' /></div>
                    <div className="swiper-button-next bg-blue-600 rounded-full p-2"><MdArrowForwardIos className='text-white' /></div>
                </Swiper>
            </div>
        </div>
    )
}

export default OurTeam