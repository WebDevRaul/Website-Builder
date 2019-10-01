import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { select_account_isAuth } from '../../redux/selectors/account';
import { signIn } from '../../redux/actions/account';
import validateSignIn from '../utils/validator/signIn';

import Input from '../common/input/Input';
import CustomButton from '../common/button/Custom_Button';
import Authentication from './authentication/Authentication';
import Responsive from '../common/responsive/Responsive';
import Logo from '../common/logo/Logo';
import Title from '../common/title/Title';
import Alert from '../common/alert/Alert';


import './indexSignIn.scss';

const IndexSignIn = ({ signIn, isAuth }) => {
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

  const onFocus = e => {
    const { email, password } = error;
    if(email || password !== undefined) {
      const field = Object.keys(error).filter(i => { return i === e.target.name })[0];
      setErrors({ ...error, [field]: undefined });
    }
  }

  const onSubmit = e => {
    e.preventDefault();
    const data = { email, password };
    const { errors, isValid } = validateSignIn(data);

    if(!isValid) {
      setErrors({ ...error, ...errors });
    } 
    else {
      signIn(data)
    }
  }

  // Redirect on Dashboard
  if(isAuth) return <Redirect to='/dashboard' />;

  return (
    <div className='sign-in'>
      <Responsive isClass='col-md-10 col m-auto'>
        <Alert text='You have successfully registered!' />
        <Logo wrapper={true} />
        <Title title='Sign In' />
        <div className='form'>
          <form onSubmit={onSubmit} noValidate>
            <Input 
              name='email'
              value={email}
              onChange={onChange}
              onFocus={onFocus}
              type='email'
              label='email'
              error={error.email}
            />
            <Input 
              name='password'
              value={password}
              onChange={onChange}
              onFocus={onFocus}
              type='password'
              label='password'
              error={error.password}
            />
            <div className='submit'>
              <CustomButton  value='Sign in' type='submit' isClass='inverted' />
            </div>
            <Authentication />
          </form>
        </div>
      </Responsive>
    </div>
  )
};

IndexSignIn.propTypes = {
  signIn: PropTypes.func.isRequired,
  isAuth: PropTypes.bool.isRequired
};

const mapStateToProps = createStructuredSelector({
  isAuth: select_account_isAuth,
});

export default connect(mapStateToProps, { signIn })(IndexSignIn);