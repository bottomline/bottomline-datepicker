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
  .add('dateStart /   dateEnd', () => (
    <ExampleDatePicker
      dateStart="2001-09-06"
      dateEnd="2001-10-01"
    />
  ))
  .add('dateMin / dateMax', () => (
    <ExampleDatePicker
      dateStart="2019-09-06"
      dateEnd="2019-10-01"
      dateMin="2019-08-01"
      dateMax="2019-10-01"
    />
  ))
  .add('singleDatePicker', () => (
    <ExampleDatePicker
      singleDatePicker
      format="YYYY-MM-DD"
    />
  ))
  .add('isCustomDate', () => (
    <ExampleDatePicker
      dateStart="2019-09-06"
      dateEnd="2019-10-01"
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
      dateEnd="2019-10-01"
      isSelectableDate={(day) => {
        const dayString = day.format('YYYY-MM-DD');
        const dates = ['2019-09-05', '2019-09-10'];
        return dates.includes(dayString);
      }}
    />
  ))

  .add('isSelectableDate', () => (
    <ExampleDatePicker
      dateStart="2019-09-06"
      dateEnd="2019-10-01"
      isSelectableDate={(day) => {
        const dayString = day.format('YYYY-MM-DD');
        const dates = ['2019-09-05', '2019-09-10'];
        return dates.includes(dayString);
      }}
    />
  ));
