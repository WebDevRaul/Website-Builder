import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loadPosts } from '../../redux/actions/posts';
import { createStructuredSelector } from 'reselect';
import { select_index } from '../../redux/selectors/posts';
import { select_loading } from '../../redux/selectors/loading';

import Title from '../common/title/Title';
import Messages from './messages/Messages';
import CustomButton from '../common/button/Custom_Button';

import './indexHome.scss';

const IndexHome = ({ loadPosts, index: { startIndex, endIndex }, isLoading}) => {

  useEffect(() => {
    loadPosts({ startIndex, endIndex });
  }, []);


  const onClick = () => { if(!isLoading) loadPosts({ startIndex: startIndex + 4, endIndex: endIndex + 4 }) };

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
  isLoading: PropTypes.bool.isRequired
};

const mapStateToProps = createStructuredSelector({
  index: select_index,
  isLoading: select_loading
})

export default connect(mapStateToProps, { loadPosts })(IndexHome);