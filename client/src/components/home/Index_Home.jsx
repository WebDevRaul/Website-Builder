import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loadPosts, loadMorePosts } from '../../redux/actions/posts';
import { createStructuredSelector } from 'reselect';
import { select_index, select_posts_length } from '../../redux/selectors/posts';
import { select_loading } from '../../redux/selectors/loading';

import Title from '../common/title/Title';
import Messages from './messages/Messages';
import CustomButton from '../common/button/Custom_Button';

import './indexHome.scss';

const IndexHome = ({ loadPosts, loadMorePosts, index: { startIndex, endIndex }, isLoading, length }) => {

  useEffect(() => {
    if(length === 0) return loadPosts({ startIndex: 0, endIndex: 4 });
    loadPosts({ startIndex: 0, endIndex: length })
  },[]);


  const onClick = () => { if(!isLoading) loadMorePosts({ startIndex: startIndex + 4, endIndex: endIndex + 4 }) };

  return(
    <div className='home'>
      <div className='row no-gutters'>
        <div className='col'>
          <Title title='Welcome' />
          <Messages />
          <div className='load-more' onClick={onClick}>
            <CustomButton value='Load more' isLoading={isLoading} isClass='inverted'/>
          </div>
        </div>
      </div>
    </div>
  )
};

IndexHome.propTypes = {
  loadPosts: PropTypes.func.isRequired,
  index: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired,
  loadMorePosts: PropTypes.func.isRequired
};

const mapStateToProps = createStructuredSelector({
  index: select_index,
  isLoading: select_loading,
  length: select_posts_length
})

export default connect(mapStateToProps, { loadPosts, loadMorePosts })(IndexHome);