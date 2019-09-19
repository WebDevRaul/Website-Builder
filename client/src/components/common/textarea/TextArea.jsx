import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import isEmpty from '../../utils/isEmpty/isEmpty';
import Label from '../input/Label';

// Scss
import './textarea.scss';

const TextArea = ({  rows, name, value, onChange, onFocus, label, error}) => (
  <div className='textarea'>
    <textarea 
      className={classnames('form-textarea', {'validate' : error})}
      rows={rows}
      name={name}
      value={value}
      onChange={onChange}
      onFocus={onFocus}
      autoComplete='true'
      required
    />
      {
        !isEmpty(error) ? <Label name={error} value={value} /> : 
        !isEmpty(label) ? <Label name={label} value={value} /> : null 
      }
  </div>
);

TextArea.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onFocus: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired
}

export default TextArea;