import PropTypes from 'prop-types';
import React, { useState } from 'react';
import MonthNav from './MonthNav';
import Month from './Month/Month';

const Calendar = ({
  dateMax,
  dateMin,
  first,
  handleDayClick,
  handleDayHover,
  head,
  setHead,
  last,
  linkedCalendars,
  monthDropdown,
  selectedStartDate,
  selectedEndDate,
  weekNumbers,
  yearDropdown,
  yearDropdownMaxYear,
  yearDropdownMinYear,
  ...rest
}) => {
  const [thisHead, setThisHead] = useState(head);
  return (
    <>
      <MonthNav
        dateMax={dateMax}
        dateMin={dateMin}
        first={!linkedCalendars || first}
        head={linkedCalendars ? head : thisHead}
        last={!linkedCalendars || last}
        monthDropdown={monthDropdown}
        setHead={linkedCalendars ? setHead : setThisHead}
        yearDropdown={yearDropdown}
        yearDropdownMaxYear={yearDropdownMaxYear}
        yearDropdownMinYear={yearDropdownMinYear}
      />
      <Month
        dateMax={dateMax}
        dateMin={dateMin}
        handleDayClick={handleDayClick}
        handleDayHover={handleDayHover}
        head={linkedCalendars ? head : thisHead}
        selectedStartDate={selectedStartDate}
        selectedEndDate={selectedEndDate}
        weekNumbers={weekNumbers}
        {...rest}
      />
    </>
  );
};

Calendar.propTypes = {
  dateMax: PropTypes.string.isRequired,
  dateMin: PropTypes.string.isRequired,
  first: PropTypes.bool.isRequired,
  handleDayClick: PropTypes.func.isRequired,
  handleDayHover: PropTypes.func.isRequired,
  head: PropTypes.shape({}).isRequired,
  last: PropTypes.bool.isRequired,
  linkedCalendars: PropTypes.bool.isRequired,
  monthDropdown: PropTypes.bool.isRequired,
  setHead: PropTypes.func.isRequired,
  selectedStartDate: PropTypes.shape({}),
  selectedEndDate: PropTypes.shape({}),
  weekNumbers: PropTypes.bool.isRequired,
  yearDropdown: PropTypes.bool.isRequired,
  yearDropdownMaxYear: PropTypes.number.isRequired,
  yearDropdownMinYear: PropTypes.number.isRequired
};

Calendar.defaultProps = {
  selectedStartDate: undefined,
  selectedEndDate: undefined
};

export default Calendar;
