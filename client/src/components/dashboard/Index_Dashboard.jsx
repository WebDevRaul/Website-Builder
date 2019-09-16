import React, { useState } from 'react';

import Responsive from '../common/authWrapper/Responsive';
import Title from '../common/title/Title';

import './indexDashboard.scss';
import Field from '../common/field/Field';

const IndexDashboard = () => {
  const [error, setErrors] = useState(undefined);

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
        <Field edit={true} name='name' label='name' onFocus={onFocus} error={error} data='Jhon' />
        <div>name</div>
        <div>email</div>
        <div>telephone</div>
        <div>address</div>
        <div>country select</div>
        <button onSubmit={onSubmit}>edit || save</button>
      </Responsive>
    </div>
  )
}

export default IndexDashboard;
