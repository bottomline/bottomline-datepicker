import injectSheet from 'react-jss';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Position from './Position';
import RangeSelect from './RangeSelect';
import DateSelect from './DateSelect';
import styles from './Dropdown.styles';

const Dropdown = ({
  classes,
  onApply,
  onClose,
  selectedStartDate,
  selectedEndDate,
  setSelectedStartDate,
  setSelectedEndDate,
  alwaysShowCalendars,
  showCustomRangeLabel,
  ranges,
  head,
  setHead,
  ...rest
}) => {
  const [editing, setEditing] = useState(false);

  return (
    <Position {...rest}>
      <div className={ranges ? classes.rangesLayout : classes.layout}>
        {ranges && (
          <div className={`${classes.rangeSelect} ${editing ? classes.condensed : ''}`}>
            <RangeSelect
              {...{
                onApply,
                setSelectedStartDate,
                setSelectedEndDate,
                alwaysShowCalendars,
                showCustomRangeLabel,
                editing,
                setEditing,
                setHead,
                ...rest
              }}
            />
          </div>
        )}
        <div className={`${ranges ? classes.offset : ''} ${editing ? classes.visible : ''}`}>
          {(!ranges || editing) && (
            <DateSelect
              {...{
                onApply,
                onClose,
                selectedStartDate,
                selectedEndDate,
                setSelectedStartDate,
                setSelectedEndDate,
                head,
                setHead,
                ...rest
              }}
            />
          )}
        </div>
      </div>
    </Position>
  );
};

Dropdown.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  onApply: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  selectedStartDate: PropTypes.shape({}),
  selectedEndDate: PropTypes.shape({}),
  setSelectedStartDate: PropTypes.func.isRequired,
  setSelectedEndDate: PropTypes.func.isRequired,
  alwaysShowCalendars: PropTypes.bool.isRequired,
  showCustomRangeLabel: PropTypes.bool.isRequired,
  ranges: PropTypes.bool.isRequired,
  head: PropTypes.shape({}).isRequired,
  setHead: PropTypes.func.isRequired
};

Dropdown.defaultProps = {
  selectedStartDate: undefined,
  selectedEndDate: undefined
};

export default injectSheet(styles)(Dropdown);
