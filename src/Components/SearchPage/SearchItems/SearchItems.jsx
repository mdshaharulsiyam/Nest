import { MdOutlineLocationOn } from 'react-icons/md'
import img10 from '../../../assets/property/img10.png'
import { GrStatusPlaceholder } from 'react-icons/gr'
import { Link } from 'react-router-dom'

const SearchItems = () => {
  return (
    <div className='container mx-auto pb-10'>
      <div className='pt-16 pb-10'>
        <button className='px-4 py-1 bg-blue-500 text-gray-50 rounded-md inline-block mx-2'>
          properties (400)
        </button>
        <button className='px-4 py-1 text-gray-600 bg-blue-50 rounded-md inline-block mx-2'>
          New Projects (400)
        </button>
        <button className='px-4 py-1  text-gray-600 bg-blue-50 rounded-md inline-block mx-2'>
          Pre-launch offers
        </button>
      </div>
      <h3 className='font-medium text-2xl pb-10'>400 results for rental property</h3>
      <div className='start-start flex-col gap-6'>
        <div className='grid grid-cols-4 items-start gap-4 max-w-[800px]'>
          <img src={img10} className='w-full rounded-md' alt="" />
          <div className='col-span-3 grid grid-cols-3 items-start'>
            <div className='col-span-2 mb-8'>
              <h2 className='text-lg text-[#010101] tracking-[-0.18px] font-semibold leading-[24px]'> 3 BHK Builder Floor for Sale in Site Ram Bazar New Delhi</h2>
              <span className='sm:start-center gap-2 font-semiboldbold text-lg pb-4 mt-7 mb-2'>
                <MdOutlineLocationOn className='text-orange-400 text-2xl' />Meadowshire Park, Greenfield, USA
              </span>
              <p className='text-[#010101] '>Property details</p>
            </div>
            <div>
              <p className='text-2xl font-bold text-[#010101] pb-2'>$ 300000</p>
              <Link to={'/details'}>
                <button className='rounded-md bg-transparent text-base text-[#363636] border px-2 py-[6px]'>
                  Bid Property
                </button>
              </Link>
            </div>
            <div className='sm:start-center gap-2'>
              <GrStatusPlaceholder className='w-10 h-10 bg-orange-500  p-2 rounded-md text-white' />
              <div>
                <p className='font-semibold'>Total Area</p>
                <p className='-mt-1'>891 sqft</p>
              </div>
            </div>
            <div className='sm:start-center gap-2'>
              <GrStatusPlaceholder className='w-10 h-10 bg-orange-500  p-2 rounded-md text-white' />
              <div>
                <p className='font-semibold'>Status</p>
                <p className='-mt-1'>Ready to move</p>
              </div>
            </div>
            <div className='sm:start-center gap-2'>
              <GrStatusPlaceholder className='w-10 h-10 bg-orange-500  p-2 rounded-md text-white' />
              <div>
                <p className='font-semibold'>Total Area</p>
                <p className='-mt-1'>891 sqft</p>
              </div>
            </div>
          </div>

        </div>
        <div className='grid grid-cols-4 items-start gap-4 max-w-[800px]'>
          <img src={img10} className='w-full rounded-md' alt="" />
          <div className='col-span-3 grid grid-cols-3 items-start'>
            <div className='col-span-2 mb-8'>
              <h2 className='text-lg text-[#010101] tracking-[-0.18px] font-semibold leading-[24px]'> 3 BHK Builder Floor for Sale in Site Ram Bazar New Delhi</h2>
              <span className='sm:start-center gap-2 font-semiboldbold text-lg pb-4 mt-7 mb-2'>
                <MdOutlineLocationOn className='text-orange-400 text-2xl' />Meadowshire Park, Greenfield, USA
              </span>
              <p className='text-[#010101] '>Property details</p>
            </div>
            <div>
              <p className='text-2xl font-bold text-[#010101] pb-2'>$ 300000</p>
              <Link to={'/details'}>
                <button className='rounded-md bg-transparent text-base text-[#363636] border px-2 py-[6px]'>
                  Bid Property
                </button>
              </Link>
            </div>
            <div className='sm:start-center gap-2'>
              <GrStatusPlaceholder className='w-10 h-10 bg-orange-500  p-2 rounded-md text-white' />
              <div>
                <p className='font-semibold'>Total Area</p>
                <p className='-mt-1'>891 sqft</p>
              </div>
            </div>
            <div className='sm:start-center gap-2'>
              <GrStatusPlaceholder className='w-10 h-10 bg-orange-500  p-2 rounded-md text-white' />
              <div>
                <p className='font-semibold'>Status</p>
                <p className='-mt-1'>Ready to move</p>
              </div>
            </div>
            <div className='sm:start-center gap-2'>
              <GrStatusPlaceholder className='w-10 h-10 bg-orange-500  p-2 rounded-md text-white' />
              <div>
                <p className='font-semibold'>Total Area</p>
                <p className='-mt-1'>891 sqft</p>
              </div>
            </div>
          </div>

        </div>
        <div className='grid grid-cols-4 items-start gap-4 max-w-[800px]'>
          <img src={img10} className='w-full rounded-md' alt="" />
          <div className='col-span-3 grid grid-cols-3 items-start'>
            <div className='col-span-2 mb-8'>
              <h2 className='text-lg text-[#010101] tracking-[-0.18px] font-semibold leading-[24px]'> 3 BHK Builder Floor for Sale in Site Ram Bazar New Delhi</h2>
              <span className='sm:start-center gap-2 font-semiboldbold text-lg pb-4 mt-7 mb-2'>
                <MdOutlineLocationOn className='text-orange-400 text-2xl' />Meadowshire Park, Greenfield, USA
              </span>
              <p className='text-[#010101] '>Property details</p>
            </div>
            <div>
              <p className='text-2xl font-bold text-[#010101] pb-2'>$ 300000</p>
              <Link to={'/details'}>
                <button className='rounded-md bg-transparent text-base text-[#363636] border px-2 py-[6px]'>
                  Bid Property
                </button>
              </Link>
            </div>
            <div className='sm:start-center gap-2'>
              <GrStatusPlaceholder className='w-10 h-10 bg-orange-500  p-2 rounded-md text-white' />
              <div>
                <p className='font-semibold'>Total Area</p>
                <p className='-mt-1'>891 sqft</p>
              </div>
            </div>
            <div className='sm:start-center gap-2'>
              <GrStatusPlaceholder className='w-10 h-10 bg-orange-500  p-2 rounded-md text-white' />
              <div>
                <p className='font-semibold'>Status</p>
                <p className='-mt-1'>Ready to move</p>
              </div>
            </div>
            <div className='sm:start-center gap-2'>
              <GrStatusPlaceholder className='w-10 h-10 bg-orange-500  p-2 rounded-md text-white' />
              <div>
                <p className='font-semibold'>Total Area</p>
                <p className='-mt-1'>891 sqft</p>
              </div>
            </div>
          </div>

        </div>
        <div className='grid grid-cols-4 items-start gap-4 max-w-[800px]'>
          <img src={img10} className='w-full rounded-md' alt="" />
          <div className='col-span-3 grid grid-cols-3 items-start'>
            <div className='col-span-2 mb-8'>
              <h2 className='text-lg text-[#010101] tracking-[-0.18px] font-semibold leading-[24px]'> 3 BHK Builder Floor for Sale in Site Ram Bazar New Delhi</h2>
              <span className='sm:start-center gap-2 font-semiboldbold text-lg pb-4 mt-7 mb-2'>
                <MdOutlineLocationOn className='text-orange-400 text-2xl' />Meadowshire Park, Greenfield, USA
              </span>
              <p className='text-[#010101] '>Property details</p>
            </div>
            <div>
              <p className='text-2xl font-bold text-[#010101] pb-2'>$ 300000</p>
              <Link to={'/details'}>
                <button className='rounded-md bg-transparent text-base text-[#363636] border px-2 py-[6px]'>
                  Bid Property
                </button>
              </Link>
            </div>
            <div className='sm:start-center gap-2'>
              <GrStatusPlaceholder className='w-10 h-10 bg-orange-500  p-2 rounded-md text-white' />
              <div>
                <p className='font-semibold'>Total Area</p>
                <p className='-mt-1'>891 sqft</p>
              </div>
            </div>
            <div className='sm:start-center gap-2'>
              <GrStatusPlaceholder className='w-10 h-10 bg-orange-500  p-2 rounded-md text-white' />
              <div>
                <p className='font-semibold'>Status</p>
                <p className='-mt-1'>Ready to move</p>
              </div>
            </div>
            <div className='sm:start-center gap-2'>
              <GrStatusPlaceholder className='w-10 h-10 bg-orange-500  p-2 rounded-md text-white' />
              <div>
                <p className='font-semibold'>Total Area</p>
                <p className='-mt-1'>891 sqft</p>
              </div>
            </div>
          </div>

        </div>
        <div className='grid grid-cols-4 items-start gap-4 max-w-[800px]'>
          <img src={img10} className='w-full rounded-md' alt="" />
          <div className='col-span-3 grid grid-cols-3 items-start'>
            <div className='col-span-2 mb-8'>
              <h2 className='text-lg text-[#010101] tracking-[-0.18px] font-semibold leading-[24px]'> 3 BHK Builder Floor for Sale in Site Ram Bazar New Delhi</h2>
              <span className='sm:start-center gap-2 font-semiboldbold text-lg pb-4 mt-7 mb-2'>
                <MdOutlineLocationOn className='text-orange-400 text-2xl' />Meadowshire Park, Greenfield, USA
              </span>
              <p className='text-[#010101] '>Property details</p>
            </div>
            <div>
              <p className='text-2xl font-bold text-[#010101] pb-2'>$ 300000</p>
              <Link to={'/details'}>
                <button className='rounded-md bg-transparent text-base text-[#363636] border px-2 py-[6px]'>
                  Bid Property
                </button>
              </Link>
            </div>
            <div className='sm:start-center gap-2'>
              <GrStatusPlaceholder className='w-10 h-10 bg-orange-500  p-2 rounded-md text-white' />
              <div>
                <p className='font-semibold'>Total Area</p>
                <p className='-mt-1'>891 sqft</p>
              </div>
            </div>
            <div className='sm:start-center gap-2'>
              <GrStatusPlaceholder className='w-10 h-10 bg-orange-500  p-2 rounded-md text-white' />
              <div>
                <p className='font-semibold'>Status</p>
                <p className='-mt-1'>Ready to move</p>
              </div>
            </div>
            <div className='sm:start-center gap-2'>
              <GrStatusPlaceholder className='w-10 h-10 bg-orange-500  p-2 rounded-md text-white' />
              <div>
                <p className='font-semibold'>Total Area</p>
                <p className='-mt-1'>891 sqft</p>
              </div>
            </div>
          </div>

        </div>
        <div className='grid grid-cols-4 items-start gap-4 max-w-[800px]'>
          <img src={img10} className='w-full rounded-md' alt="" />
          <div className='col-span-3 grid grid-cols-3 items-start'>
            <div className='col-span-2 mb-8'>
              <h2 className='text-lg text-[#010101] tracking-[-0.18px] font-semibold leading-[24px]'> 3 BHK Builder Floor for Sale in Site Ram Bazar New Delhi</h2>
              <span className='sm:start-center gap-2 font-semiboldbold text-lg pb-4 mt-7 mb-2'>
                <MdOutlineLocationOn className='text-orange-400 text-2xl' />Meadowshire Park, Greenfield, USA
              </span>
              <p className='text-[#010101] '>Property details</p>
            </div>
            <div>
              <p className='text-2xl font-bold text-[#010101] pb-2'>$ 300000</p>
              <Link to={'/details'}>
                <button className='rounded-md bg-transparent text-base text-[#363636] border px-2 py-[6px]'>
                  Bid Property
                </button>
              </Link>
            </div>
            <div className='sm:start-center gap-2'>
              <GrStatusPlaceholder className='w-10 h-10 bg-orange-500  p-2 rounded-md text-white' />
              <div>
                <p className='font-semibold'>Total Area</p>
                <p className='-mt-1'>891 sqft</p>
              </div>
            </div>
            <div className='sm:start-center gap-2'>
              <GrStatusPlaceholder className='w-10 h-10 bg-orange-500  p-2 rounded-md text-white' />
              <div>
                <p className='font-semibold'>Status</p>
                <p className='-mt-1'>Ready to move</p>
              </div>
            </div>
            <div className='sm:start-center gap-2'>
              <GrStatusPlaceholder className='w-10 h-10 bg-orange-500  p-2 rounded-md text-white' />
              <div>
                <p className='font-semibold'>Total Area</p>
                <p className='-mt-1'>891 sqft</p>
              </div>
            </div>
          </div>

        </div>
        <div className='grid grid-cols-4 items-start gap-4 max-w-[800px]'>
          <img src={img10} className='w-full rounded-md' alt="" />
          <div className='col-span-3 grid grid-cols-3 items-start'>
            <div className='col-span-2 mb-8'>
              <h2 className='text-lg text-[#010101] tracking-[-0.18px] font-semibold leading-[24px]'> 3 BHK Builder Floor for Sale in Site Ram Bazar New Delhi</h2>
              <span className='sm:start-center gap-2 font-semiboldbold text-lg pb-4 mt-7 mb-2'>
                <MdOutlineLocationOn className='text-orange-400 text-2xl' />Meadowshire Park, Greenfield, USA
              </span>
              <p className='text-[#010101] '>Property details</p>
            </div>
            <div>
              <p className='text-2xl font-bold text-[#010101] pb-2'>$ 300000</p>
              <Link to={'/details'}>
                <button className='rounded-md bg-transparent text-base text-[#363636] border px-2 py-[6px]'>
                  Bid Property
                </button>
              </Link>
            </div>
            <div className='sm:start-center gap-2'>
              <GrStatusPlaceholder className='w-10 h-10 bg-orange-500  p-2 rounded-md text-white' />
              <div>
                <p className='font-semibold'>Total Area</p>
                <p className='-mt-1'>891 sqft</p>
              </div>
            </div>
            <div className='sm:start-center gap-2'>
              <GrStatusPlaceholder className='w-10 h-10 bg-orange-500  p-2 rounded-md text-white' />
              <div>
                <p className='font-semibold'>Status</p>
                <p className='-mt-1'>Ready to move</p>
              </div>
            </div>
            <div className='sm:start-center gap-2'>
              <GrStatusPlaceholder className='w-10 h-10 bg-orange-500  p-2 rounded-md text-white' />
              <div>
                <p className='font-semibold'>Total Area</p>
                <p className='-mt-1'>891 sqft</p>
              </div>
            </div>
          </div>

        </div>
        <div className='grid grid-cols-4 items-start gap-4 max-w-[800px]'>
          <img src={img10} className='w-full rounded-md' alt="" />
          <div className='col-span-3 grid grid-cols-3 items-start'>
            <div className='col-span-2 mb-8'>
              <h2 className='text-lg text-[#010101] tracking-[-0.18px] font-semibold leading-[24px]'> 3 BHK Builder Floor for Sale in Site Ram Bazar New Delhi</h2>
              <span className='sm:start-center gap-2 font-semiboldbold text-lg pb-4 mt-7 mb-2'>
                <MdOutlineLocationOn className='text-orange-400 text-2xl' />Meadowshire Park, Greenfield, USA
              </span>
              <p className='text-[#010101] '>Property details</p>
            </div>
            <div>
              <p className='text-2xl font-bold text-[#010101] pb-2'>$ 300000</p>
              <Link to={'/details'}>
                <button className='rounded-md bg-transparent text-base text-[#363636] border px-2 py-[6px]'>
                  Bid Property
                </button>
              </Link>
            </div>
            <div className='sm:start-center gap-2'>
              <GrStatusPlaceholder className='w-10 h-10 bg-orange-500  p-2 rounded-md text-white' />
              <div>
                <p className='font-semibold'>Total Area</p>
                <p className='-mt-1'>891 sqft</p>
              </div>
            </div>
            <div className='sm:start-center gap-2'>
              <GrStatusPlaceholder className='w-10 h-10 bg-orange-500  p-2 rounded-md text-white' />
              <div>
                <p className='font-semibold'>Status</p>
                <p className='-mt-1'>Ready to move</p>
              </div>
            </div>
            <div className='sm:start-center gap-2'>
              <GrStatusPlaceholder className='w-10 h-10 bg-orange-500  p-2 rounded-md text-white' />
              <div>
                <p className='font-semibold'>Total Area</p>
                <p className='-mt-1'>891 sqft</p>
              </div>
            </div>
          </div>

        </div>
        
      </div>
      <div className='pt-16 pb-10'>
        <button className='px-4 py-1 bg-blue-500 text-gray-50 rounded-md inline-block mx-2'>
          1
        </button>
        <button className='px-4 py-1 text-gray-600 bg-blue-50 rounded-md inline-block mx-2'>
          2
        </button>
        <button className='px-4 py-1  text-gray-600 bg-blue-50 rounded-md inline-block mx-2'>
          next
        </button>
      </div>
      <div className='md:between-center gap-5 bg-blue-50 p-5 py-10 rounded-md'>
        <div className='md:w-[34%] w-full'>
          <h5 className='text-[#010101] text-[28px] font-semibold'>Need a Home Loan?</h5>
          <p>Select How much Home loan you can take</p>
        </div>
        <div className='md:w-[65.5%]'>
          <div className=' w-full relative'>
            <div className='grid grid-cols-9 gap-1'>
              <div className='col-span-2 bg-[#8AB3DB] w-full h-3'></div>
              <div className='col-span-2 bg-[#8AB3DB] w-full h-3'></div>
              <div className='col-span-2 bg-[#8AB3DB] w-full h-3'></div>
              <div className='col-span-2 bg-[#8AB3DB] w-full h-3'></div>
              <div className=' bg-[#8AB3DB] w-full h-3'></div>
              <span className='bg-[#0051A1] absolute h-4 w-4 rounded-full -left-1 top-[50%] translate-y-[-50%]'></span>
            </div>
          </div>
          <div className=' w-full relative mt-2'>
            <div className='grid grid-cols-9 gap-1'>
              <div className='col-span-2  w-full'>
                <p>$20K</p>
              </div>
              <div className='col-span-2  w-full'>
                <p>$30K</p>
              </div>
              <div className='col-span-2  w-full'>
                <p>$40K</p>
              </div>
              <div className='col-span-2  w-full'>
                <p> $50K</p>
              </div>
              <div className=' w-full'>
                <p>$60K+</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchItems