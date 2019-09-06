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

storiesOf('DatePicker.Usage.TimePicker', module)
  .addDecorator(
    withInfo({
      propTables: [BareDatePicker]
    })
  )

  .addDecorator(withStoryWrapper)
  .add('auto position playground', () => (
    <div style={{
      position: 'absolute',
      bottom: text('bottom', '0'),
      left: text('left', 'auto'),
      top: text('top', 'auto'),
      right: text('right', '0')
    }}
    >
      <ExampleDatePicker
        config={{
          opens: text('opens', 'right'),
          drops: text('drops', 'down')
        }}
      />
    </div>
  ), { notes: { markdown: notes } })
  .add('custom button classes', () => (
    <ExampleDatePicker
      buttonClasses="custom-both-buttons"
      applyButtonClasses="custom-apply-button"
      cancelButtonClasses="custom-cancel-button"
    />
  ));
