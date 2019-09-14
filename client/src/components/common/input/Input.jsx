import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import isEmpty from '../../utils/isEmpty/isEmpty';

// Scss
import './input.scss';

const Input = ({ name, value, onChange, onFocus, type, label }) => (
  <div className='group'>
    <input 
      className='form-input'
      name={name}
      value={value}
      onChange={onChange}
      onFocus={onFocus}
      type={type}
      autoComplete='true'
      required
    />
      {
        !isEmpty(label) ? 
        <label className={classnames('form-input-label', { 'shrink': value })}>
          {label.charAt(0).toUpperCase() + label.slice(1)}
        </label>
        : null 
      }
  </div>
);

Input.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onFocus: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
}

export default Input;