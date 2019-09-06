import React from 'react';
import { storiesOf } from '@storybook/react';
import withInfo from '../withInfo';
import { withStoryWrapper } from '../StoryWrapper';
import { BareDatePicker } from '../../src';
import ExampleDatePicker from './common/ExampleDatePicker';

storiesOf('DatePicker.Usage.Calendars', module)
  .addDecorator(
    withInfo({
      propTables: [BareDatePicker]
    })
  )

  .addDecorator(withStoryWrapper)
  .add('2 calendars', () => (
    <ExampleDatePicker
      numberOfMonths={2}
    />
  ))
  .add('3 un-linked calendars', () => (
    <ExampleDatePicker
      numberOfMonths={3}
      linkedCalendars={false}
    />
  ))
  .add('2 calendars with dropdowns', () => (
    <ExampleDatePicker
      numberOfMonths={2}
      monthDropdown
      yearDropdown
      yearDropdownMinYear={2010}
      yearDropdownMaxYear={2050}
    />
  ))
  .add('2 un-linked calendars with dropdowns', () => (
    <ExampleDatePicker
      numberOfMonths={2}
      linkedCalendars={false}
      monthDropdown
      yearDropdown
      yearDropdownMinYear={2010}
      yearDropdownMaxYear={2050}
    />
  ))
  .add('weekNumbers', () => (
    <ExampleDatePicker
      weekNumbers
    />
  ))
  .add('isoWeekNumbers', () => (
    <ExampleDatePicker
      weekNumbers
      isoWeekNumbers
    />
  ));
