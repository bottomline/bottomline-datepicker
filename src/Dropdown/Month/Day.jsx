import injectSheet from 'react-jss';
import PropTypes from 'prop-types';
import React from 'react';
import moment from 'moment';
import classNames from 'classnames';
import styles from './Day.styles';
import { inRange, isValidSelection } from '../../utils/dateCompare';

const Day = ({
  classes,
  dataQa,
  dateMax,
  dateMin,
  getClassNamesForDate,
  isSelectableDate,
  day,
  head,
  onClick,
  onMouseEnter,
  selectedStartDate,
  selectedEndDate
}) => {
  const isValid = isValidSelection(day, [dateMin, dateMax]);
  const inCurrentMonth = day.month() === moment(head).month();
  const disabled = !isValid || isSelectableDate(day) || !inCurrentMonth;

  const buttonClassNames = (thisDay, start, end) => {
    // NOTE: isSame() returns true if the date passed to it is undefined
    const sameAsStart = start !== undefined && thisDay.isSame(start, 'day');
    const sameAsEnd = end !== undefined && thisDay.isSame(end, 'day');

    return classNames({
      [classes.cellButton]: true,
      [classes.disabled]: disabled,
      [classes.hidden]: !inCurrentMonth,
      [classes.isToday]: !disabled && thisDay.isSame(moment(), 'day'),
      [classes.selected]: !disabled && (sameAsStart || sameAsEnd),
      [classes.selectStart]: !disabled && sameAsStart && !sameAsEnd,
      [classes.selectEnd]: !disabled && !sameAsStart && sameAsEnd,
      [classes.inRange]: !sameAsStart && !sameAsEnd && inRange(thisDay, start, end)
    });
  };
  const cellClassNames = () => {
    if (disabled) {
      return '';
    }
    const customClasses = getClassNamesForDate(day);
    if (typeof customClasses === 'string') {
      return customClasses;
    }
    if (Array.isArray(customClasses)) {
      return customClasses.join(' ');
    }
    return '';
  };
  return (
    <td className={cellClassNames()}>
      <button
        data-qa={dataQa || `calendar-day-${day.format('YYYY-MM-DD')}`}
        type="button"
        onMouseEnter={() => {
          onMouseEnter(moment(day)
            .set('hour', 12)
            .set('minute', 0)
            .set('second', 0));
        }}
        onClick={() => {
          onClick(moment(day)
            .set('hour', 12)
            .set('minute', 0)
            .set('second', 0));
        }}
        disabled={disabled}
        className={buttonClassNames(day, selectedStartDate, selectedEndDate)}
      >
        <span>{day.format('D')}</span>
      </button>
    </td>
  );
};

Day.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  dataQa: PropTypes.string,
  dateMax: PropTypes.string.isRequired,
  dateMin: PropTypes.string.isRequired,
  day: PropTypes.shape({}).isRequired,
  head: PropTypes.shape({}).isRequired,
  getClassNamesForDate: PropTypes.func.isRequired,
  isSelectableDate: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  selectedEndDate: PropTypes.shape({}),
  selectedStartDate: PropTypes.shape({})
};

Day.defaultProps = {
  dataQa: '',
  selectedStartDate: undefined,
  selectedEndDate: undefined
};

export default injectSheet(styles)(Day);
