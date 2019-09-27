import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loadPosts } from '../../redux/actions/posts';

import Title from '../common/title/Title';
import Messages from './messages/Messages';
import CustomButton from '../common/button/Custom_Button';

import './indexHome.scss';

const IndexHome = ({ loadPosts }) => {
  const [state, setState] = useState({
    index: 0,
    lastIndex: 4
  });

  const { index, lastIndex } = state;

  
  useEffect(() => {
    loadPosts({ index, lastIndex });
  });

  const onClick = () => {
    setState({ index: index + 4, lastIndex: lastIndex + 4 });
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

IndexHome.propTypes = {
  loadPosts: PropTypes.func.isRequired
}

export default connect(null, { loadPosts })(IndexHome);