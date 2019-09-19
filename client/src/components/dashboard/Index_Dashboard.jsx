import React, { useState } from 'react';
import Textarea from 'react-textarea-autosize';
import classnames from 'classnames';
import isEmpty from '../utils/isEmpty/isEmpty';

import Responsive from '../common/authWrapper/Responsive';
import Title from '../common/title/Title';
import CustomButton from '../common/button/Custom_Button';

import './indexDashboard.scss';

const IndexDashboard = () => {
  const [error, setErrors] = useState('');
  const [textarea, setTextarea] = useState(undefined);

  const onFocus = () => {

  };

  const onChange = e => {
    setTextarea(e.target.value)
  };

  const onClick = e => {
    e.preventDefault();
    console.log(textarea)
  };

  return (
    <div className='dashboard'>
      <Responsive>
        <div className='img'>img</div>
        <Title title='Profile' />
        <p>name</p>
        <p>Email</p>
        <form className='form-message'>
          <div className='textarea'>
            <Textarea minRows={3} name='textarea' onChange={e => onChange(e)}/>
            <span className={classnames('textarea-label', {'shrink': !isEmpty(textarea)})}>enter message</span>
          </div>
          <div className='submit' onClick={onClick}>
            <CustomButton value='submit' isClass='inverted' />
          </div>
        </form>
      </Responsive>
    </div>
  )
}

export default IndexDashboard;