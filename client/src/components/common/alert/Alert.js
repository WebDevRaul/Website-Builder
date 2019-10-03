import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { alert } from '../../../redux/actions/account';
import { createStructuredSelector } from 'reselect';
import { select_account_newUser } from '../../../redux/selectors/account';

import './alert.scss';

const Alert = ({ show, alert, text }) => {

  useEffect(() => {
    if(show) setTimeout(() => alert(), 3000);
  },[alert, show]);

  if(show) {
  return (
    <div className='alert'>
      {text}
    </div>
    )
  } else {
    return null
  }
};

Alert.propTypes = {
  show: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  alert: PropTypes.func.isRequired
};

const mapStateToProps = createStructuredSelector({
  show: select_account_newUser
});

export default connect(mapStateToProps, { alert })(Alert);