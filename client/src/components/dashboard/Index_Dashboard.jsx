import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Textarea from 'react-textarea-autosize';
import classnames from 'classnames';
import isEmpty from '../utils/isEmpty/isEmpty';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { select_account_userData } from '../../redux/selectors/account';
import validateDashboard from '../utils/validator/dashboard';

import Responsive from '../common/authWrapper/Responsive';
import CustomButton from '../common/button/Custom_Button';
import Credentials from './credentials/Credentials';
import Title from '../common/title/Title';
import Photo from './photo/Photo';

import './indexDashboard.scss';

import logo from '../../assets/img/questionMark.jpg'

const IndexDashboard = ({ user }) => {
  const [state, setState] = useState({
    label: 'enter message',
    error: false
  });
  const [textarea, setTextarea] = useState('');

  const { error, label } = state;
  const { name, email } = user;

  const onFocus = () => {
    if(error) return setState({ error: false, label: 'enter message' })
  };

  const onChange = e => {
    setTextarea(e.target.value)
  };

  const onClick = e => {
    e.preventDefault();
    const { errors, isValid } = validateDashboard(textarea);
    if (!isValid) {
      setState({ error: true, label: errors.text});
    } else {
      console.log(textarea)
    }
  };

  return (
    <div className='dashboard'>
      <Responsive>
        <Title title={name} />
        <Photo photo={logo} />
        <Credentials name='email' data={email} />
        <form className='form-message'>
          <div className={classnames('textarea', {'validate': error})}>
            <Textarea minRows={3} name='textarea' onChange={e => onChange(e)} onFocus={onFocus} />
            <span className={classnames('textarea-label', {'shrink': !isEmpty(textarea)})}>{label}</span>
          </div>
          <div className='submit' onClick={onClick}>
            <CustomButton value='submit' isClass='inverted' />
          </div>
        </form>
      </Responsive>
    </div>
  )
};

IndexDashboard.propTypes = {
  user: PropTypes.object.isRequired
};

const mapStateToProps = createStructuredSelector({
  user: select_account_userData
});

export default connect(mapStateToProps, {})(IndexDashboard);