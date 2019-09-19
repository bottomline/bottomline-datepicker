import React from 'react';
import { mount } from 'enzyme';
import DatePicker from '../src/DatePicker';

describe('DatePicker', () => {
  const defaultProps = {
    rangePresets: { Today: ['2019-09-09', '2019-09-09'] },
    htmlId: 'slaanesh',
    name: 'khorne',
    rangeDelimiter: '–'
  };

  afterEach(() => {
    document.body.innerHTML = '';
  });

  it('should add show weekNumbers', () => {
    const wrapper = mount(
      <DatePicker
        {... defaultProps}
        {...{
          dateStart: '2019-09-06',
          dateEnd: '2019-10-01',
          weekNumbers: true
        }}
      />
    );
    wrapper.find('input').simulate('focus');
    const dropdown = wrapper.find('[data-qa="datepicker-slaanesh"] [data-qa="date-select"]');
    expect(dropdown).toMatchSnapshot();
  });

  it('should add show ISO weekNumbers', () => {
    const wrapper = mount(
      <DatePicker
        {... defaultProps}
        {...{
          dateStart: '2019-09-06',
          dateEnd: '2019-10-01',
          weekNumbers: true,
          isoWeekNumbers: true
        }}
      />
    );
    wrapper.find('input').simulate('focus');
    const dropdown = wrapper.find('[data-qa="datepicker-slaanesh"] [data-qa="date-select"]');
    expect(dropdown).toMatchSnapshot();
  });
});
