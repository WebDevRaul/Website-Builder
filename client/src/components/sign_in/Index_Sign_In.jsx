import React, { useState } from 'react';

import Input from '../common/input/Input';
import CustomButton from '../common/button/Custom_Button';
import Google from '../../assets/svg/Google';
import FaceBook from '../../assets/svg/FaceBook';
import Github from '../../assets/svg/Github';
import Twitter from '../../assets/svg/Twitter';
import Logo from '../Logo';


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
        <div className='col-sm-5 col m-auto'>
          <div className='wrapper'>
            <div className='logo-div'>
              <Logo />
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
                  <div className='google'><Google width='25px' height='25px' /></div>
                  <div className='google'><FaceBook width='25px' height='25px' /></div>
                  <div className='google'><Twitter width='25px' height='25px' /></div>
                  <div className='google'><Github width='25px' height='25px' /></div>
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