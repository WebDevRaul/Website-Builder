import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { loadPosts, loadMore } from '../../redux/actions/posts';

import Title from '../common/title/Title';
import Messages from './messages/Messages';
import CustomButton from '../common/button/Custom_Button';

import './indexHome.scss';

const IndexHome = ({ loadPosts, loadMore }) => {
  const [state, setState] = useState({
    index: 0,
    lastIndex: 5
  });

  const { index, lastIndex } = state;

  
  useEffect(() => {
    if(index === 0) loadPosts({ index, lastIndex })
  });

  const onClick = () => {
    setState({ index: index + 5, lastIndex: lastIndex + 5 });
    const data = { index: index + 5, lastIndex: lastIndex + 5 };
    loadMore(data)
  }

  return(
    <div className='home'>
      <div className='row no-gutters'>
        <div className='col'>
          <Title title='Welcome' />
          <Messages />
          <div className='load-more' onClick={onClick}>
            <CustomButton value='Load more' isClass='inverted'/>
          </div>
        </div>
      </div>
    </div>
  )
};

export default connect(null, { loadPosts, loadMore })(IndexHome);