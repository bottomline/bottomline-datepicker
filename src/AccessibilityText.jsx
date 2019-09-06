import injectSheet from 'react-jss';
import PropTypes from 'prop-types';
import React from 'react';

const styles = {
  root: {
    position: 'absolute',
    width: 1,
    height: 1,
    margin: -1,
    padding: 0,
    overflow: 'hidden',
    clip: 'rect(0, 0, 0, 0)',
    border: 0
  }
};

const AccessibilityText = ({ classes, children, ...rest }) => (
  <p className={classes.root} {...rest}>{children}</p>
);

AccessibilityText.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  children: PropTypes.node.isRequired
};

export const AccessibilityTextBase = AccessibilityText;
export default injectSheet(styles)(AccessibilityText);
