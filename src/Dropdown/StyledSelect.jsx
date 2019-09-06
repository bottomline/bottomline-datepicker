import { withStyles, withTheme } from '@glu/theming';
import PropTypes from 'prop-types';
import { CaretDownIcon } from '@glu/icons-react';
import React from 'react';
import styles from './StyledSelect.styles';

const StyledSelect = ({
  classes, children
}) => (
  <div className={classes.wrapper}>
    {children}
    <div className={classes.caret}>
      <CaretDownIcon />
    </div>

  </div>
);

StyledSelect.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  children: PropTypes.node.isRequired
};

export default withTheme(withStyles(styles)(StyledSelect));
