
import './index.scss'
import { Link } from 'react-router-dom'
import LogoS from '../../assests/images/img 11.png';

const About = () => {
  
  return (
    <>
     
      <div className="container about-page">
      <Link className='self' to='/'>
            <img src={LogoS} alt="potrait"/>
      </Link>
        <div className="text-zone">
          <h1>
            
            About Us
          </h1>
          <p>
          Welcome to Share Plate, your online platform for food donation and community support. Our website is dedicated to connecting donors, volunteers, and those in need to combat food insecurity and hunger in our community.
          </p>
          <p >
          At Share Plate, we believe that everyone deserves access to nutritious food and a helping hand in times of need. Our platform provides a simple and convenient way for individuals, businesses, and organizations to donate surplus food and contribute to our mission of ending hunger.


          </p>
         
        
        </div>

      </div>
     
    </>
  )
}

export default About