import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loadPosts, loadMorePosts, showLessPosts } from '../../redux/actions/posts';
import { createStructuredSelector } from 'reselect';
import { select_index, select_posts_length, select_show_less } from '../../redux/selectors/posts';
import { select_loading } from '../../redux/selectors/loading';

import Title from '../common/title/Title';
import Messages from './messages/Messages';
import CustomButton from '../common/button/Custom_Button';

import './indexHome.scss';

const IndexHome = ({ 
  loadPosts, loadMorePosts, index: { startIndex, endIndex }, isLoading, length, showLessPosts, showLess
}) => {

  useEffect(() => {
    if(length === 0) return loadPosts({ startIndex: 0, endIndex: 4 });
    loadPosts({ startIndex: 0, endIndex: length })
  },[]);


  const onLoadMore = () => { 
    // dont load more until finish last query
    if(!isLoading) {
      // toggle showLessPosts
      if(showLess) return showLessPosts(false);
      // fetch more posts
      loadMorePosts({ startIndex: startIndex + 4, endIndex: endIndex + 4 }) 
    }
  };

  const onShowLess = () => showLessPosts(true);

  return(
    <div className='home'>
      <div className='row no-gutters'>
        <div className='col'>
          <Title title='Welcome' />
          <Messages />
          <div className='btn-wrapper'>
            <div className='load-more' onClick={onLoadMore}>
              <CustomButton value='Load more' isLoading={isLoading} isClass='inverted'/>
            </div>
            { length > 4 && !showLess
              ? <div className='show-less' onClick={onShowLess}>
                  <CustomButton value='Show less' isLoading={isLoading} isClass='inverted' />
                </div>
              : null 
            }
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
  loadMorePosts: PropTypes.func.isRequired,
  showLessPosts: PropTypes.func.isRequired,
  length: PropTypes.number.isRequired,
  showLess: PropTypes.bool.isRequired
};

const mapStateToProps = createStructuredSelector({
  index: select_index,
  isLoading: select_loading,
  length: select_posts_length,
  showLess: select_show_less
})

export default connect(mapStateToProps, { loadPosts, loadMorePosts, showLessPosts })(IndexHome);