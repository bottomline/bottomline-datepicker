import React from 'react';
import { storiesOf } from '@storybook/react';
import withInfo from '../withInfo';
import { withStoryWrapper } from '../StoryWrapper';
import { BareDatePicker } from '../../src';
import exampleFrench from '../../src/locale/defaultStrings_fr_CA_example';
import ExampleDatePicker from './common/ExampleDatePicker';

const notes = `
  #Localized
  Localization can be directly set via locale.set(props.localization in @glu/locale
`;

storiesOf('DatePicker.Usage', module)
  .addDecorator(
    withInfo({
      propTables: [BareDatePicker]
    })
  )
  .addDecorator(withStoryWrapper)
  .add('Localized', () => (
    <ExampleDatePicker localization={exampleFrench} />
  ),
  { notes: { markdown: notes } });
