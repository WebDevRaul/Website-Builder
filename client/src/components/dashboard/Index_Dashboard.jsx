import React, { useState } from 'react';

import Responsive from '../common/authWrapper/Responsive';
import Title from '../common/title/Title';
import CustomButton from '../common/button/Custom_Button';
import TextArea from '../common/textarea/TextArea';

import './indexDashboard.scss';

const IndexDashboard = () => {
  const [error, setErrors] = useState('');
  const [textarea, setTextarea] = useState('');

  const onFocus = () => {

  }

  const onChange = e => {
    setTextarea(e.target.value)
  }

  const onSubmit = e => {
    e.preventDefault();
    setErrors('');
  }

  return (
    <div className='dashboard'>
      <Responsive>
        <div className='img'>img</div>
        <Title title='Profile' />
        <p>name</p>
        <p>Email</p>
        <form noValidate className='form-message'>
          <TextArea name='message' value={textarea} onChange={onChange} onFocus={onFocus} label='enter message' error={error} rows='5' />
          <div className='submit' onSubmit={onSubmit}>
            <CustomButton value='submit' isClass='inverted' />
          </div>
        </form>
      </Responsive>
    </div>
  )
}

export default IndexDashboard;