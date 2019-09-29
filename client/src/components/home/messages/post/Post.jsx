import React from 'react';

import Like from './like/Like';

import './post.scss'

const Post = ({ img, post, name }) => {
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
              <Like />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post;