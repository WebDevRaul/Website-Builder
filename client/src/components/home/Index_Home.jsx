import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { loadPosts } from '../../redux/actions/posts';

import Title from '../common/title/Title';
import Messages from './messages/Messages';

import './indexHome.scss';

const IndexHome = ({ loadPosts }) => {

  useEffect(() => {
    loadPosts();
  },[loadPosts])

  return(
    <div className='home'>
      <div className='row no-gutters'>
        <div className='col'>
          <Title title='Welcome' />
          <Messages />
        </div>
      </div>
    </div>
  )
};

export default connect(null, { loadPosts })(IndexHome);