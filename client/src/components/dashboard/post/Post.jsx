import React from 'react';
import PropTypes from 'prop-types';

import './post.scss';

const Post = ({ post }) => (
  <div className='post'>
    <p className='mb-0 p-2'>{post}</p>
  </div>
);

Post.propTypes = {
  post: PropTypes.string.isRequired
}

export default Post;