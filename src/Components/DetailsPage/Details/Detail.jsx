import banner3 from '../../../assets/banner/banner3.png'
import OverView from '../OverView/OverView'
const Detail = () => {
  return (
    <div className='container mx-auto'>
      <div className='md:grid grid-cols-3 gap-5 py-10'>
        <div className='col-span-2'>
          <div className=' grid grid-cols-3 items-start'>
            <div className='col-span-2 mb-8'>
              <h2 className='text-lg text-[#010101] tracking-[-0.18px] font-semibold leading-[24px]'> 3 BHK Builder Floor for Sale in Site Ram Bazar New Delhi</h2>
            </div>
            <div>
              <p className='text-2xl font-bold text-[#010101] pb-2 text-right'>$ 300000</p>
            </div>
          </div>
          <div>
            <img src={banner3} className='w-full' alt="" />
            <div className='sm:grid grid-cols-8 gap-2 mt-3'>
              <img src={banner3} className='w-full col-span-3' alt="" />
              <img src={banner3} className='w-full col-span-3' alt="" />
              <div className='w-full col-span-2 relative'>
                <img src={banner3} className='w-full h-full object-cover' alt="" />
                <button className='absolute block w-full h-full left-0 top-0 text-white bg-black bg-opacity-70'>
                  View more
                </button>
              </div>
            </div>
            <OverView />
          </div>
        </div>
        <div className=''>
          <div className='bg-[#ECF5FF] p-2 mt-14'>
            <p>property value</p>
            <p className='text-black text-2xl font-bold capitalize py-6'>$ 300k - $ 310k</p>
            <p>Your bid can not be than 10% of the property Minimum value.</p>
            <form className='py-6'>
              <label htmlFor="min-price" >
                <p className='text-black'>Min</p>
                <input name='min-price' type="text" defaultValue={`$ 280k`} className='p-4 border-none outline-none text-black bg-white w-full rounded-md py-3' />
              </label>
              <label htmlFor="max-price">
                <p className='text-black'>Max</p>
                <input name='max-price' type="text" defaultValue={`$ 305k`} className='p-4 border-none outline-none text-black bg-white w-full rounded-md py-3' />
              </label>
            </form>
            <div className='bg-[#EEE] w-full h-8 rounded-xl mt-5 relative'>
              <span className='bg-[#EE6611] h-9 w-9 block absolute -left-1 cursor-pointer top-[50%] translate-y-[-50%] rounded-full'></span>
              <span className='bg-[#EE6611] h-9 w-9 block absolute -right-1 cursor-pointer top-[50%] translate-y-[-50%] rounded-full'></span>
              <div className='between-center'>
                <p>$ 280k</p>
              </div>
            </div>
            <button className='text-white bg-blue-600  py-2 px-6 rounded-md mx-auto mt-5 block' >Bid Property</button>
          </div>
          <div className='w-full h-[400px] overflow-hidden rounded-md mt-8'>
            <iframe className='w-full h-full' src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14605.187732304246!2d90.4036922!3d23.7724384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1714546013805!5m2!1sen!2sbd"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Detail