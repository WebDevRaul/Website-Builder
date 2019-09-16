import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Input from '../input/Input';

const Field = ({ edit, name, label, onFocus, error, data, type }) => {
  const [state, setState] = useState('');

  useEffect(() => {
    setState(data)
  }, [data])

  const onChange = e => {
    setState(e.target.value)
  }

  return (
    <div className='field'>
      {
        edit ? 
        <Input name={name} value={state} onChange={onChange} onFocus={onFocus} error={error} label={label} type={type} /> :
        <p>{data}</p>
      }
    </div>
  );
}

Field.propTypes = {
  edit: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onFocus: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
};

export default Field;