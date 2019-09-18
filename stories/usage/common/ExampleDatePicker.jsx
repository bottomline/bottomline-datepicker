/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */

import React from 'react';
import { action } from '@storybook/addon-actions/dist/index';
import { DatePicker } from '../../../src';
import './custom-classes.css';

const defaultProps = {
  htmlId: 'foobar',
  name: 'foobaz',
  onChangeCallback: action('selection changed'),
  rangeDelimiter: '–'
};

const DatePickerExample = (props) => (
  <label>
    <span style={{ 'font-family': 'sans-serif', margin: '10px 0', display: 'block' }}>Datepicker</span>
    <DatePicker
      {...defaultProps}
      {...props}
    />
  </label>
);

export default DatePickerExample;
