import { withStyles, withTheme } from '@glu/theming';
import moment from 'moment';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Dropdown from './Dropdown';
import TextInput from './TextInput';
import ClickOutside from './ClickOutside';
import { datesToString } from './utils/formatString.js';
import styles from './DatePicker.styles';
import './themeDefaults';

const DatePicker = ({
  classes,
  className,
  dataQa,
  dateEnd,
  dateStart,
  htmlId,
  name,
  onChangeCallback,
  screenReaderLabel,
  ...rest
}) => {
  const [open, setOpen] = useState(false);
  const [selectedStartDate, setSelectedStartDate] = useState(dateStart
    ? moment(dateStart)
    : undefined);
  const [selectedEndDate, setSelectedEndDate] = useState(dateEnd
    ? moment(dateEnd)
    : undefined);
  const [confirmedStartDate, setConfirmedStartDate] = useState(selectedStartDate);
  const [confirmedEndDate, setConfirmedEndDate] = useState(selectedEndDate);
  const [head, setHead] = useState(selectedStartDate ? moment(selectedStartDate) : moment());
  const [inputValue, setInputValue] = useState(
    datesToString(selectedStartDate, selectedEndDate, rest)
  );

  const handleApply = (start, end) => {
    setOpen(false);
    setConfirmedStartDate(start);
    setConfirmedEndDate(end);
    onChangeCallback({
      value: {
        date: moment(start),
        dateEnd: moment(end)
      }
    });
    setInputValue(datesToString(start, end, rest));
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedStartDate(confirmedStartDate);
    setSelectedEndDate(confirmedEndDate);
  };

  return (
    <ClickOutside onClickOutside={handleClose}>
      <div data-qa={dataQa ? `${dataQa}` : `datepicker-${htmlId}`} className={`${classes.datepicker} ${className}`}>
        <TextInput {...{
          handleApply,
          handleClose,
          htmlId,
          inputValue,
          name,
          open,
          screenReaderLabel,
          selectedEndDate,
          selectedStartDate,
          setHead,
          setInputValue,
          setOpen,
          setSelectedEndDate,
          setSelectedStartDate,
          ...rest
        }}
        />
        {open && (

        <Dropdown {...{
          head,
          onApply: handleApply,
          onClose: handleClose,
          screenReaderLabel,
          selectedEndDate,
          selectedStartDate,
          setHead,
          setSelectedEndDate,
          setSelectedStartDate,
          ...rest
        }}
        />
        )}
      </div>
    </ClickOutside>
  );
};

DatePicker.propTypes = {
  /** Toggle whether to always show calendar when a range is selected. */
  alwaysShowCalendars: PropTypes.bool,

  /** Custom classes for the apply button */
  applyButtonClasses: PropTypes.string,

  /** Hide the apply and cancel buttons, and automatically apply a new selection */
  autoApply: PropTypes.bool,

  /** Custom classes for container that wraps action buttons */
  buttonClasses: PropTypes.string,

  /** Custom classes for the cancel button */
  cancelButtonClasses: PropTypes.string,

  /** Classes provided by the theme */
  classes: PropTypes.shape({}).isRequired,

  /** Class passed to parent element for extra decoration. */
  className: PropTypes.string,

  /** String given to parent elements data-qa html attribute for easy targeting */
  dataQa: PropTypes.string,

  /** The end of initial selected date range. Must be ISO format 'YYYY-MM-DD' */
  dateEnd: PropTypes.string,

  /** The latest date a user may select. Must be ISO format 'YYYY-MM-DD' */
  dateMax: PropTypes.string,

  /** The earliest date a user may select. Must be ISO format 'YYYY-MM-DD' */
  dateMin: PropTypes.string,

  /** The start of initial selected date range. Must be ISO format 'YYYY-MM-DD' */
  dateStart: PropTypes.string,

  /** Error message. will add styles to input if present. */
  error: PropTypes.string,

  /** Format to display date string in input */
  format: PropTypes.string,

  /** Function which is passed each visible day and returns string of classNames. */
  getClassNamesForDate: PropTypes.func,

  /** string assigned to HTML id attribute of component */
  htmlId: PropTypes.string,

  /* Function which is passed each visible date and returns boolean for if it is selectable. */
  isSelectableDate: PropTypes.func,

  /** Display weeks as ISO week numbers; weekNumbers must also be true. */
  isoWeekNumbers: PropTypes.bool,

  /** String used for label value */
  labelText: PropTypes.string,

  /** Toggle to control calendar navigation. Defaults to true. Can be set to
   * false to navigate calendars independently. */
  linkedCalendars: PropTypes.bool,

  /** Show select dropdown for the Month in the calendar header */
  monthDropdown: PropTypes.bool,

  /** string passed to html name attribute of text input */
  name: PropTypes.string,

  /** The number of calendars to display side by side. */
  numberOfMonths: PropTypes.number,

  /** Function that triggers once a date is selected or changed */
  onChangeCallback: PropTypes.func,

  /** String passed as html placeholder text for input. */
  placeholder: PropTypes.string,

  /**
  * Whether the picker appears below (default) or above the HTML element it's attached to.
  * ("down"/"up") */
  positionY: PropTypes.string,

  /**
   * Whether the picker appears aligned to the left, to the right, or centered
   * ("left"/"right"/"center") */
  positionX: PropTypes.string,

  /** Delimiter used to separate date string in text input */
  rangeDelimiter: PropTypes.string,

  /** Object with list of predefined ranges */
  rangePresets: PropTypes.shape({}),

  /** Toggle range preset feature */
  ranges: PropTypes.bool,

  /** Toggle to hide the label for all but screenreaders */
  screenReaderLabel: PropTypes.bool,

  /** Show "custom range" option to display calendar */
  showCustomRangeLabel: PropTypes.bool,

  /** Interacting with calendar sets a single date. */
  singleDatePicker: PropTypes.bool,

  /** Show timePicker */
  timePicker: PropTypes.bool,

  /** Display 24 hour military style time. Also hides am/pm selector. */
  timePicker24Hour: PropTypes.bool,

  /** Size of increments for minute selector. */
  timePickerIncrement: PropTypes.number,

  /** Show two timepickers to define a time range */
  timePickerRange: PropTypes.bool,

  /** Show seconds selector. timePicker or timePickerRange must be set */
  timePickerSeconds: PropTypes.bool,

  /** Display column left of calendar with week numbers */
  weekNumbers: PropTypes.bool,

  /** Show select dropdown for the Year in the calendar header */
  yearDropdown: PropTypes.bool,

  /** The maximum year in the select year dropdown */
  yearDropdownMaxYear: PropTypes.number,

  /** The minimum year in the select year dropdown */
  yearDropdownMinYear: PropTypes.number
};

