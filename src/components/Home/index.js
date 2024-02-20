import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import './index.scss'
const Home = () => {

    const [moveUp, setMoveUp] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setMoveUp(true);
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

    return (

        <div className = "container home-page">
            <div className="text-zone">

               
                    <h1 className={moveUp ? 'move-up' : ''}>Hi, <br /> I'm Anjana Sivakumar</h1>
                    <br />
                    <Link to="/Explore" className='flat-button'>Explore Works</Link>
                
            </div>
        </div>
    );
}

export default Home