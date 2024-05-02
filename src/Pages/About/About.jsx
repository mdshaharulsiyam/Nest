import React from 'react'
import Banner from '../../Components/AboutPage/Banner/Banner'
import Solutions from '../../Components/AboutPage/Solutions/Solutions'
import OurTeam from '../../Components/AboutPage/OurTeam/OurTeam'
import Journy from '../../Components/AboutPage/Journy/Journy'
import Testimonials from '../../Components/Shared/Testimonials/Testimonials'

const About = () => {
    return (
        <>
            <Banner />
            <Solutions/>
            <OurTeam/>
            <Journy/>
            <Testimonials/>
        </>
    )
}

export default About