DatePicker.defaultProps = {
  alwaysShowCalendars: false,
  applyButtonClasses: '',
  autoApply: false,
  buttonClasses: '',
  cancelButtonClasses: '',
  className: '',
  dataQa: '',
  dateEnd: undefined,
  dateMax: moment().add(50, 'y').format('YYYY-MM-DD'),
  dateMin: moment().add(-50, 'y').format('YYYY-MM-DD'),
  dateStart: undefined,
  error: '',
  format: 'D MMM YYYY',
  getClassNamesForDate: () => '',
  htmlId: '',
  isSelectableDate: () => false,
  isoWeekNumbers: false,
  labelText: '',
  linkedCalendars: true,
  monthDropdown: false,
  name: '',
  numberOfMonths: 1,
  onChangeCallback: () => {},
  placeholder: '',
  positionY: 'down',
  positionX: 'right',
  rangeDelimiter: '–',
  ranges: false,
  rangePresets: {
    Today: [
      moment().format('YYYY-MM-DD'),
      moment().format('YYYY-MM-DD')
    ],
    Yesterday: [
      moment().subtract(1, 'day').format('YYYY-MM-DD'),
      moment().subtract(1, 'day').format('YYYY-MM-DD')
    ],
    'Last 7 Days': [
      moment().subtract(7, 'day').format('YYYY-MM-DD'),
      moment().format('YYYY-MM-DD')
    ],
    'Last 30 Days': [
      moment().subtract(30, 'day').format('YYYY-MM-DD'),
      moment().format('YYYY-MM-DD')
    ],
    'This Month': [
      moment().startOf('month').format('YYYY-MM-DD'),
      moment().format('YYYY-MM-DD')
    ],
    'Last Month': [
      moment().subtract(1, 'month').startOf('month').format('YYYY-MM-DD'),
      moment().subtract(1, 'month').endOf('month').format('YYYY-MM-DD')
    ]
  },
  screenReaderLabel: false,
  showCustomRangeLabel: false,
  singleDatePicker: false,
  timePicker: false,
  timePicker24Hour: false,
  timePickerIncrement: 1,
  timePickerRange: false,
  timePickerSeconds: false,
  weekNumbers: false,
  yearDropdown: false,
  yearDropdownMaxYear: parseInt(moment().add(50, 'y').format('YYYY'), 10),
  yearDropdownMinYear: parseInt(moment().add(-50, 'y').format('YYYY'), 10)
};

export const BareDatePicker = DatePicker;
export default withTheme(withStyles(styles)(DatePicker));
