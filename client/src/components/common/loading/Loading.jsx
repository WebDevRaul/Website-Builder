import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { select_loading } from '../../../redux/selectors/loading';

import './loading.scss';

const Loading = ({ loading }) => (
  <div className='loading'></div>
);

Loading.propTypes = {
  loading: PropTypes.bool.isRequired
};

const mapStateToProps = createStructuredSelector({
  loading: select_loading
});

export default connect(mapStateToProps, null)(Loading);