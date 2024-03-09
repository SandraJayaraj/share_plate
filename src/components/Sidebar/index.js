import './index.scss'

import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faEnvelope,faHandHoldingHand } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => 
(
    <div className='nav-bar'>
       
        <nav>
            <NavLink excat="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="green" />

            </NavLink>
            <NavLink excat="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="green" />

            </NavLink>

            <NavLink excat="true" activeclassname="active" className="donor-link" to="/donor">
                <FontAwesomeIcon icon={faHandHoldingHand} color="green" />

            </NavLink>

            <NavLink excat="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="green" />

            </NavLink>

            
        </nav>
       
    </div>
)

export default Sidebar