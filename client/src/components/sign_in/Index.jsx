import React, { useState } from 'react';

import Input from '../common/input/Input';

import './index.scss';

const Index = () => {
  const [state, setState] = useState({ 
    email: '',
    password: ''
  });

  const { email, password } = state;

  const onChange = e => {
    setState({...state , [e.target.name]: e.target.value })
  };

  return (
    <div className='sign-in'>
      <form>
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
      </form>
    </div>
  )
};

export default Index;