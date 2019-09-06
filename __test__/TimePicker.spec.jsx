import React from 'react';
import PropTypes from 'prop-types';
import { mount } from 'enzyme';

import { nextTheme, ThemeProvider } from '@glu/theming';
import DatePicker from '../src/DatePicker';
import '../src/themeDefaults';

const Wrapper = ({ children }) => (
  <ThemeProvider baseTheme={nextTheme}>
    {children}
  </ThemeProvider>
);

Wrapper.propTypes = {
  children: PropTypes.node.isRequired
};

describe('TimePicker', () => {
  afterEach(() => {
    document.body.innerHTML = '';
  });

  it('should update input with single time', () => {
    const wrapper = mount(
      <Wrapper>
        <DatePicker
          htmlId="unique"
          {...{
            singleDatePicker: true,
            timePicker: true,
            timePickerSeconds: true,
            dateStart: '2019-06-26',
            dateEnd: '2019-06-27'
          }}
        />
      </Wrapper>
    );
    wrapper.find('input').simulate('focus');
    wrapper.find('[data-qa="calendar-day-2019-06-11"]').simulate('click');
    wrapper.find('[data-qa="timepicker"] [data-qa="hour-select"]').simulate('change', { target: { value: 3 } });
    wrapper.find('[data-qa="timepicker"] [data-qa="minute-select"]').simulate('change', { target: { value: 3 } });
    wrapper.find('[data-qa="timepicker"] [data-qa="second-select"]').simulate('change', { target: { value: 3 } });
    wrapper.find('[data-qa="timepicker"] [data-qa="meridiem-select"]').simulate('change', { target: { value: 'am' } });
    wrapper.find('button[data-qa="apply-button"]').simulate('click');
    const inputValue = wrapper.find('input').prop('value');
    expect(inputValue).toMatchSnapshot();
  });

  it('should disable timePicker selects when no dates are set', () => {
    const wrapper = mount(
      <Wrapper>
        <DatePicker
          htmlId="unique"
          {...{
            singleDatePicker: true,
            timePicker: true,
            timePickerSeconds: true
          }}
        />
      </Wrapper>
    );
    wrapper.find('input').simulate('focus');
    wrapper.find('button[data-qa="apply-button"]').simulate('click');
    expect(wrapper.find('[data-qa="timepicker"] [data-qa="hour-select"]').prop('disabled')).toEqual(true);
    expect(wrapper.find('[data-qa="timepicker"] [data-qa="minute-select"]').prop('disabled')).toEqual(true);
    expect(wrapper.find('[data-qa="timepicker"] [data-qa="second-select"]').prop('disabled')).toEqual(true);
    expect(wrapper.find('[data-qa="timepicker"] [data-qa="meridiem-select"]').prop('disabled')).toEqual(true);
  });

  it('should update input with time range', () => {
    const wrapper = mount(
      <Wrapper>
        <DatePicker
          htmlId="unique"
          {...{
            singleDatePicker: true,
            timePickerRange: true,
            dateStart: '2019-06-26',
            dateEnd: '2019-06-27'
          }}
        />
      </Wrapper>
    );
    wrapper.find('input').simulate('focus');
    wrapper.find('[data-qa="calendar-day-2019-06-11"]').simulate('click');
    wrapper.find('[data-qa="calendar-day-2019-06-11"]').simulate('click');
    wrapper.find('[data-qa="timepicker-start"] [data-qa="hour-select"]').simulate('change', { target: { value: 3 } });
    wrapper.find('[data-qa="timepicker-start"] [data-qa="minute-select"]').simulate('change', { target: { value: 3 } });
    wrapper.find('[data-qa="timepicker-start"] [data-qa="meridiem-select"]').simulate('change', { target: { value: 'am' } });
    wrapper.find('[data-qa="timepicker-end"] [data-qa="hour-select"]').simulate('change', { target: { value: 3 } });
    wrapper.find('[data-qa="timepicker-end"] [data-qa="minute-select"]').simulate('change', { target: { value: 3 } });
    wrapper.find('[data-qa="timepicker-end"] [data-qa="meridiem-select"]').simulate('change', { target: { value: 'pm' } });
    wrapper.find('button[data-qa="apply-button"]').simulate('click');
    const inputValue = wrapper.find('input').prop('value');
    expect(inputValue).toMatchSnapshot();
  });

  it('should format 24 hour time correctly', () => {
    const wrapper = mount(
      <Wrapper>
        <DatePicker
          htmlId="unique"
          {...{
            singleDatePicker: true,
            timePicker: true,
            timePickerSeconds: true,
            timePicker24Hour: true,
            dateStart: '2019-06-26',
            dateEnd: '2019-06-27'
          }}
        />
      </Wrapper>
    );
    wrapper.find('input').simulate('focus');
    wrapper.find('[data-qa="calendar-day-2019-06-11"]').simulate('click');
    wrapper.find('[data-qa="minute-select"]').simulate('change', { target: { value: 2 } });
    wrapper.find('button[data-qa="apply-button"]').simulate('click');
    wrapper.find('input').simulate('focus');
    wrapper.find('[data-qa="second-select"]').simulate('change', { target: { value: 3 } });
    wrapper.find('[data-qa="minute-select"]').simulate('change', { target: { value: 3 } });
    wrapper.find('[data-qa="hour-select"]').simulate('change', { target: { value: 3 } });
    const inputValue = wrapper.find('input').prop('value');
    expect(inputValue).toMatchSnapshot();
  });
});
