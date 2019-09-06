import injectSheet from 'react-jss';
import PropTypes from 'prop-types';
import React from 'react';
import moment from 'moment';
import styles from './RangeSelect.styles';

const RangeSelect = ({
  rangePresets,
  classes,
  onApply,
  setSelectedEndDate,
  setSelectedStartDate,
  alwaysShowCalendars,
  showCustomRangeLabel,
  editing,
  setEditing,
  setHead
}) => {
  const presets = Object.keys(rangePresets).map(key => ({
    name: key,
    range: [
      moment(rangePresets[key][0]),
      moment(rangePresets[key][1])
    ]
  }));

  const handlePresetClick = (range) => {
    const start = range[0]
      .set('hour', 12)
      .set('minute', 0)
      .set('second', 0);
    const end = range[1]
      .set('hour', 12)
      .set('minute', 0)
      .set('second', 0);
    setSelectedStartDate(start);
    setSelectedEndDate(end);
    if (alwaysShowCalendars) {
      setHead(start);
      setEditing(true);
    } else {
      onApply(start, end);
    }
  };

  const handleCustomClick = () => {
    setEditing(true);
  };

  return (
    <div data-qa="range-select" className={`${classes.root} ${editing ? classes.editing : ''}`}>
      {presets.map(preset => (
        <button
          key={preset.name}
          data-qa={`range-option-${[preset.name]}`}
          className={classes.option}
          onClick={() => {
            handlePresetClick(preset.range);
          }}
          type="submit"
        >
          {preset.name}
        </button>
      ))}
      {showCustomRangeLabel && (
        <button
          key="custom"
          data-qa="range-option-custom"
          className={classes.option}
          onClick={handleCustomClick}
          type="submit"
        >
          Custom Range
        </button>
      )}
    </div>
  );
};

RangeSelect.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  onApply: PropTypes.func.isRequired,
  rangePresets: PropTypes.shape({}).isRequired,
  setSelectedEndDate: PropTypes.func.isRequired,
  setSelectedStartDate: PropTypes.func.isRequired,
  editing: PropTypes.bool.isRequired,
  setEditing: PropTypes.func.isRequired,
  setHead: PropTypes.func.isRequired,
  alwaysShowCalendars: PropTypes.bool.isRequired,
  showCustomRangeLabel: PropTypes.bool.isRequired
};

export default injectSheet(styles)(RangeSelect);
