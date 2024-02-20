import './index.scss';
import { Link } from 'react-router-dom'

import Img1 from '../../assests/images/img1.png';
import Img2 from '../../assests/images/img2.png';
import Img3 from '../../assests/images/img3.jpg';
const Explore = () => {
  return (
    <>
      <div className="container explore-page">
            <div className="text-reg">
                
                      <h1> Works  </h1>
            
                      <div className="image-container">
                          <div className="image-wrapper">
                              <Link className='img' to='/'>
                                  <img src={Img1} alt="img1"/>
                              </Link>
                          </div>
                          <div className="image-wrapper">
                              <Link className='img' to='/'>
                                  <img src={Img2} alt="img2"/>
                              </Link>
                          </div>
                          <div className="image-wrapper">
                              <Link className='img' to='/'>
                                  <img src={Img3} alt="img3"/>
                              </Link>
                          </div>
                      </div>
                      <br />
                      <br />
                      <h1> Digital Paintings  </h1>

                      
          </div>
        
      </div>
  </>
  );
}

export default Explore