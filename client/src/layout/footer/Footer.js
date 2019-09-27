import React from 'react';

import './footer.scss';

const Footer = () => {
  return (
    <div className='footer bg-dark text-white'>
      <div className='row no-gutters'>
        <div className='col-sm-6'>
          <div className='footer-text'>
            <span>Copyright &copy; {new Date().getFullYear()}</span>
          </div>
        </div>
        <div className='col-sm-6 d-flex'>
          <div className='footer-text m-auto'>
            <span>Made by Savin Raul-Calin <i className="far fa-smile-beam"></i></span>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Footer;