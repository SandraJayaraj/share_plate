
import './index.scss'
import { Link } from 'react-router-dom'
import LogoS from '../../assests/images/img12.png';

const Donor = () => {
  
  return (
    <>
     
      <div className="container donor-page">
      <Link className='self' to='/'>
            <img src={LogoS} alt="donor"/>
      </Link>
        <div className="text-zone">
          <h1>
            
         Food Donor
          </h1>
          <p>
          Food Donor connects surplus food donors with those in need, reducing food waste and fighting hunger. Join us in making a difference—one meal at a time.
          </p>
          <Link to="/Dsignup" className='flat-button with-margin'>Donor Sign Up</Link>

          <Link to="/Dsignin" className='flat-button'>Donor Sign In</Link>
         
        
        </div>

      </div>
     
    </>
  )
}

export default Donor