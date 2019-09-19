import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs/src/index';
import withInfo from '../withInfo';
import { withStoryWrapper } from '../StoryWrapper';
import { BareDatePicker } from '../../src';
import ExampleDatePicker from './common/ExampleDatePicker';

const notes = `
  #Styling Options
`;

storiesOf('DatePicker.Usage.Styling', module)
  .addDecorator(
    withInfo({
      propTables: [BareDatePicker]
    })
  )

  .addDecorator(withStoryWrapper)
  .add('Position dropdown', () => (
    <div style={{
      position: 'absolute',
      bottom: text('bottom', '0'),
      left: text('left', 'auto'),
      top: text('top', 'auto'),
      right: text('right', '0')
    }}
    >
      <ExampleDatePicker />
    </div>
  ), { notes: { markdown: notes } })
  .add('getClassNamesForDate', () => (
    <ExampleDatePicker
      dateStart="2019-09-06"
      dateEnd="2019-10-01"
      getClassNamesForDate={(day) => (day.get('date') % 3 === 0 ? 'customDay' : '')}
    />
  ))
  .add('custom button classes', () => (
    <ExampleDatePicker
      buttonClasses="custom-both-buttons"
      applyButtonClasses="custom-apply-button"
      cancelButtonClasses="custom-cancel-button"
    />
  ));
