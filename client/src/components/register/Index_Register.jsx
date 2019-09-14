import React, { useState } from 'react';

import Wrapper from '../common/authWrapper/Wrapper';
import Input from '../common/input/Input';
import CustomButton from '../common/button/Custom_Button';

import './indexRegister.scss';

const IndexRegister = () => {
  const [state, setState] = useState({ 
    name: '',
    email: '',
    password: '',
    password2: ''
  });

  const { name, email, password, password2 } = state;

  const onChange = e => {
    setState({...state , [e.target.name]: e.target.value })
  };

  const onSubmit = e => {
    e.preventDefault();
  }
  return (
    <Wrapper name='register' title='Register'>
      <div className='form mb-4'>
        <form onSubmit={onSubmit}>
          <Input 
            name='name'
            value={name}
            onChange={onChange}
            type='text'
            label='name'
          />
          <Input 
            name='email'
            value={email}
            onChange={onChange}
            type='email'
            label='email'
          />
          <Input 
            name='password'
            value={password}
            onChange={onChange}
            type='password'
            label='password'
          />
          <Input 
            name='password'
            value={password}
            onChange={onChange}
            type='password'
            label='confirm password'
          />
          <div className='submit'>
            <CustomButton  value='Register' type='submit' isClass='inverted' />
          </div>
        </form>
      </div>
    </Wrapper>
  )
}

export default IndexRegister;