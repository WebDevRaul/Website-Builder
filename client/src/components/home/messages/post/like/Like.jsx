import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { connect } from 'react-redux';
import { likePost, unlikePost } from '../../../../../redux/actions/posts';
import { createStructuredSelector } from 'reselect';
import { select_user_id } from '../../../../../redux/selectors/account';

import './like.scss';

const Like = ({ user_id, like, id, likePost, unlikePost }) => {

  const contains = Object.values(like).includes(user_id)
  
  const onClick = () => {
    const data = { id, user_id };
    if(!!!user_id) return null;
    if(!contains) return likePost(data);
    unlikePost(data);
  }

  return (
    <div className='like'>
      {like.length} <i onClick={onClick} className={classnames('far fa-heart', {'fas' : contains})}></i>
    </div>
  )
}

Like.propTypes = {
  user_id: PropTypes.string,
  like: PropTypes.array.isRequired,
  id: PropTypes.string.isRequired,
  likePost: PropTypes.func.isRequired,
  unlikePost: PropTypes.func.isRequired
};

const mapStateToProps = createStructuredSelector({
  user_id: select_user_id
})

export default connect(mapStateToProps, { likePost, unlikePost })(Like);