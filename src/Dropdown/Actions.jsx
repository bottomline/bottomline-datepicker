import { withStyles, withTheme } from '@glu/theming';
import locale from '@glu/locale';
import React from 'react';
import PropTypes from 'prop-types';
import {
  Button, PRIMARY, SMALL
} from '@glu/buttons-react';
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
    <Button
      variant={PRIMARY}
      type="button"
      data-qa={dataQa ? `${dataQa}-apply-button` : 'apply-button'}
      size={SMALL}
      text={locale.get('apply')}
      onClick={onClickApply}
      disabled={disabled}
      className={applyButtonClasses}
    />
    <button
      type="button"
      data-qa={dataQa ? `${dataQa}-cancel-button` : 'cancel-button'}
      onClick={onClickCancel}
      className={`${classes.cancelButton} ${cancelButtonClasses}`}
    >
      {locale.get('cancel')}
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

export default withTheme(withStyles(styles)(Actions));
