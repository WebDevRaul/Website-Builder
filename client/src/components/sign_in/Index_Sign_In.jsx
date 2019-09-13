import React, { useState } from 'react';

import Input from '../common/input/Input';
import CustomButton from '../common/button/Custom_Button';

import './indexSignIn.scss';

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
        <div className='col-5 m-auto'>
          <div className='wrapper'>
            <div className='logo'>
              <span>logo</span>
            </div>
            <div className='title'>
              <h1>
                <span>Sign In</span>
              </h1>
            </div>
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
                <div className='extern-signIn-form'>
                  <div>1</div>
                  <div>2</div>
                  <div>3</div>
                  <div>4</div>
                </div>
              </form>
            </div>
          </div>
      </div>
    </div>
    </div>
  )
};

export default IndexSignIn;