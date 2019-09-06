import { withStyles, withTheme } from '@glu/theming';
import React from 'react';
import PropTypes from 'prop-types';
import locale from '@glu/locale';
import { CaretLeftIcon, CaretRightIcon } from '@glu/icons-react';
import moment from 'moment';
import { AccessibilityText } from '@glu/utilities-react';
import styles from './MonthNav.styles';
import { isValidSelection } from '../utils/dateCompare';
import SelectMonths from './SelectMonths';
import SelectYears from './SelectYears';

const MonthNav = ({
  classes,
  dateMax,
  dateMin,
  first,
  head,
  last,
  monthDropdown,
  setHead,
  yearDropdown,
  yearDropdownMaxYear,
  yearDropdownMinYear
}) => {
  const prevMonth = moment(head).add(-1, 'months');
  const nextMonth = moment(head).add(1, 'months');
  const handlePrevClick = () => { setHead(prevMonth); };
  const handleNextClick = () => { setHead(nextMonth); };
  const handleSelectMonth = (month) => { setHead(moment(head).month(month)); };
  const handleSelectYear = (year) => { setHead(moment(head).year(year)); };

  return (
    <div className={classes.header}>
      {first && isValidSelection(prevMonth, [dateMin, dateMax]) && (
        <button
          data-qa="previous-button"
          onClick={handlePrevClick}
          className={`${classes.button} ${classes.prev}`}
          type="button"
        >
          <AccessibilityText>
            {locale.get('prevMonth')}
          </AccessibilityText>
          <CaretLeftIcon />
        </button>
      )}
      <div className={classes.title}>
        <div className={classes.select}>
          {monthDropdown
            ? (
              <SelectMonths
                head={head}
                onChange={handleSelectMonth}
              />
            )
            : locale.get(head.format('MMM').toLowerCase())}
        </div>

        <div className={classes.select}>
          {yearDropdown
            ? (
              <SelectYears
                head={head}
                onChange={handleSelectYear}
                yearDropdownMinYear={yearDropdownMinYear}
                yearDropdownMaxYear={yearDropdownMaxYear}
              />
            )
            : head.format('YYYY')
        }
        </div>
      </div>
      {last && isValidSelection(nextMonth, [dateMin, dateMax]) && (
        <button
          data-qa="next-button"
          onClick={handleNextClick}
          className={`${classes.button} ${classes.next}`}
          type="button"
        >
          <AccessibilityText>
            {locale.get('nextMonth')}
          </AccessibilityText>
          <CaretRightIcon />
        </button>
      )}
    </div>
  );
};

MonthNav.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  dateMax: PropTypes.string.isRequired,
  dateMin: PropTypes.string.isRequired,
  first: PropTypes.bool.isRequired,
  head: PropTypes.shape({}).isRequired,
  last: PropTypes.bool.isRequired,
  monthDropdown: PropTypes.bool.isRequired,
  setHead: PropTypes.func.isRequired,
  yearDropdown: PropTypes.bool.isRequired,
  yearDropdownMaxYear: PropTypes.number.isRequired,
  yearDropdownMinYear: PropTypes.number.isRequired
};


export default withTheme(withStyles(styles)(MonthNav));
