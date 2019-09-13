import React from 'react';
import PropTypes from 'prop-types';

import './title.scss';

const Title = ({ children }) => (
  <div className='title'>
    <h1>
      <span>{children}</span>
    </h1>
  </div>
);

Title.propTypes = {
  children: PropTypes.string.isRequired
};

export default Title;
