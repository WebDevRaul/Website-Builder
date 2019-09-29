import React from 'react';
import PropTypes from 'prop-types';

import Spinner from './spinner/Spinner';

// Scss
import './custom_button.scss';

const CustomButton = ({ value, type, isClass, isLoading }) => (
  <button className={`custom-button ${isClass}`} type={type}>
    {isLoading ? <Spinner /> : value}
  </button>
);

CustomButton.propTypes = {
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  isClass: PropTypes.string.isRequired,
  isLoading: PropTypes.bool
}

CustomButton.defaultProps = {
  type: 'button'
}

export default CustomButton;