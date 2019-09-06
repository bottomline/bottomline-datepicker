import { Input } from '@glu/form-components';
import { CaretDownIcon, CaretUpIcon, CalendarIcon } from '@glu/icons-react';
import { AccessibilityText } from '@glu/utilities-react';
import { withStyles, withTheme } from '@glu/theming';
import PropTypes from 'prop-types';
import React from 'react';
import { stringToDates } from './utils/formatString.js';
import { isValidSelection } from './utils/dateCompare.js';
import styles from './TextInput.styles';

const TextInput = ({
  theme,
  classes,
  dateMax,
  dateMin,
  error,
  handleApply,
  htmlId,
  inputValue,
  labelText,
  name,
  open,
  placeholder,
  rangeDelimiter,
  screenReaderLabel,
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
      <Input
        autoComplete="off"
        className={classes.inputWrapper}
        labelText={labelText}
        screenReaderLabel={screenReaderLabel}
        data-qa="text-input"
        onChange={handleInputChange}
        onFocus={() => { setOpen(true); }}
        onKeyPress={handleInputKeyPress}
        type="text"
        value={inputValue}
        placeholder={placeholder}
        id={htmlId}
        name={name}
        error={error}
      />
      <button
        data-qa="toggle-button"
        id="toggle"
        className={`${classes.toggle} ${(!labelText || screenReaderLabel) ? classes.screenReaderLabel : ''}`}
        type="button"
        onClick={handleToggleClick}
      >
        <AccessibilityText>Toggle Dropdown</AccessibilityText>
        {theme.name === 'legacy'
          ? <CalendarIcon className={classes.inputIcon} />
          : (
            open
              ? <CaretUpIcon className={classes.inputIcon} />
              : <CaretDownIcon className={classes.inputIcon} />
          )
          }
      </button>
    </>
  );
};

TextInput.propTypes = {
  theme: PropTypes.shape({}),
  classes: PropTypes.shape({}).isRequired,
  dateMax: PropTypes.string.isRequired,
  dateMin: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired,
  handleApply: PropTypes.func.isRequired,
  htmlId: PropTypes.string.isRequired,
  inputValue: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
  placeholder: PropTypes.string.isRequired,
  rangeDelimiter: PropTypes.string.isRequired,
  screenReaderLabel: PropTypes.bool.isRequired,
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
  theme: { name: 'ashTheme' },
  selectedStartDate: undefined,
  selectedEndDate: undefined
};

export default withTheme(withStyles(styles)(TextInput));
