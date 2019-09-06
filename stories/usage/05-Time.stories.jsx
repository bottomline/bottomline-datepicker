import React from 'react';
import { storiesOf } from '@storybook/react';
import withInfo from '../withInfo';
import { withStoryWrapper } from '../StoryWrapper';
import { BareDatePicker } from '../../src';
import ExampleDatePicker from './common/ExampleDatePicker';

const notes = `
  #Time Picker
`;

storiesOf('DatePicker.Usage.TimePicker', module)
  .addDecorator(
    withInfo({
      propTables: [BareDatePicker]
    })
  )

  .addDecorator(withStoryWrapper)
  .add('Basic Usage', () => (
    <ExampleDatePicker
      timePicker
      singleDatePicker
    />
  ), { notes: { markdown: notes } })
  .add('timePickerRange', () => (
    <ExampleDatePicker
      timePickerRange
    />
  ))
  .add('timePickerSeconds', () => (
    <ExampleDatePicker
      timePickerRange
      timePickerSeconds
    />
  ))
  .add('timePicker24Hour', () => (
    <ExampleDatePicker
      timePickerRange
      timePicker24Hour
    />
  ))
  .add('timePickerIncrement', () => (
    <ExampleDatePicker
      timePicker
      timePickerIncrement={15}
    />
  ));
