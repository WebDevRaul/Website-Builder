import React, { useState } from 'react';

import validateRegister from '../utils/validator/register';
import Input from '../common/input/Input';
import CustomButton from '../common/button/Custom_Button';
import Responsive from '../common/authWrapper/Responsive';
import Title from '../common/title/Title';
import Logo from '../common/logo/Logo';

import './indexRegister.scss';

const IndexRegister = () => {
  const [state, setState] = useState({ 
    name: '',
    email: '',
    password: '',
    password2: ''
  });

  const [error, setErrors] = useState({
    name: undefined,
    email: undefined,
    password: undefined,
    password2: undefined
  });

  const { name, email, password, password2 } = state;

  const onChange = e => {
    setState({...state , [e.target.name]: e.target.value })
  };

  const onFocus = e => {
    const { email, password } = error;
    if(name || email || password || password2 !== undefined) {
      const field = Object.keys(error).filter(i => { return i === e.target.name })[0];
      setErrors({ ...error, [field]: undefined });
    }
  }

  const onSubmit = e => {
    e.preventDefault();
    const data = { name, email, password, password2 };
    const {errors, isValid} = validateRegister(data);
    if(!isValid) {
      setErrors({ ...error, ...errors });
    } 
    else {
      // submit the form
    }
  }
  return (
    <div className='register'>
      <Responsive>
        <Logo wrapper={true} />
        <Title title='Register' />
        <div className='form mb-4'>
          <form onSubmit={onSubmit} noValidate>
            <Input 
              name='name'
              value={name}
              onChange={onChange}
              onFocus={onFocus}
              error={error.name}
              type='text'
              label='name'
            />
            <Input 
              name='email'
              value={email}
              onChange={onChange}
              onFocus={onFocus}
              error={error.email}
              type='email'
              label='email'
            />
            <Input 
              name='password'
              value={password}
              onChange={onChange}
              onFocus={onFocus}
              error={error.password}
              type='password'
              label='password'
            />
            <Input 
              name='password2'
              value={password2}
              onChange={onChange}
              onFocus={onFocus}
              error={error.password2}
              type='password'
              label='confirm password'
            />
            <div className='submit'>
              <CustomButton  value='Register' type='submit' isClass='inverted' />
            </div>
          </form>
        </div>
      </Responsive>
    </div>
  )
}

export default IndexRegister;