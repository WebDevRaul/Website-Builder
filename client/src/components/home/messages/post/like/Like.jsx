import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './like.scss';

const Like = ({ isUser, like }) => {
  return (
    <div className='like'>
      {like.length} <i className={classnames('far fa-heart', {'fas' : isUser})}></i>
    </div>
  )
}

Like.propTypes = {
  isUser: PropTypes.bool.isRequired,
  like: PropTypes.array.isRequired
}

export default Like;