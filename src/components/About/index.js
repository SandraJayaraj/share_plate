
import './index.scss'
import { Link } from 'react-router-dom'
import LogoS from '../../assests/images/self.png';

const About = () => {
  
  return (
    <>
     
      <div className="container about-page">
      <Link className='self' to='/'>
            <img src={LogoS} alt="potrait"/>
      </Link>
        <div className="text-zone">
          <h1>
            
            About Me
          </h1>
          <p>
          Hello there! I'm Anjana, a passionate fourth-year Computer Science Engineering student 
          with a keen interest in exploring the intersection of technology and creativity. 
          Beyond the world of coding and algorithms, I find solace and inspiration in various artistic endeavors such as
          photography, digital art, cooking, and music.
          </p>
          <p >
          In my journey as a computer science student, I've delved into various projects spanning machine learning, and web development. Each project has been an opportunity to learn, grow, and apply my skills to real-world problems.

As I continue to explore diverse fields and push the boundaries of my knowledge, I'm excited about the endless possibilities that lie ahead. Join me on this journey of innovation, creativity, and lifelong learning.


          </p>
          <p>
          Let's connect and create something amazing together!
          </p>
        
        </div>

      </div>
     
    </>
  )
}

export default About