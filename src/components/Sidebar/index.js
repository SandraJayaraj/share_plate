import './index.scss'
import { Link } from 'react-router-dom'
import LogoS from '../../assests/images/logos.png';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
const Sidebar = () => 
(
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoS} alt="logo"/>
        </Link>
        <nav>
            <NavLink excat="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#5d28dd" />

            </NavLink>
            <NavLink excat="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#5d28dd" />

            </NavLink>
            <NavLink excat="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#5d28dd" />

            </NavLink>
        </nav>
        <ul className="social-icons">
            <li>

                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/anjana-sivakumar-766760203/">
                   <FontAwesomeIcon icon={faLinkedin} color="#5d28dd" />
                </a>
            </li>

            <li>

                <a target="_blank" rel="noreferrer" href="https://github.com/ANJANA1732">
                <FontAwesomeIcon icon={faGithub} color="#5d28dd" />
                </a>
            </li>

        </ul>
    </div>
)

export default Sidebar