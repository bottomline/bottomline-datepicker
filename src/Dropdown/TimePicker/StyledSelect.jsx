import { withStyles, withTheme } from '@glu/theming';
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

export default withTheme(withStyles(styles)(StyledSelect));
