import React from 'react'
import Banner from '../../Components/HomePage/Banner/Banner'
import Property from '../../Components/HomePage/Property/Property'
import Service from '../../Components/Shared/Service/Service'

const Home = () => {
    return (
        <>
            <Banner />
            <Property/>
            <Service/>
        </>
    )
}

export default Home