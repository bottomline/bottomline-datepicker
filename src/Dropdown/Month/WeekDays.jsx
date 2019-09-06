import injectSheet from 'react-jss';
import PropTypes from 'prop-types';
import React from 'react';
import localeGet from '../../utils/locale.js';
import styles from './WeekDays.styles';

const WeekDays = ({ classes, weekNumbers }) => {
  const weekdays = [
    localeGet('sun'),
    localeGet('mon'),
    localeGet('tue'),
    localeGet('wed'),
    localeGet('thu'),
    localeGet('fri'),
    localeGet('sat')
  ];
  return (
    <thead>
      <tr>
        {weekNumbers
            && <td className={`${classes.headerCell} ${classes.weekHeader}`}>{localeGet('weekHeader')}</td>
          }
        {weekdays.map((day, i) => (
          <td key={`day-${i + 1}-${day}`} className={classes.headerCell}>{day}</td>
        ))}
      </tr>
    </thead>
  );
};

WeekDays.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  weekNumbers: PropTypes.bool.isRequired
};


export default injectSheet(styles)(WeekDays);
