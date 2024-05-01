import React from 'react'
import { Outlet } from 'react-router-dom'
import Navber from '../../Components/Shared/Navber/Navber'
import Footer from '../../Components/Shared/Footer/Footer'

const Root = () => {
    return (
        <>
            <Navber />
            <Outlet />
            <Footer/>
        </>
    )
}

export default Root