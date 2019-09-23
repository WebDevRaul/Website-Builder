import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { select_posts } from '../../../redux/selectors/posts';

import Responsive from '../../common/authWrapper/Responsive';
import Post from './post/Post';
import Title from '../../common/title/Title';

import './messages.scss';

const logo = require('../../../assets/img/questionMark.jpg');

const Messages = ({ posts }) => {
  return (
    <div className='messages'>
      <Title title='latest posts' />
      <Responsive>
        { posts.map(({ name, posts }) => {
          return posts.map(({ post, post_id }) => <Post key={post_id} name={name} post={post} img={logo} />)
        }) }
      </Responsive>
    </div>
  )
};

Messages.propTypes = {
  posts: PropTypes.array.isRequired
};

const mapStateToProps = createStructuredSelector({
  posts: select_posts
});

export default connect(mapStateToProps, null)(Messages);
