import banner4 from '../../../assets/banner/banner4.png'
import banner5 from '../../../assets/banner/banner5.png'
const Solutions = () => {
    return (
        <div className='container mx-auto'>
            <div className='py-10'>
                <img className='w-[76%] h-[500px] rounded-lg object-cover ' src={banner4} alt="" />
                <div className='w-full relative '>
                    <div className='w-[40%] object-cover  rounded ml-auto bg-[#ECF5FF] -mt-36 p-6'>
                    <div className='start-center gap-1'><p className='w-10 h-[2px] bg-[#EE6611]'></p><p className='top-heading'>Property buying</p></div>
                        <h2 className='heading'>Efficient and Transparent Home Buying Solutions</h2>
                        <p className='pt-2 '>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    </div>
                </div>
            </div>
            <div className='py-10'>
                <img className='w-[76%] h-[500px] rounded-lg object-cover ml-auto' src={banner5} alt="" />
                <div className='w-full relative '>
                    <div className='w-[40%] object-cover  rounded mr-auto bg-[#FDF0E7] -mt-36 p-6'>
                        <div className='start-center gap-1'><p className='w-10 h-[2px] bg-[#EE6611]'></p><p className='top-heading'>Property buying</p></div>
                        <h2 className='heading'>Efficient and Transparent Home Buying Solutions</h2>
                        <p className='pt-2 '>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Solutions