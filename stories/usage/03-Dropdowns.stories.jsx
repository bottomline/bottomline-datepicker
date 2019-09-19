import React from 'react';
import { storiesOf } from '@storybook/react';
import withInfo from '../withInfo';
import { withStoryWrapper } from '../StoryWrapper';
import { BareDatePicker } from '../../src';
import ExampleDatePicker from './common/ExampleDatePicker';

const notes = `
  #Dropdowns
`;

storiesOf('DatePicker.Usage.Dropdowns', module)
  .addDecorator(
    withInfo({
      propTables: [BareDatePicker]
    })
  )

  .addDecorator(withStoryWrapper)
  .add('monthDropdown', () => (
    <ExampleDatePicker
      monthDropdown
    />
  ), { notes: { markdown: notes } })
  .add('yearDropdown', () => (
    <ExampleDatePicker
      yearDropdown
    />
  ))
  .add('show both dropdowns with options', () => (
    <ExampleDatePicker
      dateStart="2013-09-06"
      dateEnd="2013-10-01"
      monthDropdown
      yearDropdown
      yearDropdownMinYear={2010}
      yearDropdownMaxYear={2015}
    />
  ));
