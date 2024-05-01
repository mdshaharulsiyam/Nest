import React from 'react'
import Banner from '../../Components/PopertyPage/Banner/Banner'
import PopularProperties from '../../Components/PopertyPage/PopularProperties/PopularProperties'
import NewProperties from '../../Components/PopertyPage/NewProperties/NewProperties'
import Testimonials from '../../Components/Shared/Testimonials/Testimonials'
const Poperty = () => {
  return (
    <>
    <Banner/>
    <PopularProperties/>
    <NewProperties/>
    <Testimonials/>
    </>
  )
}

export default Poperty