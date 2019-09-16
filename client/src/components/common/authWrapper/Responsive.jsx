import React from 'react';
import PropTypes from 'prop-types';

import './responsive.scss';

const Responsive = ({ children }) => (
  <div className='container'>
    <div className='row no-gutters'>
      <div className='col-sm-12 col-md-10 col m-auto'>
        <div className='responsive'>
          {children}
        </div>
      </div>
    </div>
  </div>
);

Responsive.propTypes = {
  children: PropTypes.array.isRequired
};

export default Responsive;