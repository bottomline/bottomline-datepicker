import { withStyles, withTheme } from '@glu/theming';
import PropTypes from 'prop-types';
import React from 'react';
import locale from '@glu/locale';
import styles from './WeekDays.styles';

const WeekDays = ({ classes, weekNumbers }) => {
  const weekdays = [
    locale.get('sun'),
    locale.get('mon'),
    locale.get('tue'),
    locale.get('wed'),
    locale.get('thu'),
    locale.get('fri'),
    locale.get('sat')
  ];
  return (
    <thead>
      <tr>
        {weekNumbers
            && <td className={`${classes.headerCell} ${classes.weekHeader}`}>{locale.get('weekHeader')}</td>
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


export default withTheme(withStyles(styles)(WeekDays));
