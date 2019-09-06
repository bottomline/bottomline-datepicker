import { withStyles, withTheme } from '@glu/theming';
import PropTypes from 'prop-types';
import { AccessibilityText } from '@glu/utilities-react';
import React, { useState } from 'react';
import moment from 'moment';
import { meridiemTo24Hour, meridiemLabelFromHour, twentyFourToMeridiem } from '../../utils/formatString.js';
import StyledSelect from './StyledSelect';
import styles from './TimePicker.styles';

const TimePicker = ({
  classes,
  label,
  timePickerSeconds,
  timePicker24Hour,
  timePickerIncrement,
  disabled,
  dataQa,
  dateTime,
  hour,
  minute,
  second,
  setDateTime
}) => {
  const thisHour = timePicker24Hour ? hour : twentyFourToMeridiem(hour);

  const [meridiem, setmeridiem] = useState(meridiemLabelFromHour(hour));

  const hourOptions = Array(12).fill(0).map((el, i) => i + 1);

  const hourOptions24 = Array(24)
    .fill(0)
    .map((el, i) => ({ value: i, label: i > 9 ? i : `0${i}` }));

  const minutes = Array(60)
    .fill(0)
    .map((el, i) => ({ value: i, label: i > 9 ? i : `0${i}` }))
    .filter((el, i) => i % timePickerIncrement === 0);

  const seconds = Array(60)
    .fill(0)
    .map((el, i) => ({ value: i, label: i > 9 ? i : `0${i}` }));

  const setTime = (hr, min, sec, mer) => {
    const adjustedHour = timePicker24Hour ? hr : meridiemTo24Hour(hr, mer);
    setDateTime(moment(dateTime)
      .set('hour', adjustedHour)
      .set('minute', min)
      .set('second', sec));
  };

  const handleHourChange = (event) => {
    setTime(parseInt(event.target.value, 10), minute, second, meridiem);
  };

  const handleMinuteChange = (event) => {
    setTime(thisHour, parseInt(event.target.value, 10), second, meridiem);
  };

  const handleSecondChange = (event) => {
    setTime(thisHour, minute, parseInt(event.target.value, 10), meridiem);
  };

  const handlemeridiemChange = (event) => {
    setmeridiem(event.target.value);
    setTime(thisHour, minute, second, event.target.value);
  };

  return (
    <div className={classes.timepicker} data-qa={dataQa}>

      <div className={classes.timepickerLabel}>{label}</div>

      <label htmlFor={`${dataQa}-hour-select`}>
        <AccessibilityText>{`${label} Hours`}</AccessibilityText>
        <StyledSelect>
          <select
            value={thisHour}
            disabled={disabled}
            onChange={handleHourChange}
            id={`${dataQa}-hour-select`}
            data-qa="hour-select"
          >
            {timePicker24Hour
              ? hourOptions24.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))
              : hourOptions.map((opt) => (
                <option key={opt} value={opt}>{opt}</option>
              ))
            }
          </select>
        </StyledSelect>
      </label>

      <label htmlFor={`${dataQa}-minute-select`}>
        <AccessibilityText>{`${label} Minutes`}</AccessibilityText>
        <StyledSelect>
          <select
            value={minute}
            disabled={disabled}
            onChange={handleMinuteChange}
            data-qa="minute-select"
            id={`${dataQa}-minute-select`}
          >
            {minutes.map((min) => (
              <option
                key={min.value}
                value={min.value}
              >
                {min.label}
              </option>
            ))}
          </select>
        </StyledSelect>
      </label>

      {timePickerSeconds && (
        <label htmlFor={`${dataQa}-second-select`}>
          <AccessibilityText>{`${label} Seconds`}</AccessibilityText>
          <StyledSelect>
            <select
              value={second}
              disabled={disabled}
              onChange={handleSecondChange}
              data-qa="second-select"
              id={`${dataQa}-second-select`}
            >
              {seconds.map((sec) => (
                <option
                  key={sec.value}
                  value={sec.value}
                >
                  {sec.label}
                </option>
              ))}
            </select>
          </StyledSelect>
        </label>
      )}
      {!timePicker24Hour && (
        <label htmlFor={`${dataQa}-meridiem-select`}>
          <AccessibilityText>{`${label} meridiem`}</AccessibilityText>
          <StyledSelect>
            <select
              value={meridiem}
              disabled={disabled}
              onChange={handlemeridiemChange}
              data-qa="meridiem-select"
              id={`${dataQa}-meridiem-select`}
            >
              <option value="am">am</option>
              <option value="pm">pm</option>
            </select>
          </StyledSelect>
        </label>
      )}
    </div>
  );
};

TimePicker.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  label: PropTypes.string,
  timePickerSeconds: PropTypes.bool.isRequired,
  timePicker24Hour: PropTypes.bool.isRequired,
  timePickerIncrement: PropTypes.number.isRequired,
  disabled: PropTypes.bool,
  dataQa: PropTypes.string,
  dateTime: PropTypes.shape({}),
  setDateTime: PropTypes.func.isRequired,
  hour: PropTypes.number,
  minute: PropTypes.number,
  second: PropTypes.number
};

TimePicker.defaultProps = {
  label: 'Time',
  disabled: false,
  dataQa: 'timepicker',
  dateTime: undefined,
  hour: 12,
  minute: 0,
  second: 0
};


export default withTheme(withStyles(styles)(TimePicker));
