import React from 'react'
import logo from '../../../assets/logo/logo.png'
import Socialicon from '../../../assets/logo/Socialicon.png'
import { Link } from 'react-router-dom'
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa'
const Footer = () => {
    return (
        <div className='bg-[#ECF5FF] py-12'>
            <div className='container mx-auto flex  justify-start items-start gap-2'>
                <div className='w-[31%] max-w-[320px]'>
                    <img src={logo} alt="" />
                    <p className='text-base'>Design amazing digital experiences that create more happy in the world.</p>
                </div>
                <div className='lg:grid block lg:grid-cols-2 xl:grid-cols-4 gap-2 w-full'>
                    <div className='start-start flex-col gap-3'>
                        <h6 className='text-sm font-semibold text-[#667085] pb-2'>Product</h6>
                        <Link className='foot-shortcut' to={'#'}>Overview</Link>
                        <Link className='foot-shortcut' to={'#'}>Features</Link>
                        <Link className='foot-shortcut' to={'#'}>Solutions</Link>
                        <Link className='foot-shortcut' to={'#'}>Tutorials</Link>
                        <Link className='foot-shortcut' to={'#'}>Pricing</Link>
                        <Link className='foot-shortcut' to={'#'}>Releases</Link>
                    </div>
                    <div className='start-start flex-col gap-3'>
                        <h6 className='text-sm font-semibold text-[#667085] pb-2'>Company</h6>
                        <Link className='foot-shortcut' to={'#'}>Blog</Link>
                        <Link className='foot-shortcut' to={'#'}>Newsletter</Link>
                        <Link className='foot-shortcut' to={'#'}>Events</Link>
                        <Link className='foot-shortcut' to={'#'}>Help centre</Link>
                        <Link className='foot-shortcut' to={'#'}>Tutorials</Link>
                        <Link className='foot-shortcut' to={'#'}>Support</Link>
                    </div>
                    <div className='start-start flex-col gap-3'>
                        <h6 className='text-sm font-semibold text-[#667085] pb-2'>Social </h6>
                        <Link className='foot-shortcut' to={'#'}>Twitter</Link>
                        <Link className='foot-shortcut' to={'#'}>LinkedIn</Link>
                        <Link className='foot-shortcut' to={'#'}>Facebook</Link>
                        <Link className='foot-shortcut' to={'#'}>GitHub</Link>
                        <Link className='foot-shortcut' to={'#'}>AngelList</Link>
                        <Link className='foot-shortcut' to={'#'}>Dribbble</Link>
                    </div>
                    <div className='start-start flex-col gap-3'>
                        <h6 className='text-sm font-semibold text-[#667085] pb-2'>Legal</h6>
                        <Link className='foot-shortcut' to={'#'}>Terms</Link>
                        <Link className='foot-shortcut' to={'#'}>Privacy</Link>
                        <Link className='foot-shortcut' to={'#'}>Cookies</Link>
                        <Link className='foot-shortcut' to={'#'}>Licenses</Link>
                        <Link className='foot-shortcut' to={'#'}>Settings</Link>
                        <Link className='foot-shortcut' to={'#'}>Contact</Link>
                    </div>
                </div>
            </div>
            <div className='between-center border-t container mx-auto mt-6 pt-8'>
                <p>© 2024 Heritage- Nest . All rights reserved.</p>
                <div className='start-center gap-2'>
                    <Link>
                        <FaTwitter className='foot-icon' />
                    </Link>
                    <Link>
                        <FaLinkedin className='foot-icon' />
                    </Link>
                    <Link>
                        <FaFacebook className='foot-icon' />
                    </Link>
                    <Link>
                    <img src={Socialicon} className='w-6' alt="" />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Footer