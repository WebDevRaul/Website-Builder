  
import React from 'react';

// Tilt
import Tilt from 'react-tilt';

const options = {
  max: 100,     // max tilt rotation (degrees)
  scale: 1,      // 2 = 200%, 1.5 = 150%, etc..
}

const Logo  = () => (
  <Tilt className="Tilt br2 shadow-2" options={options} >
    <div className="Tilt-inner pa3">
      <div className='logo'><span>logo</span></div>
    </div>
  </Tilt>
)

export default Logo;