import React, { useState, useEffect } from 'react';

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

               
                    <h1 className={moveUp ? 'move-up' : ''}> Share Plate</h1>
                    <br />
                    <h2  className={moveUp ? 'move-up' : ''}>The meal you donate today could be the hope someone holds onto tomorrow </h2>
                    
                
            </div>
        </div>
    );
}

export default Home