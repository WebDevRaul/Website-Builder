import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const Label = ({ name, value }) => (
  <label className={classnames('form-input-label', { 'shrink': value })} >
    {name}
  </label>
);

Label.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
};

export default Label;