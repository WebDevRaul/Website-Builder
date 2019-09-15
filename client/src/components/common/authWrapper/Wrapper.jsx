import React from 'react';
import PropTypes from 'prop-types';

import Logo from '../../Logo';
import Title from '../title/Title';

import './wrapper.scss';

const Wrapper = ({ children, name, title }) => (
  <div className={name}>
    <div className='container'>
      <div className='row no-gutters'>
        <div className='col-sm-12 col-md-10 col m-auto'>
          <div className='wrapper'>
            <div className='logo-div'>
              <Logo />
            </div>
            <Title title={title} />
            {children}
          </div>
        </div>
      </div>
    </div>
  </div>
);

Wrapper.propTypes = {
  children: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default Wrapper;