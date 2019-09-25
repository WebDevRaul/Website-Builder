import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { editPost, deletePost } from '../../../redux/actions/account';
import { createStructuredSelector } from 'reselect';
import { select_user_posts } from '../../../redux/selectors/account';

import RecentPosts from '../recentPosts/RecentPosts';

const PostWrapper = ({ posts, editPost, deletePost }) => {
  
  const editPostCallback = data => {
    editPost(data)
  }

  const deletePostCallback = id => {
    deletePost(id)
  }
  return (
    <>
      { posts.map(({ post, id, position }, index) => (
        <RecentPosts 
          key={index} 
          editPost={editPostCallback} 
          deletePost={deletePostCallback} 
          id={id}
          post={post}
          position={position}
         />
      )) }
    </>
  )
}

PostWrapper.propTypes = {
  posts: PropTypes.array.isRequired,
  editPost: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired
}

const mapStateToProps = createStructuredSelector({
  posts: select_user_posts
})


export default connect(mapStateToProps, { editPost, deletePost })(PostWrapper);
