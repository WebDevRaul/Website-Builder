import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Input from '../input/Input';

const Field = ({ edit, name, label, type, onFocus, error, data }) => {
  const [state, setState] = useState(undefined);

  useEffect(() => {
    setState(data)
  },[data])

  const onChange = e => {
    setState(e.target.value)
  }

  return (
    <div className='field'>
      {
        edit ? 
        <Input name={name} value={state} onChange={onChange} onFocus={onFocus} error={error} type={type} label={label} /> :
        <p>{data}</p>
      }
    </div>
  );
}
Field.propTypes = {
  data: PropTypes.object.isRequired,
  edit: PropTypes.bool.isRequired
};

export default Field;