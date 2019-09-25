import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { select_posts } from '../../../redux/selectors/posts';

import Responsive from '../../common/responsive/Responsive';
import Post from './post/Post';
import Title from '../../common/title/Title';

import './messages.scss';

const logo = require('../../../assets/img/questionMark.jpg');

const Messages = ({ posts }) => {
  return (
    <div className='messages'>
      <Title title='latest posts' />
      <Responsive isClass='col-md-10 col m-auto'>
        {posts.map(({ name, email, id, post }) => <Post key={id} name={name} post={post} img={logo} />)}
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
