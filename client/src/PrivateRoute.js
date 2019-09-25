import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

// Redux
import { connect } from 'react-redux';

const PrivateRoute = ({component: Component, user: { account }, ...rest}) => (
  <Route 
    {...rest}
    render = {
      props => account.isAuth === true ? 
        ( <Component {...props} /> ) : ( <Redirect to='/sign-in' /> )
    }
  />
);

PrivateRoute.propTypes = {
  user: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(PrivateRoute);