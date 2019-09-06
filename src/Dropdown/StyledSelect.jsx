import injectSheet from 'react-jss';
import PropTypes from 'prop-types';
import React from 'react';
import CaretDownIcon from '../icons/caret-down.svg';
import styles from './StyledSelect.styles';

const StyledSelect = ({
  classes, children
}) => (
  <div className={classes.wrapper}>
    {children}
    <div className={classes.caret}>
      <img src={CaretDownIcon} alt="Down" width="16" height="16" />
    </div>
  </div>
);

StyledSelect.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  children: PropTypes.node.isRequired
};

export default injectSheet(styles)(StyledSelect);
