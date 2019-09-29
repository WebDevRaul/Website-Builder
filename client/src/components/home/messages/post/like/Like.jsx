import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { select_email_user } from '../../../../../redux/selectors/account';

import './like.scss';

const Like = ({ email, like }) => {

  const contains = like.includes(email);
  
  const onClick = () => {

  }

  return (
    <div className='like'>
      {like.length} <i onClick={onClick} className={classnames('far fa-heart', {'fas' : contains})}></i>
    </div>
  )
}

Like.propTypes = {
  email: PropTypes.string,
  like: PropTypes.array.isRequired
};

const mapStateToProps = createStructuredSelector({
  email: select_email_user
})

export default connect(mapStateToProps, {  })(Like);