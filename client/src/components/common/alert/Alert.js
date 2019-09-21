import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { alert } from '../../../redux/actions/authentication';
import { createStructuredSelector } from 'reselect';
import { select_account_newUser } from '../../../redux/selectors/account';

import './alert.scss';

const Alert = ({ show, alert }) => {

  useEffect(() => {
    if(show) setTimeout(() => alert(), 3000);
  },[alert, show]);

  if(show) {
  return (
    <div className='alert'>
        You have successfully registered!
    </div>
    )
  } else {
    return null
  }
};

Alert.propTypes = {
  show: PropTypes.bool.isRequired
};

const mapStateToProps = createStructuredSelector({
  show: select_account_newUser
});

export default connect(mapStateToProps, { alert })(Alert);