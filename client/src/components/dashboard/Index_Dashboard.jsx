import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Textarea from 'react-textarea-autosize';
import classnames from 'classnames';
import isEmpty from '../utils/isEmpty/isEmpty';
import validateDashboard from '../utils/validator/dashboard';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { savePost } from '../../redux/actions/account';
import { createStructuredSelector } from 'reselect';
import { select_account_user } from '../../redux/selectors/account';

import Responsive from '../common/responsive/Responsive';
import CustomButton from '../common/button/Custom_Button';
import Credentials from './credentials/Credentials';
import Title from '../common/title/Title';
import RecentPosts from './recentPosts/RecentPosts';
import Photo from './photo/Photo';

import './indexDashboard.scss';

import logo from '../../assets/img/questionMark.jpg'

const IndexDashboard = ({ user, savePost, history }) => {
  const [state, setState] = useState({
    label: 'enter message',
    error: false
  });
  const [textarea, setTextarea] = useState('');

  const { error, label } = state;
  const { name, email, posts } = user;

  const onFocus = () => {
    if(error) return setState({ error: false, label: 'enter message' })
  };

  const onChange = e => {
    setTextarea(e.target.value)
  };

  const onClick = e => {
    e.preventDefault();
    const { errors, isValid } = validateDashboard(textarea);
    if (!isValid) {
      setState({ error: true, label: errors.text});
    } else {
      const data = { post_id: "3a", post: textarea }
      savePost(data, history)
    }
  };

  return (
    <div className='dashboard'>
      <div className='row no-gutters'>
        <div className='col-12 col-md-6 user-info'>
          <Responsive isClass='col'>
            <Title title={name} />
            <Photo photo={logo} />
            <Credentials name='email' data={email} />
            <form className='form-message'>
              <div className={classnames('textarea', {'validate': error})}>
                <Textarea minRows={3} name='textarea' onChange={e => onChange(e)} onFocus={onFocus} />
                <span className={classnames('textarea-label', {'shrink': !isEmpty(textarea)})}>{label}</span>
              </div>
              <div className='submit' onClick={onClick}>
                <CustomButton value='submit' isClass='inverted' />
              </div>
            </form>
          </Responsive>
        </div>
        <div className='col-12 col-md-6 recent-posts'>
          <Responsive isClass='col'>
            <Title title='Recent Posts' />
            { posts.map(({ post, post_id }) => <RecentPosts key={post_id} post={post} id={post_id} />) }
          </Responsive>
        </div>
      </div>
    </div>
  )
};

IndexDashboard.propTypes = {
  user: PropTypes.object.isRequired,
  savePost: PropTypes.func.isRequired
};

const mapStateToProps = createStructuredSelector({
  user: select_account_user
});

export default connect(mapStateToProps, { savePost })(withRouter(IndexDashboard));