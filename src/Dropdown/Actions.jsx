import injectSheet from 'react-jss';
import React from 'react';
import PropTypes from 'prop-types';
import localeGet from '../utils/locale.js';
import styles from './Actions.styles';

const Actions = ({
  classes,
  onClickApply,
  onClickCancel,
  disabled,
  dataQa,
  buttonClasses,
  applyButtonClasses,
  cancelButtonClasses
}) => (
  <div className={`${classes.actions} ${buttonClasses}`}>
    <button
      className={`${classes.applyButton}  ${applyButtonClasses}`}
      data-qa={dataQa ? `${dataQa}-apply-button` : 'apply-button'}
      disabled={disabled}
      onClick={onClickApply}
      type="button"
    >
      {localeGet('apply')}
    </button>
    <button
      type="button"
      data-qa={dataQa ? `${dataQa}-cancel-button` : 'cancel-button'}
      onClick={onClickCancel}
      className={`${classes.cancelButton} ${cancelButtonClasses}`}
    >
      {localeGet('cancel')}
    </button>
  </div>
);

Actions.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  onClickApply: PropTypes.func.isRequired,
  onClickCancel: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  dataQa: PropTypes.string,
  buttonClasses: PropTypes.string.isRequired,
  applyButtonClasses: PropTypes.string.isRequired,
  cancelButtonClasses: PropTypes.string.isRequired,
  options: PropTypes.shape({})
};

Actions.defaultProps = {
  disabled: false,
  dataQa: '',
  options: {}
};

export default injectSheet(styles)(Actions);
