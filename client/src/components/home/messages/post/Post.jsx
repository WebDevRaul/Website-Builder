import React from 'react';

import './post.scss'

const Post = ({ img, post, name }) => {
  return (
    <div className='post'>
      <div className='img'>
        <img src={img} alt='portrait' height='50px' />
      </div>
      <div className='body'>
        <div className='name'>{name}</div>
        <div className='text'>{post}</div>
      </div>
    </div>
  )
}

export default Post;