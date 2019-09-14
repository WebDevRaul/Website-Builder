import React, { useState } from 'react';

import validateSignIn from '../utils/validator/signIn';
import Input from '../common/input/Input';
import CustomButton from '../common/button/Custom_Button';
import Authentication from './authentication/Authentication';
import Wrapper from '../common/authWrapper/Wrapper';


import './indexSignIn.scss';

const IndexSignIn = () => {
  const [state, setState] = useState({ 
    email: '',
    password: ''
  });
  const [ error, setErrors ] = useState({
    email: undefined,
    password: undefined
  });
  const { email, password } = state;

  const onChange = e => {
    setState({...state , [e.target.name]: e.target.value })
  };

  const onSubmit = e => {
    e.preventDefault();
    const data = { email, password };
    const { errors, isValid } = validateSignIn(data);

    if(!isValid) {
      setErrors({ ...error, ...errors })
    } 
    else {
      // submit the form
    }
  }

  return (
    <Wrapper name='sign-in' title='Sign In'>
      {console.log(error), 'rendered'}
      <div className='form'>
        <form onSubmit={onSubmit} noValidate>
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
          <div className='submit'>
            <CustomButton  value='Sign in' type='submit' isClass='inverted' />
          </div>
          <Authentication />
        </form>
      </div>
    </Wrapper>
  )
};

export default IndexSignIn;