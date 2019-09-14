import React from 'react';
import PropTypes from 'prop-types';

import './title.scss';

const Title = ({ title }) => (
  <div className='title'>
    <h1>
      <span>{title}</span>
    </h1>
  </div>
);

Title.propTypes = {
  title: PropTypes.string.isRequired
};

export default Title;
