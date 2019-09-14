import React, { useState } from 'react';
import classnames from 'classnames';
import { Link } from 'react-router-dom';

import './navbar.scss';

const authLinks = (
  <li><Link to='/dashboard'>Dashboard</Link></li>
);

const guestLinks = (
  <>
    <li ><Link to='/sign-in'>Sign In</Link></li>
    <li ><Link to='register'>Register</Link></li>
  </>
);

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const guest  = false;

  const toggle = () => {
    setOpen(isOpen => !isOpen);
  };


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
        <ul className={classnames('nav-links', {[guest ? 'show-nav-1' : 'show-nav-2'] : !isOpen})} >
          <li ><Link to='/'>Home</Link></li>
          {guest ? authLinks : guestLinks}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;