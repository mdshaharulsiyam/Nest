import img from '../../../assets/property/img.png'
const Journy = () => {
    return (
        <div className='container mx-auto md:grid grid-cols-3 gap-6 items-center py-7'>
            <div className=' rounded  p-6 col-span-2'>
                <div className='start-center gap-1'><p className='w-10 h-[2px] bg-[#EE6611]'></p><p className='top-heading'>Meet the Team For Book Consultation</p></div>
                <h2 className='heading'>Meet the stewards of your <br /> heritage journey</h2>
                <p className=' '>each member an embodiment of expertise and warmth, dedicated to guiding you <br />home, every step of the way.</p>
                <button className='py-1 px-5 rounded-md mt-5 text-white bg-blue-600'>
                    Book Consultation Now
                </button>
            </div>
            <img className='w-full h-full object-cover' src={img} alt="" />
        </div>
    )
}

export default Journy