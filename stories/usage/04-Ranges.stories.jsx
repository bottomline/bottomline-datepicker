import React from 'react';
import { storiesOf } from '@storybook/react';
import moment from 'moment/moment';
import withInfo from '../withInfo';
import { withStoryWrapper } from '../StoryWrapper';
import { BareDatePicker } from '../../src';
import ExampleDatePicker from './common/ExampleDatePicker';

const notes = `
  #Basic DatePicker Usage
`;

storiesOf('DatePicker.Usage.Range', module)
  .addDecorator(
    withInfo({
      propTables: [BareDatePicker]
    })
  )

  .addDecorator(withStoryWrapper)


  .add('ranges', () => (
    <ExampleDatePicker
      ranges
    />
  ), { notes: { markdown: notes } })
  .add('rangePresets', () => (
    <ExampleDatePicker
      ranges
      rangePresets={{
        'Independence Day': [
          '1776-07-04',
          '1776-07-04'
        ],
        'Birthday Week': [
          moment('1988-06-26').add(-3, 'days').format('YYYY-MM-DD'),
          moment('1988-06-26').add(3, 'days').format('YYYY-MM-DD')
        ],
        'This Month': [
          moment().startOf('month').format('YYYY-MM-DD'),
          moment().format('YYYY-MM-DD')
        ]
      }}
    />
  ))
  .add('alwaysShowCalendars', () => (
    <ExampleDatePicker
      alwaysShowCalendars
      ranges
      numberOfMonths={2}
      timePickerRange
      rangePresets={{
        'Christmas Week': [
          '2017-12-20',
          '2017-12-25'
        ],
        'Independence Day': [
          '2016-07-04',
          '2016-07-04'
        ],
        'Birthday Week': [
          moment('2019-06-26').add(-3, 'days').format('YYYY-MM-DD'),
          moment('2019-06-26').add(3, 'days').format('YYYY-MM-DD')
        ],
        'This Month': [
          moment().startOf('month').format('YYYY-MM-DD'),
          moment().format('YYYY-MM-DD')
        ]
      }}
    />
  ))
  .add('showCustomRangeLabel', () => (
    <ExampleDatePicker
      showCustomRangeLabel
      ranges
    />
  ));
