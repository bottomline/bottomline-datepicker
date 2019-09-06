import { withInfo } from '@storybook/addon-info';
import StoryWrapper from './StoryWrapper';
import DatePickerExample from './usage/common/ExampleDatePicker';

export default function customWithInfo(options) {
  return withInfo({
    header: false,
    inline: true,
    source: false,
    propTablesExclude: [StoryWrapper, DatePickerExample],
    ...options
  });
}
