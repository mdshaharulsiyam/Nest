import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { RiStarSFill } from 'react-icons/ri';
import Ellipse1 from '../../../assets/avater/Ellipse1.png'
import Ellipse2 from '../../../assets/avater/Ellipse2.png'
const Testimonials = () => {
    return (
        <div className='container mx-auto py-10' id='Testimonials'>
            <h3 className='section-heading pb-16'>Testimonials</h3>
            <Swiper
                 pagination={{ clickable: true }}
                modules={[Pagination]}
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                slidesPerView={2}
                breakpoints={{
                    767: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    600: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                }}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='bg-[#ECF5FF] p-6 box-border w-full'>
                        <span className='center-center'>
                            <RiStarSFill className='text-2xl text-yellow-500' />
                            <RiStarSFill className='text-2xl text-yellow-500' />
                            <RiStarSFill className='text-2xl text-yellow-500' />
                            <RiStarSFill className='text-2xl text-yellow-500' />
                            <RiStarSFill className='text-2xl text-yellow-200' />
                        </span>
                        <p className='py-8'>"The level of security provided by CypherPlay is unmatched. I feel confident using my card for both everyday purchases and travel. It's the peace of mind I was looking for."</p>
                        <div className='mx-auto h-10 w-10 rounded-full'>
                            <img className='w-full' src={Ellipse1} alt="" />
                        </div>
                        <p className='text-xl font-semibold text-[#111827]'>Tony Stark</p>
                        <p>Marketing manager, XYZ</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='bg-[#ECF5FF] p-6'>
                        <span className='center-center'>
                            <RiStarSFill className='text-2xl text-yellow-500' />
                            <RiStarSFill className='text-2xl text-yellow-500' />
                            <RiStarSFill className='text-2xl text-yellow-500' />
                            <RiStarSFill className='text-2xl text-yellow-500' />
                            <RiStarSFill className='text-2xl text-yellow-200' />
                        </span>
                        <p className='py-8'>"The level of security provided by CypherPlay is unmatched. I feel confident using my card for both everyday purchases and travel. It's the peace of mind I was looking for."</p>
                        <div className='mx-auto h-10 w-10 rounded-full'>
                            <img className='w-full' src={Ellipse2} alt="" />
                        </div>
                        <p className='text-xl font-semibold text-[#111827]'>Tony Stark</p>
                        <p>Marketing manager, XYZ</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='bg-[#ECF5FF] p-6'>
                        <span className='center-center'>
                            <RiStarSFill className='text-2xl text-yellow-500' />
                            <RiStarSFill className='text-2xl text-yellow-500' />
                            <RiStarSFill className='text-2xl text-yellow-500' />
                            <RiStarSFill className='text-2xl text-yellow-500' />
                            <RiStarSFill className='text-2xl text-yellow-200' />
                        </span>
                        <p className='py-8'>"The level of security provided by CypherPlay is unmatched. I feel confident using my card for both everyday purchases and travel. It's the peace of mind I was looking for."</p>
                        <div className='mx-auto h-10 w-10 rounded-full'>
                            <img className='w-full' src={Ellipse1} alt="" />
                        </div>
                        <p className='text-xl font-semibold text-[#111827]'>Tony Stark</p>
                        <p>Marketing manager, XYZ</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='bg-[#ECF5FF] p-6'>
                        <span className='center-center'>
                            <RiStarSFill className='text-2xl text-yellow-500' />
                            <RiStarSFill className='text-2xl text-yellow-500' />
                            <RiStarSFill className='text-2xl text-yellow-500' />
                            <RiStarSFill className='text-2xl text-yellow-500' />
                            <RiStarSFill className='text-2xl text-yellow-200' />
                        </span>
                        <p className='py-8'>"The level of security provided by CypherPlay is unmatched. I feel confident using my card for both everyday purchases and travel. It's the peace of mind I was looking for."</p>
                        <div className='mx-auto h-10 w-10 rounded-full'>
                            <img className='w-full' src={Ellipse2} alt="" />
                        </div>
                        <p className='text-xl font-semibold text-[#111827]'>Tony Stark</p>
                        <p>Marketing manager, XYZ</p>
                    </div>
                </SwiperSlide>
                
            </Swiper>
        </div>
    )
}

export default Testimonials