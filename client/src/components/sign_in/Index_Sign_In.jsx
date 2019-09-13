import React, { useState } from 'react';

import Input from '../common/input/Input';

import './index.scss';

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
        <div className='col-4 m-auto'>
          <div>logo</div>
        </div>
      </div>
      <div className='row no-gutters'>
        <div className='col-4 m-auto'>
          <div className='card'>
            <div className="card-header bg-primary text-white">
              <h4 className='mb-0'>
                <i className="fas fa-sign-in-alt"></i> Sign In</h4>
            </div>
            <div className='card-body'>
              <form onSubmit={onSubmit} className='form'>
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
                    <button type='submit' className='btn btn-primary'>submit</button>
              </form>
            </div>
          </div>
      </div>
    </div>
    </div>
  )
};

export default IndexSignIn;