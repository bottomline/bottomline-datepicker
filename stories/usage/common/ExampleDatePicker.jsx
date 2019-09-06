/* eslint-disable react/prop-types */

import React from 'react';
import locale from '@glu/locale';
import { action } from '@storybook/addon-actions/dist/index';
import { DatePicker, defaultStrings_en_US as defaultStrings } from '../../../src';
import './custom-classes.css';

const defaultProps = {
  htmlId: 'slaanesh',
  name: 'khorne',
  onChangeCallback: action('selection changed'),
  rangeDelimiter: '–'
};

const DatePickerExample = (props) => {
  locale.set(props.localization || defaultStrings);
  return (
    <DatePicker
      {...defaultProps}
      {...props}
    />
  );
};

export default DatePickerExample;
