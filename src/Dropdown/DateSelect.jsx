import injectSheet from 'react-jss';
import moment from 'moment';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Actions from './Actions';
import Calendar from './Calendar';
import TimePicker from './TimePicker/TimePicker';
import styles from './DateSelect.styles';

const DateSelect = ({
  autoApply,
  classes,
  numberOfMonths,
  onApply,
  onClose,
  selectedStartDate,
  selectedEndDate,
  setSelectedStartDate,
  setSelectedEndDate,
  singleDatePicker,
  weekNumbers,
  timePicker,
  timePickerRange,
  head,
  setHead,
  ...rest
}) => {
  const [workflow, setWorkflow] = useState();

  const handleDayClick = (date) => {
    if (singleDatePicker) {
      setWorkflow('completed');
      setSelectedStartDate(date);
      setSelectedEndDate(date);
    } else if (workflow === 'started' && date.valueOf() >= selectedStartDate.valueOf()) {
      setWorkflow('completed');
      setSelectedStartDate(selectedStartDate);
      setSelectedEndDate(date);
    } else {
      setWorkflow('started');
      setSelectedStartDate(date);
      setSelectedEndDate(undefined);
    }
  };

  const handleDayHover = (date) => {
    if (workflow === 'started' && date.valueOf() >= selectedStartDate.valueOf()) {
      setSelectedStartDate(selectedStartDate);
      setSelectedEndDate(date);
    }
  };

  const handleClickApply = () => {
    onApply(selectedStartDate, selectedEndDate);
  };

  if (autoApply && workflow === 'completed') {
    setWorkflow(undefined);
    onApply(selectedStartDate, selectedEndDate);
  }

  const months = Array(numberOfMonths).fill(0);

  return (
    <div
      data-qa="date-select"
      className={`${classes.dropdown} ${weekNumbers && classes.weekNumbers}`}
    >
      <div className={classes.calendars}>
        {months.map((month, i) => {
          const first = i === 0;
          const last = i === months.length - 1;
          return (
            <div
              data-qa={`${first ? 'first' : last ? 'last' : 'middle'}-calendar`}
              className={classes.calendar}
              key={moment(head).add(i, 'month').format('MM')}
            >
              <Calendar
                first={first}
                handleDayClick={handleDayClick}
                handleDayHover={handleDayHover}
                head={moment(head).add(i, 'month')}
                setHead={(date) => {
                  if (last) {
                    setHead(moment(date).add(-numberOfMonths + 1, 'month'));
                  } else {
                    setHead(date);
                  }
                }}
                last={last}
                selectedStartDate={selectedStartDate}
                selectedEndDate={selectedEndDate}
                weekNumbers={weekNumbers}
                {...rest}
              />
            </div>
          );
        })}
      </div>
      {timePickerRange && (
        <div className={classes.row}>
          <TimePicker
            label="Start Time"
            disabled={!selectedStartDate}
            dataQa="timepicker-start"
            dateTime={selectedStartDate}
            setDateTime={setSelectedStartDate}
            hour={selectedStartDate && selectedStartDate.hour()}
            minute={selectedStartDate && selectedStartDate.minute()}
            second={selectedStartDate && selectedStartDate.second()}
            {...rest}
          />
          <TimePicker
            label="End Time"
            disabled={!selectedEndDate}
            dataQa="timepicker-end"
            dateTime={selectedEndDate}
            setDateTime={setSelectedEndDate}
            hour={selectedEndDate && selectedEndDate.hour()}
            minute={selectedEndDate && selectedEndDate.minute()}
            second={selectedEndDate && selectedEndDate.second()}
            {...rest}
          />
        </div>
      )}
      <div className={(!autoApply || timePicker) ? classes.row : ''}>
        {!autoApply && (
          <Actions
            disabled={!selectedEndDate}
            onClickApply={handleClickApply}
            onClickCancel={onClose}
            {...rest}
          />
        )}
        {timePicker && (
          <TimePicker
            disabled={!selectedStartDate}
            dateTime={selectedStartDate}
            setDateTime={setSelectedStartDate}
            hour={selectedStartDate && selectedStartDate.hour()}
            minute={selectedStartDate && selectedStartDate.minute()}
            second={selectedStartDate && selectedStartDate.second()}
            {...rest}
          />
        )}
      </div>
    </div>
  );
};

DateSelect.propTypes = {
  autoApply: PropTypes.bool.isRequired,
  classes: PropTypes.shape({}).isRequired,
  dateMax: PropTypes.string.isRequired,
  dateMin: PropTypes.string.isRequired,
  linkedCalendars: PropTypes.bool.isRequired,
  monthDropdown: PropTypes.bool.isRequired,
  numberOfMonths: PropTypes.number.isRequired,
  onApply: PropTypes.func,
  onClose: PropTypes.func,
  selectedStartDate: PropTypes.shape({}),
  selectedEndDate: PropTypes.shape({}),
  setSelectedStartDate: PropTypes.func.isRequired,
  setSelectedEndDate: PropTypes.func.isRequired,
  singleDatePicker: PropTypes.bool.isRequired,
  weekNumbers: PropTypes.bool.isRequired,
  yearDropdown: PropTypes.bool.isRequired,
  yearDropdownMaxYear: PropTypes.number.isRequired,
  yearDropdownMinYear: PropTypes.number.isRequired,
  buttonClasses: PropTypes.string.isRequired,
  applyButtonClasses: PropTypes.string.isRequired,
  cancelButtonClasses: PropTypes.string.isRequired,
  timePicker: PropTypes.bool.isRequired,
  timePickerRange: PropTypes.bool.isRequired,
  timePickerSeconds: PropTypes.bool.isRequired,
  timePicker24Hour: PropTypes.bool.isRequired,
  timePickerIncrement: PropTypes.number.isRequired,
  head: PropTypes.shape({}).isRequired,
  setHead: PropTypes.func.isRequired
};

DateSelect.defaultProps = {
  onApply: undefined,
  onClose: undefined,
  selectedStartDate: undefined,
  selectedEndDate: undefined
};

export default injectSheet(styles)(DateSelect);
