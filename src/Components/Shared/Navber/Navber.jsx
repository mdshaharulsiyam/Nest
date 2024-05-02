import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../../assets/logo/logo.png'
const Navber = () => {
    const navlinks = [
        { menu: 'Buy', path: '/buy' },
        { menu: 'Details', path: '/details' },
        { menu: 'About', path: '/about' },
        { menu: 'Search', path: '/search' },
    ]
    return (
        <div className='bg-[#ECF5FF]'>
            <div className="between-center py-1 container mx-auto">
                <div className="">
                    <div className="dropdown md:hidden block">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navlinks.map((item, index) => <li key={index}><NavLink to={item?.path}>{item?.menu}</NavLink></li>)}
                        </ul>
                    </div>
                    <div className='hidden md:block'>
                        <ul tabIndex={0} className="start-center gap-6 text-lg">
                            {navlinks.map((item, index) => <li key={index}><NavLink to={item?.path}>{item?.menu}</NavLink></li>)}
                        </ul>
                    </div>
                </div>
                <div className="">
                    <NavLink to={'/'}>
                        <img src={logo} alt="" />
                    </NavLink>
                </div>
                <div className="">
                    <NavLink to={'#'} className="">
                        Manage Rentals
                    </NavLink>
                    <NavLink to={'#'} className="ml-3">
                        Sign In
                    </NavLink>

                </div>
            </div>
        </div>
    )
}

export default Navber