/* eslint-disable react/prop-types */

import React from 'react';
import { action } from '@storybook/addon-actions/dist/index';
import { DatePicker } from '../../../src';
import './custom-classes.css';

const defaultProps = {
  htmlId: 'slaanesh',
  name: 'khorne',
  onChangeCallback: action('selection changed'),
  rangeDelimiter: '–'
};

const DatePickerExample = (props) => (
  <DatePicker
    {...defaultProps}
    {...props}
  />
);

export default DatePickerExample;
