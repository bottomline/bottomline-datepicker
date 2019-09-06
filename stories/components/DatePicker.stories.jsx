import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  number, boolean, text
} from '@storybook/addon-knobs';
import withInfo from '../withInfo';
import { withStoryWrapper } from '../StoryWrapper';
import ExampleDatePicker from '../usage/common/ExampleDatePicker';
import { BareDatePicker } from '../../src';

const notes = `
  #DatePicker
  A datepicker user interface built from scratch using React and Moment. Has many configuration options.
`;

storiesOf('DatePicker.Components', module)
  .addDecorator(
    withInfo({
      propTables: [BareDatePicker]
    })
  )
  .addDecorator(withStoryWrapper)
  .add('Date Picker', () => (
    <ExampleDatePicker
      numberOfMonths={number('Number of Months', 1)}
      linkedCalendars={boolean('Linked Calendars', false)}
      monthDropdown={boolean('Month Dropdown', false)}
      yearDropdown={boolean('Year Dropdown', false)}
      weekNumbers={boolean('Week Numbers', false)}
      isoWeekNumbers={boolean('ISO Week Numbers', false)}
      autoApply={boolean('Auto Apply', false)}
      alwaysShowCalendars={boolean('Always Show', false)}
      showCustomRangeLabel={boolean('Custom Range Label', false)}
      ranges={boolean('Ranges', false)}
      timePicker={boolean('Time Picker', false)}
      timePickerRange={boolean('Time Picker Ranger', false)}
      timePickerSeconds={boolean('Time Picker Seconds', false)}
      timePicker24Hour={boolean('Time Picker 24 Hours', false)}
      timePickerIncrement={number('Time Picker Increment', 15)}
      singleDatePicker={boolean('Single Date Picker', false)}
      config={{
        opens: text('opens', 'right'),
        drops: text('drops', 'down')
      }}
    >
      <span>Lorem Ipsum</span>
    </ExampleDatePicker>
  ), { notes: { markdown: notes } });
