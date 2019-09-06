import injectSheet from 'react-jss';
import PropTypes from 'prop-types';
import React from 'react';
import Day from './Day';
import WeekDays from './WeekDays';
import styles from './Month.styles';
import getMonthData from '../../utils/getMonthData';

const Month = ({
  classes,
  dateMax,
  dateMin,
  handleDayClick,
  handleDayHover,
  head,
  selectedStartDate,
  selectedEndDate,
  weekNumbers,
  ...rest
}) => {
  const calendar = getMonthData(head, rest);
  return (
    <table className={classes.calendar}>
      <WeekDays weekNumbers={weekNumbers} />
      <tbody>
        {calendar.map(({ week, days }) => (
          <tr key={`week-${week}`}>
            {weekNumbers
              && (
              <td className={classes.weekCell}>
                <span>{week}</span>
              </td>
              )
            }
            {days.map(day => (
              <Day
                dateMax={dateMax}
                dateMin={dateMin}
                {...rest}
                day={day}
                head={head}
                key={`day-${day}`}
                onClick={handleDayClick}
                onMouseEnter={handleDayHover}
                selectedStartDate={selectedStartDate}
                selectedEndDate={selectedEndDate}
              />
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

Month.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  dateMax: PropTypes.string.isRequired,
  dateMin: PropTypes.string.isRequired,
  handleDayClick: PropTypes.func.isRequired,
  handleDayHover: PropTypes.func.isRequired,
  head: PropTypes.shape({}).isRequired,
  options: PropTypes.shape({}),
  selectedStartDate: PropTypes.shape({}),
  selectedEndDate: PropTypes.shape({}),
  weekNumbers: PropTypes.bool.isRequired
};

Month.defaultProps = {
  options: {},
  selectedStartDate: undefined,
  selectedEndDate: undefined
};

export default injectSheet(styles)(Month);
