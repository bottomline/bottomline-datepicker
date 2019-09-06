import injectSheet from 'react-jss';
import PropTypes from 'prop-types';
import React from 'react';
import AccessibilityText from './AccessibilityText';
import CaretDownIcon from './icons/caret-down.svg';
import CaretUpIcon from './icons/caret-up.svg';
import { stringToDates } from './utils/formatString.js';
import { isValidSelection } from './utils/dateCompare.js';
import styles from './TextInput.styles';

const TextInput = ({
  classes,
  dateMax,
  dateMin,
  error,
  handleApply,
  htmlId,
  inputValue,
  name,
  open,
  placeholder,
  rangeDelimiter,
  selectedEndDate,
  selectedStartDate,
  setHead,
  setInputValue,
  setOpen,
  setSelectedEndDate,
  setSelectedStartDate,
  singleDatePicker
}) => {
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    const [start, end] = stringToDates(event.target.value, rangeDelimiter);

    // Set start first
    if (start.isValid()) {
      if (isValidSelection(start, [dateMin, dateMax])) {
        setHead(start);
        setSelectedStartDate(start);
        // Finish workflow early if only choosing one date
        if (singleDatePicker) {
          setSelectedEndDate(start);
        }
        // Write end date
        if (end.isValid()) {
          if (isValidSelection(end, [dateMin, dateMax])
              && end.valueOf() >= start.valueOf()) {
            setSelectedEndDate(end);
          }
        }
      }
    }
  };

  const handleToggleClick = () => {
    setOpen(!open);
  };

  const handleInputKeyPress = (event) => {
    if (event.key === 'Enter') { // Enter
      if (open) handleApply(selectedStartDate, selectedEndDate);
      else setOpen(true);
    }
  };

  return (
    <>
      <input
        autoComplete="off"
        className={`${classes.input} ${classes.input}`}
        data-qa="text-input"
        error={error}
        id={`${htmlId}-text-input`}
        name={name}
        onChange={handleInputChange}
        onFocus={() => { setOpen(true); }}
        onKeyPress={handleInputKeyPress}
        placeholder={placeholder}
        type="text"
        value={inputValue}
      />
      <button
        data-qa="toggle-button"
        id="toggle"
        className={classes.toggle}
        type="button"
        onClick={handleToggleClick}
      >
        <AccessibilityText>Toggle Dropdown</AccessibilityText>
        <div className={classes.inputIcon}>
          {open
            ? <img src={CaretUpIcon} alt="Toggle Icon" width="16" height="16" />
            : <img src={CaretDownIcon} alt="Toggle Icon" width="16" height="16" />
          }
        </div>
      </button>
    </>
  );
};

TextInput.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  dateMax: PropTypes.string.isRequired,
  dateMin: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired,
  handleApply: PropTypes.func.isRequired,
  htmlId: PropTypes.string.isRequired,
  inputValue: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
  placeholder: PropTypes.string.isRequired,
  rangeDelimiter: PropTypes.string.isRequired,
  selectedEndDate: PropTypes.shape({}),
  selectedStartDate: PropTypes.shape({}),
  setHead: PropTypes.func.isRequired,
  setInputValue: PropTypes.func.isRequired,
  setOpen: PropTypes.func.isRequired,
  setSelectedEndDate: PropTypes.func.isRequired,
  setSelectedStartDate: PropTypes.func.isRequired,
  singleDatePicker: PropTypes.bool.isRequired
};

TextInput.defaultProps = {
  selectedStartDate: undefined,
  selectedEndDate: undefined
};

export default injectSheet(styles)(TextInput);
