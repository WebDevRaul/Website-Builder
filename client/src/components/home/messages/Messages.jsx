import React from 'react';
import Responsive from '../../common/authWrapper/Responsive';

import './messages.scss';
import Post from './post/Post';

const logo = require('../../../assets/img/questionMark.jpg');
const name = 'Jhon Snow';
const post = 'Lorem ipsum dolor sit amet consectetur'

const Messages = () => {
  return (
    <div className='messages'>
      <Responsive>
        <Post img={logo} name={name} post={post} />
        <Post img={logo} name={name} post={post} />
        <Post img={logo} name={name} post={post} />
      </Responsive>
    </div>
  )
}

export default Messages
