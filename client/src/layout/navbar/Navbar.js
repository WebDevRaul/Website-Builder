import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../redux/actions/account';
import { createStructuredSelector } from 'reselect';
import { select_account_isAuth } from '../../redux/selectors/account';

import './navbar.scss';

const Navbar = ({ isAuth, signOut }) => {
  const [isOpen, setOpen] = useState(false);

  const toggle = () => {
    setOpen(isOpen => !isOpen);
  };

  const onClick = () => {
    if (isOpen) {
      setOpen(isOpen => !isOpen);
    }
  }

  const onSignOut = () => {
    signOut()
  }

  const authLinks = (
    <>
      <li><Link to='/dashboard' onClick={onClick}>Dashboard</Link></li>
      <li><span className='sign-out' onClick={onSignOut}>Sign out</span></li>
    </>
  );
  
  const guestLinks = (
    <>
      <li ><Link to='/sign-in' onClick={onClick}>Sign In</Link></li>
      <li ><Link to='register' onClick={onClick}>Register</Link></li>
    </>
  );


  return (
    <nav className='navbar'>
      <div className='nav-wrapper'>
        <div className='nav-header'>
          <div>logo</div>
          <button type='button' className='logo-btn' onClick={toggle}>
            <i></i>
            <i></i>
            <i></i>
          </button>
        </div>
        <ul className={classnames('nav-links', {[isAuth ? 'show-nav-1' : 'show-nav-2'] : isOpen})} >
          <li ><Link to='/' onClick={onClick}>Home</Link></li>
          {isAuth ? authLinks : guestLinks}
        </ul>
      </div>
    </nav>
  )
};

Navbar.propTypes = {
  isAuth: PropTypes.bool.isRequired,
  signOut: PropTypes.func.isRequired
};

const mapStateToProps = createStructuredSelector({
  isAuth: select_account_isAuth
});

export default connect(mapStateToProps, { signOut })(Navbar);