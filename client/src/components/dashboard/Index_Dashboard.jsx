import React, { useState } from 'react';

import Responsive from '../common/authWrapper/Responsive';
import Title from '../common/title/Title';

import './indexDashboard.scss';
import Field from '../common/field/Field';

const IndexDashboard = () => {
  const [error, setErrors] = useState(undefined);
  const [edit, setEdit] = useState(true);

  const onFocus = () => {

  }


  const onSubmit = e => {
    e.preventDefault();
    setErrors(false);
  }

  return (
    <div className='dashboard'>
      <Responsive>
        <div className='img'>img</div>
        <Title title='Profile' />
        <Field 
          edit={edit} name='name' label='name' onFocus={onFocus} error={error} data='Jhon' type='text' />
        <Field 
          edit={edit} name='email' label='email' onFocus={onFocus} error={error} data='Jhon@gmail.com' type='email' />
        <Field 
          edit={edit} name='telephone' label='telephone' onFocus={onFocus} error={error} data='12345' type='text' />
        <Field 
          edit={edit} name='address' label='address' onFocus={onFocus} error={error} data='str. ....' type='text' />
        <Field 
          edit={edit} name='country' label='country' onFocus={onFocus} error={error} data='uk' type='text' />
        <button onSubmit={onSubmit}>edit || save</button>
      </Responsive>
    </div>
  )
}

export default IndexDashboard;
