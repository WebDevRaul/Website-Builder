import React from 'react';

import Google from '../../..//assets/svg/Google';
import FaceBook from '../../../assets/svg/FaceBook';
import Github from '../../../assets/svg/Github';
import Twitter from '../../../assets/svg/Twitter';

import './authentication.scss'

const Authentication = () => {
  return (
    <div className='Alternative-login-methods'>
      <div className='google'><Google width='25px' height='25px' /></div>
      <div className='facebook'><FaceBook width='25px' height='25px' /></div>
      <div className='twitter'><Twitter width='25px' height='25px' /></div>
      <div className='github'><Github width='25px' height='25px' /></div>
    </div>
  )
};

export default Authentication;
