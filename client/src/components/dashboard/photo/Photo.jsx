import React from 'react';
import PropTypes from 'prop-types';

import './photo.scss';

const Photo = ({ photo }) => (
  <div className='photo'>
    <div className='middle'></div>
    <div className='outer-circle'>
      <div className='inner-circle'>
        <div className='image'>
          <img src={photo} alt='profile portret'/>
        </div>
      </div>
    </div>
  </div>
);

Photo.propTypes = {
  photo: PropTypes.string.isRequired
};

export default Photo;