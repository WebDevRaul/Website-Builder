import React, { useState } from 'react';

import Input from '../common/input/Input';
import CustomButton from '../common/button/Custom_Button';
import Authentication from './authentication/Authentication';
import Logo from '../Logo';


import './indexSignIn.scss';
import Title from '../common/title/Title';

const IndexSignIn = () => {
  const [state, setState] = useState({ 
    email: '',
    password: ''
  });

  const { email, password } = state;

  const onChange = e => {
    setState({...state , [e.target.name]: e.target.value })
  };

  const onSubmit = e => {
    e.preventDefault();

    console.log(email, password)
  }

  return (
    <div className='sign-in'>
      <div className='row no-gutters'>
        <div className='col-sm-5 col m-auto'>
          <div className='wrapper'>
            <div className='logo-div'>
              <Logo />
            </div>
            <Title>Sign In</Title>
            <div className='form'>
              <form onSubmit={onSubmit}>
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
          </div>
        </div>
      </div>
    </div>
  )
};

export default IndexSignIn;