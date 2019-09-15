import React, { useState } from 'react';
import classnames from 'classnames';
import { Link } from 'react-router-dom';

import './navbar.scss';

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const guest  = false;

  const toggle = () => {
    setOpen(isOpen => !isOpen);
  };

  const onClick = () => {
    if (isOpen) {
      setOpen(isOpen => !isOpen);
      console.log('tsst')
    }
  }

  const authLinks = (
    <li><Link to='/dashboard' onClick={onClick}>Dashboard</Link></li>
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
        <ul className={classnames('nav-links', {[guest ? 'show-nav-1' : 'show-nav-2'] : isOpen})} >
          <li ><Link to='/' onClick={onClick}>Home</Link></li>
          {guest ? authLinks : guestLinks}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;