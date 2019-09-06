import injectSheet from 'react-jss';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './StyledSelect.styles.js';

const StyledSelect = ({
  classes, children
}) => (
  <div className={classes.wrapper}>
    {children}
  </div>
);

StyledSelect.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  children: PropTypes.node.isRequired
};

export default injectSheet(styles)(StyledSelect);
