import React from 'react';
import PropTypes from 'prop-types';

import './credentials.scss';

const Credentials = ({ name, data}) => (
  <div className='credentials'>
    <div className='row no-gutters'>
      <div className='col-3 name'>{name}:</div>
      <div className='col-8 data'>{data}</div>
    </div>
  </div>
);

Credentials.propTypes = {
  name: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired
};

export default Credentials;