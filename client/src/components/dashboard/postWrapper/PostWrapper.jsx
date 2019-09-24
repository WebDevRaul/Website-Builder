import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { editPost } from '../../../redux/actions/account';
import { createStructuredSelector } from 'reselect';
import { select_user_posts } from '../../../redux/selectors/account';

import RecentPosts from '../recentPosts/RecentPosts';

const PostWrapper = ({ posts, editPost }) => {
  
  const editPostCallback = data => {
    editPost(data)
  }

  return (
    <>
      { posts.map(({ post, id }) => <RecentPosts editPost={editPostCallback} key={id} post={post} id={id} />) }
    </>
  )
}

PostWrapper.propTypes = {
  posts: PropTypes.array.isRequired
}

const mapStateToProps = createStructuredSelector({
  posts: select_user_posts
})


export default connect(mapStateToProps, { editPost })(PostWrapper);
