import React from 'react';
import { storiesOf } from '@storybook/react';
import withInfo from '../withInfo';
import { withStoryWrapper } from '../StoryWrapper';
import { BareDatePicker } from '../../src';
import ExampleDatePicker from './common/ExampleDatePicker';

const notes = `
  #Basic DatePicker Usage
`;

storiesOf('DatePicker.Usage', module)
  .addDecorator(
    withInfo({
      propTables: [BareDatePicker]
    })
  )
  .addDecorator(withStoryWrapper)
  .add('Basic DatePicker', () => (
    <ExampleDatePicker />
  ), { notes: { markdown: notes } })
  .add('Start/End Dates', () => (
    <ExampleDatePicker
      labelText="Has Label"
      dateStart="2001-09-06"
      dateEnd="2001-09-11"
    />
  ))
  .add('dateMin / dateMax', () => (
    <ExampleDatePicker
      labelText="Has Label"
      error="Has error message"
      dateStart="2019-09-06"
      dateEnd="2019-09-11"
      dateMin="2019-08-01"
      dateMax="2019-10-01"
    />
  ))
  .add('Single Date Picker', () => (
    <ExampleDatePicker
      labelText="Has screenReaderLabel and error"
      error="Has error message"
      screenReaderLabel
      singleDatePicker
      format="YYYY-MM-DD"
    />
  ))
  .add('isCustomDate', () => (
    <ExampleDatePicker
      labelText="Has screenReaderLabel"
      screenReaderLabel
      dateStart="2019-09-06"
      dateEnd="2019-09-11"
      isCustomDate={(day) => (day.get('date') % 3 === 0 ? 'customDay' : '')}
    />
  ))
  .add('autoApply', () => (
    <ExampleDatePicker
      autoApply
    />
  ))
  .add('isSelectableDate', () => (
    <ExampleDatePicker
      dateStart="2019-09-06"
      dateEnd="2019-09-11"
      isSelectableDate={(day) => {
        const dayString = day.format('YYYY-MM-DD');
        const dates = ['2019-09-05', '2019-09-10'];
        return dates.includes(dayString);
      }}
    />
  ))
  .add('With error message', () => (
    <ExampleDatePicker
      dateStart="2019-09-06"
      dateEnd="2019-09-11"
      error="These dates are no good pal."

    />
  ))
  .add('getClassNamesForDate', () => (
    <ExampleDatePicker
      dateStart="2019-09-06"
      dateEnd="2019-09-11"
      getClassNamesForDate={(day) => (day.get('date') % 3 === 0 ? 'customDay' : '')}
    />
  ))
  .add('isSelectableDate', () => (
    <ExampleDatePicker
      dateStart="2019-09-06"
      dateEnd="2019-09-11"
      isSelectableDate={(day) => {
        const dayString = day.format('YYYY-MM-DD');
        const dates = ['2019-09-05', '2019-09-10'];
        return dates.includes(dayString);
      }}
    />
  ));
