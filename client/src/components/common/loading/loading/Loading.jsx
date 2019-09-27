import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { select_loading } from '../../../../redux/selectors/loading';

import './loading.scss';


const Loading = ({ loading }) => {
  const [width, setWidth] = useState(5);

  useEffect(() => {
    // start loading
    if(loading && width < 80) {
      setTimeout(() => setWidth(width => width + 15), 1000)
    };

    // load 2% if loading is still true & width is over 80%
    if(loading && width >= 80 && width < 95) {
      setTimeout(() => setWidth(width => width + 2), 500)
    }
    // stop loading at 95
    if(loading && width >= 95) {
      setTimeout(() => setWidth(width), 500)
    }

    // load complete
    if(!loading && width !== 5) {
      const load = () => setWidth(100);
      load();
    }
  })

  return (
    <div className='loading'>
      <div className="bar" style={{width: `${width}%`}}></div>
    </div>
  );
};

Loading.propTypes = {
  loading: PropTypes.bool.isRequired
}

const mapStateToProps = createStructuredSelector({
  loading: select_loading
});

export default connect(mapStateToProps, null)(Loading);