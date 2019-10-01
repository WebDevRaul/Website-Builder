import React from 'react';
import PropTypes from 'prop-types';

import Like from './like/Like';

import './post.scss'

const Post = ({ img, id, post, name, like }) => {
  return (
    <div className='post'>
      <div className='row no-gutters'>
        <div className='col-4'>
          <div className='header'>
            <img src={img} alt='portrait' />
            <div className='name'>{name}</div>
          </div>
        </div>
        <div className='col-8'>
          <div className='body'>
            <p className='mb-0 p-2'>{post}</p>
            <div className='like'>
              <Like like={like} id={id} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Post.propTypes = {
  img: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  post: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  like: PropTypes.array.isRequired
}

export default Post;