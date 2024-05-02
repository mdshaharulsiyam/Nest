import Amenities from '../../Components/DetailsPage/Amenities/Amenities'
import Detail from '../../Components/DetailsPage/Details/Detail'
import NearbyProperties from '../../Components/DetailsPage/NearbyProperties/NearbyProperties'
import Service from '../../Components/Shared/Service/Service'
const Details = () => {
  return (
    <div className='container mx-auto'>
      <Detail/>
      <Amenities/>
      <Service/>
      <NearbyProperties/>
    </div>
  )
}

export default Details