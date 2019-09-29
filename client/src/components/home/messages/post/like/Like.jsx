import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './like.scss';

const Like = ({ isUser }) => {
  return (
    <div className='like'>
      10 <i className={classnames('far fa-heart', {'fas' : isUser})}></i>
    </div>
  )
}

Like.propTypes = {
  isUser: PropTypes.bool.isRequired
}

export default Like;