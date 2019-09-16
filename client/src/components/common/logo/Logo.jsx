import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

// Tilt
import Tilt from 'react-tilt';

import './logo.scss';

const options = {
  max: 100,     // max tilt rotation (degrees)
  scale: 1,      // 2 = 200%, 1.5 = 150%, etc..
}

const Logo  = ({ wrapper }) => (
  <div className={classnames('', { 'logo-div' : wrapper })}>
    <Tilt className="Tilt br2 shadow-2" options={options} >
      <div className="Tilt-inner pa3">
        <div className='logo'><span>logo</span></div>
      </div>
    </Tilt>
  </div>
);

Logo.propTypes = {
  wrapper: PropTypes.bool.isRequired
}

export default Logo;