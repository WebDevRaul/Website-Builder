import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loadPosts } from '../../redux/actions/posts';
import { createStructuredSelector } from 'reselect';
import { select_index } from '../../redux/selectors/posts';

import Title from '../common/title/Title';
import Messages from './messages/Messages';
import CustomButton from '../common/button/Custom_Button';

import './indexHome.scss';

const IndexHome = ({ loadPosts, index: { startIndex, endIndex }}) => {

  useEffect(() => {
    if(startIndex === 0) loadPosts({ startIndex, endIndex });
  }, [startIndex, endIndex, loadPosts]);


  const onClick = () => loadPosts({ startIndex: startIndex + 4, endIndex: endIndex + 4 });

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
  loadPosts: PropTypes.func.isRequired,
  index: PropTypes.object.isRequired
};

const mapStateToProps = createStructuredSelector({
  index: select_index
})

export default connect(mapStateToProps, { loadPosts })(IndexHome);