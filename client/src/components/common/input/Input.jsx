import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import isEmpty from '../../utils/isEmpty/isEmpty';
import Label from './Label';

// Scss
import './input.scss';

const Input = ({ name, value, onChange, onFocus, type, label, error }) => (
  <div className='group'>
    <input 
      className={classnames('form-input', {'validate' : error})}
      name={name}
      value={value}
      onChange={onChange}
      onFocus={onFocus}
      type={type}
      autoComplete='true'
      required
    />
      {
        !isEmpty(error) ? <Label name={error} value={value} /> : 
        !isEmpty(label) ? <Label name={label} value={value} /> : null 
      }
  </div>
);

Input.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onFocus: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
}

export default Input;