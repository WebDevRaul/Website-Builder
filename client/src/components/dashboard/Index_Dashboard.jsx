import React, { useState } from 'react';
import Textarea from 'react-textarea-autosize';
import classnames from 'classnames';
import isEmpty from '../utils/isEmpty/isEmpty';

import Responsive from '../common/authWrapper/Responsive';
import CustomButton from '../common/button/Custom_Button';
import Credentials from './credentials/Credentials';
import Title from '../common/title/Title';
import Photo from './photo/Photo';
import logo from '../../assets/img/questionMark.jpg'

import './indexDashboard.scss';

const name='John Doe';
const email='JohnDoe@gmail.com'

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
        <Title title={name} />
        <Photo photo={logo} />
        <Credentials name='email' data={email} />
        <form className='form-message'>
          <div className='textarea'>
            <Textarea minRows={3} name='textarea' onChange={e => onChange(e)} />
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