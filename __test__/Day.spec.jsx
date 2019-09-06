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

  it('should add classes when getClassNamesForDate returns string', () => {
    const wrapper = mount(
      <DatePicker
        {... defaultProps}
        {...{
          dateStart: '2019-09-06',
          dateEnd: '2019-09-11',
          getClassNamesForDate: (day) => (day.get('date') % 3 === 0 ? 'customDay' : '')
        }}
      />
    );
    wrapper.find('input').simulate('focus');
    const dropdown = wrapper.find('[data-qa="datepicker-slaanesh"] [data-qa="date-select"]');
    expect(dropdown).toMatchSnapshot();
  });

  it('should add classes when getClassNamesForDate returns array', () => {
    const wrapper = mount(
      <DatePicker
        {... defaultProps}
        {...{
          dateStart: '2019-09-06',
          dateEnd: '2019-09-11',
          getClassNamesForDate: (day) => (day.get('date') % 5 === 0 ? ['customDay', 'foobar'] : '')
        }}
      />
    );
    wrapper.find('input').simulate('focus');
    const dropdown = wrapper.find('[data-qa="datepicker-slaanesh"] [data-qa="date-select"]');
    expect(dropdown).toMatchSnapshot();
  });

  it('should not add classes if getClassNamesForDate does not return string or array', () => {
    const wrapper = mount(
      <DatePicker
        {... defaultProps}
        {...{
          dateStart: '2019-09-06',
          dateEnd: '2019-09-11',
          getClassNamesForDate: () => ({ foo: 'bar' })
        }}
      />
    );
    wrapper.find('input').simulate('focus');
    const dropdown = wrapper.find('[data-qa="datepicker-slaanesh"] [data-qa="date-select"]');
    expect(dropdown).toMatchSnapshot();
  });

  it('should disable days when isSelectableDate is set', () => {
    const wrapper = mount(
      <DatePicker
        {... defaultProps}
        {...{
          dateStart: '2019-09-06',
          dateEnd: '2019-09-11',
          isSelectableDate: (day) => {
            const dayString = day.format('YYYY-MM-DD');
            const dates = ['2019-09-05', '2019-09-10'];
            return dates.includes(dayString);
          }
        }}
      />
    );
    wrapper.find('input').simulate('focus');
    const dropdown = wrapper.find('[data-qa="datepicker-slaanesh"] [data-qa="date-select"]');
    expect(dropdown).toMatchSnapshot();
  });

  it('should disable days when isSelectableDate is set', () => {
    const wrapper = mount(
      <DatePicker
        {... defaultProps}
        {...{
          dateStart: '2019-09-06',
          dateEnd: '2019-09-11',
          isSelectableDate: (day) => {
            const dayString = day.format('YYYY-MM-DD');
            const dates = ['2019-09-05', '2019-09-10'];
            return dates.includes(dayString);
          }
        }}
      />
    );
    wrapper.find('input').simulate('focus');
    const dropdown = wrapper.find('[data-qa="datepicker-slaanesh"] [data-qa="date-select"]');
    expect(dropdown).toMatchSnapshot();
  });

  it('should disable days when isSelectableDate is set', () => {
    const wrapper = mount(
      <DatePicker
        {... defaultProps}
        {...{
          dateStart: '2019-09-06',
          dateEnd: '2019-09-11',
          isSelectableDate: (day) => {
            const dayString = day.format('YYYY-MM-DD');
            const dates = ['2019-09-05', '2019-09-10'];
            return dates.includes(dayString);
          }
        }}
      />
    );
    wrapper.find('input').simulate('focus');
    const dropdown = wrapper.find('[data-qa="datepicker-slaanesh"] [data-qa="date-select"]');
    expect(dropdown).toMatchSnapshot();
  });
});
