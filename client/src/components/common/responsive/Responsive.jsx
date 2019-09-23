import React from 'react';
import PropTypes from 'prop-types';

import './responsive.scss';

const Responsive = ({ children, isClass }) => (
  <div className='container'>
    <div className='row no-gutters'>
      <div className={isClass}>
        <div className='responsive'>
          {children}
        </div>
      </div>
    </div>
  </div>
);

Responsive.propTypes = {
  children: PropTypes.array.isRequired,
  isClass: PropTypes.string.isRequired
};

export default Responsive;